// tslint:disable:no-shadowed-variable

import { ObservableLike } from "observable-fns"
import React from "react"
import { Asset, FeeBumpTransaction, Horizon, Networks, TransactionBuilder } from "@stellar/stellar-sdk"
import { Account } from "~App/contexts/accounts"
import { createEmptyAccountData, AccountData, BalanceLine } from "../lib/account"
import { FixedOrderbookRecord } from "../lib/orderbook"
import { stringifyAsset } from "../lib/stellar"
import { mapSuspendables } from "../lib/suspense"
import { CollectionPage } from "~Workers/net-worker/stellar-network"
import {
  accountDataCache,
  accountOpenOrdersCache,
  accountTransactionsCache,
  orderbookCache,
  resetNetworkCaches,
  OfferHistory,
  TransactionHistory,
  DecodedTransactionResponse
} from "./_caches"
import { useHorizonURLs } from "./stellar"
import { useDebouncedState, useForceRerender } from "./util"
import { useNetWorker } from "./workers"

function withDecodedTx(tx: Horizon.HorizonApi.TransactionResponse, network: Networks): DecodedTransactionResponse {
  const decoded = TransactionBuilder.fromXDR(tx.envelope_xdr, network)

  return {
    ...tx,
    decodedTx: decoded instanceof FeeBumpTransaction ? decoded.innerTransaction : decoded
  }
}

function useDataSubscriptions<DataT, UpdateT>(
  reducer: (prev: DataT, update: UpdateT) => DataT,
  items: { get(): DataT; set(value: DataT): void; observe(): ObservableLike<UpdateT> }[]
): DataT[] {
  const unfinishedFetches: Promise<DataT>[] = []
  const [, setRefreshCounter] = useDebouncedState(0, 100)

  const currentDataSets = mapSuspendables(items, item => item.get())

  if (unfinishedFetches.length > 0) {
    throw unfinishedFetches.length === 1 ? unfinishedFetches[0] : Promise.all(unfinishedFetches)
  }

  React.useEffect(() => {
    items.map(item => {
      return item.observe().subscribe({
        next(update) {
          item.set(reducer(item.get(), update))
          setRefreshCounter(counter => counter + 1)
        },
        error(error) {
          // tslint:disable-next-line
          console.error(error)
        }
      })
    })

    return () => {
      // Don't unsubscribe to prevent missing updates (related to #1088)
      // subscriptions.forEach(subscription => unsubscribe(subscription))
    }
  }, [reducer, items, setRefreshCounter])

  return currentDataSets as DataT[]
}

function useDataSubscription<DataT, UpdateT>(
  reducer: (prev: DataT, update: UpdateT) => DataT,
  get: () => DataT,
  set: (value: DataT) => void,
  observe: () => ObservableLike<UpdateT>
): DataT {
  const items = React.useMemo(() => [{ get, set, observe }], [get, set, observe])
  return useDataSubscriptions(reducer, items)[0]
}

function applyAccountDataUpdate(prev: AccountData, next: AccountData): AccountData {
  // We ignore `prev` here
  return next
}

export function useLiveAccountDataSet(accountIDs: string[], testnet: boolean): AccountData[] {
  const horizonURLs = useHorizonURLs(testnet)
  const netWorker = useNetWorker()

  const items = React.useMemo(
    () =>
      accountIDs.map(accountID => {
        const selector = [horizonURLs, accountID] as const
        const prepare = (account: Horizon.AccountResponse | null) => {
          return account
            ? {
                ...account,
                balances: account.balances.filter(
                  (balance): balance is BalanceLine => balance.asset_type !== "liquidity_pool_shares"
                ),
                data_attr: account.data
              }
            : createEmptyAccountData(accountID)
        }

        return {
          get() {
            return (
              accountDataCache.get(selector) ||
              accountDataCache.suspend(selector, () => netWorker.fetchAccountData(horizonURLs, accountID).then(prepare))
            )
          },
          set(updated: AccountData) {
            accountDataCache.set(selector, updated)
          },
          observe() {
            return accountDataCache.observe(selector, () =>
              netWorker.subscribeToAccount(horizonURLs, accountID).map(prepare)
            )
          }
        }
      }),
    [accountIDs, horizonURLs, netWorker]
  )

  return useDataSubscriptions(applyAccountDataUpdate, items)
}

export function useLiveAccountData(accountID: string, testnet: boolean): AccountData {
  return useLiveAccountDataSet([accountID], testnet)[0]
}

function applyAccountOffersUpdate(prev: OfferHistory, next: Horizon.ServerApi.OfferRecord[]): OfferHistory {
  // We ignore `prev` here
  return { olderOffersAvailable: prev.olderOffersAvailable, offers: next }
}

export function useLiveAccountOffers(accountID: string, testnet: boolean): OfferHistory {
  const horizonURLs = useHorizonURLs(testnet)
  const netWorker = useNetWorker()

  const { get, set, observe } = React.useMemo(() => {
    const selector = [horizonURLs, accountID] as const
    const limit = 10
    return {
      get() {
        return (
          accountOpenOrdersCache.get(selector) ||
          accountOpenOrdersCache.suspend(selector, async () => {
            const page = await netWorker.fetchAccountOpenOrders(horizonURLs, accountID, { limit, order: "desc" })
            const offers = page._embedded.records
            return {
              olderOffersAvailable: offers.length === limit,
              offers
            }
          })
        )
      },
      set(updated: OfferHistory) {
        // reset olderOffersAvailable because updated history will only have the 10 most recent offers
        const olderOffersAvailable = updated.offers.length === limit
        accountOpenOrdersCache.set(selector, { ...updated, olderOffersAvailable })
      },
      observe() {
        return netWorker.subscribeToOpenOrders(horizonURLs, accountID)
      }
    }
  }, [accountID, horizonURLs, netWorker])

  return useDataSubscription(applyAccountOffersUpdate, get, set, observe)
}

export function useOlderOffers(accountID: string, testnet: boolean) {
  const forceRerender = useForceRerender()
  const horizonURLs = useHorizonURLs(testnet)
  const netWorker = useNetWorker()

  const fetchMoreOffers = React.useCallback(
    async function fetchMoreOffers() {
      let fetched: CollectionPage<Horizon.ServerApi.OfferRecord>

      const selector = [horizonURLs, accountID] as const
      const history = accountOpenOrdersCache.get(selector)

      const limit = 10
      const prevOffers = history?.offers || []

      fetched = await (prevOffers.length > 0
        ? netWorker.fetchAccountOpenOrders(horizonURLs, accountID, {
            cursor: prevOffers[prevOffers.length - 1].paging_token,
            limit,
            order: "desc"
          })
        : netWorker.fetchAccountOpenOrders(horizonURLs, accountID, {
            limit,
            order: "desc"
          }))

      const fetchedOffers: Horizon.ServerApi.OfferRecord[] = fetched._embedded.records

      accountOpenOrdersCache.set(
        selector,
        {
          // not an accurate science right now…
          olderOffersAvailable: fetchedOffers.length === limit,
          offers: [...(accountOpenOrdersCache.get(selector)?.offers || []), ...fetchedOffers]
        },
        true
      )

      // hacky…
      forceRerender()
    },
    [accountID, forceRerender, horizonURLs, netWorker]
  )

  return fetchMoreOffers
}

type EffectHandler = (account: Account, effect: Horizon.ServerApi.EffectRecord) => void

export function useLiveAccountEffects(accounts: Account[], handler: EffectHandler) {
  const netWorker = useNetWorker()
  const mainnetHorizonURLs = useHorizonURLs(false)
  const testnetHorizonURLs = useHorizonURLs(true)

  React.useEffect(() => {
    const subscriptions = accounts.map(account => {
      const horizonURLs = account.testnet ? testnetHorizonURLs : mainnetHorizonURLs
      const observable = netWorker.subscribeToAccountEffects(horizonURLs, account.accountID)
      const subscription = observable.subscribe(effect => effect && handler(account, effect))
      return subscription
    })

    return () => subscriptions.forEach(subscription => subscription.unsubscribe())
  }, [accounts, handler, mainnetHorizonURLs, netWorker, testnetHorizonURLs])
}

function applyOrderbookUpdate(prev: FixedOrderbookRecord, next: FixedOrderbookRecord) {
  // Ignoring `prev` here
  return next
}

export function useLiveOrderbook(selling: Asset, buying: Asset, testnet: boolean): FixedOrderbookRecord {
  const horizonURLs = useHorizonURLs(testnet)
  const netWorker = useNetWorker()

  const { get, set, observe } = React.useMemo(() => {
    const selector = [horizonURLs, selling, buying] as const
    return {
      get() {
        return (
          orderbookCache.get(selector) ||
          orderbookCache.suspend(selector, () =>
            netWorker.fetchOrderbookRecord(horizonURLs, stringifyAsset(selling), stringifyAsset(buying))
          )
        )
      },
      set(updated: FixedOrderbookRecord) {
        orderbookCache.set(selector, updated)
      },
      observe() {
        return netWorker.subscribeToOrderbook(horizonURLs, stringifyAsset(selling), stringifyAsset(buying))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifyAsset(buying), horizonURLs, netWorker, stringifyAsset(selling)])

  return useDataSubscription(applyOrderbookUpdate, get, set, observe)
}

const txsMatch = (a: Horizon.TransactionResponse, b: Horizon.TransactionResponse): boolean => {
  return a.source_account === b.source_account && a.source_account_sequence === b.source_account_sequence
}

function applyAccountTransactionsUpdate(network: Networks) {
  return (prev: TransactionHistory, update: DecodedTransactionResponse): TransactionHistory => {
    return prev.transactions.some(tx => txsMatch(tx, update))
      ? prev
      : {
          ...prev,
          transactions: [withDecodedTx(update, network), ...prev.transactions]
        }
  }
}

export function useLiveRecentTransactions(
  accountID: string,
  testnet: boolean,
  refetchKey: number = 0
): TransactionHistory {
  const horizonURLs = useHorizonURLs(testnet)
  const netWorker = useNetWorker()
  const network = testnet ? Networks.TESTNET : Networks.PUBLIC

  const { get, set, observe } = React.useMemo(() => {
    const limit = 15
    const selector = [horizonURLs, accountID] as const
    return {
      get() {
        return (
          accountTransactionsCache.get(selector) ||
          accountTransactionsCache.suspend(selector, async () => {
            const page = await netWorker.fetchAccountTransactions(horizonURLs, accountID, {
              emptyOn404: true,
              limit,
              order: "desc"
            })

            const transactions = page._embedded.records
            return {
              // not an accurate science right now…
              olderTransactionsAvailable: transactions.length === limit,
              transactions: transactions.map(tx => withDecodedTx(tx, network))
            }
          })
        )
      },
      set(updated: TransactionHistory) {
        accountTransactionsCache.set(selector, updated)
      },
      observe() {
        return netWorker.subscribeToAccountTransactions(horizonURLs, accountID)
      }
    }
  }, [accountID, horizonURLs, netWorker, refetchKey])

  return useDataSubscription(applyAccountTransactionsUpdate(network), get, set, observe)
}

export function useOlderTransactions(accountID: string, testnet: boolean) {
  const forceRerender = useForceRerender()
  const horizonURLs = useHorizonURLs(testnet)
  const netWorker = useNetWorker()
  const network = testnet ? Networks.TESTNET : Networks.PUBLIC

  const fetchMoreTransactions = React.useCallback(
    async function fetchMoreTransactions() {
      let fetched: CollectionPage<Horizon.TransactionResponse>

      const selector = [horizonURLs, accountID] as const
      const history = accountTransactionsCache.get(selector)

      const limit = 15
      const prevTransactions = history?.transactions || []

      if (prevTransactions.length > 0) {
        try {
          fetched = await netWorker.fetchAccountTransactions(horizonURLs, accountID, {
            emptyOn404: true,
            emptyOn410: true,
            cursor: prevTransactions[prevTransactions.length - 1].paging_token,
            limit: 15,
            order: "desc"
          })
        } catch (e) {
          fetched = ({ _embedded: { records: [] } } as unknown) as CollectionPage<Horizon.TransactionResponse>
        }
      } else {
        fetched = await netWorker.fetchAccountTransactions(horizonURLs, accountID, {
          emptyOn404: true,
          emptyOn410: true,
          limit,
          order: "desc"
        })
      }

      const fetchedTransactions: Horizon.TransactionResponse[] = fetched._embedded.records

      const transactions = fetchedTransactions
        .filter(record => !prevTransactions.some(prevTx => txsMatch(prevTx, record)))
        .map(tx => withDecodedTx(tx, network))

      accountTransactionsCache.set(
        selector,
        {
          // not an accurate science right now…
          olderTransactionsAvailable: fetchedTransactions.length === limit,
          transactions: [...prevTransactions, ...transactions]
        },
        true
      )

      // hacky…
      forceRerender()
      return transactions
    },
    [accountID, forceRerender, horizonURLs, netWorker]
  )

  return fetchMoreTransactions
}

export function useNetworkCacheReset() {
  return resetNetworkCaches
}
