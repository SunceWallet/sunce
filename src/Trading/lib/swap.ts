import React from "react"
import BigNumber from "big.js"
import debounce from "lodash.debounce"
import { Asset, Horizon } from "@stellar/stellar-sdk"

export type SwapSide = "source" | "destination"
export type SwapMode = "strict-send" | "strict-receive"

export interface SwapQuote {
  mode: SwapMode
  sourceAsset: Asset
  sourceAmount: string
  destinationAsset: Asset
  destinationAmount: string
  path: Asset[]
  createdAt: number
}

type HorizonPathRecord = {
  destination_amount?: string
  path?: HorizonAssetRecord[]
  source_amount?: string
}

type HorizonAssetRecord = {
  asset_code?: string
  asset_issuer?: string
  asset_type: string
}

export const quoteFreshnessMs = 30_000

export function isSwapQuoteStale(quote: Pick<SwapQuote, "createdAt">, now = Date.now()) {
  return now - quote.createdAt > quoteFreshnessMs
}

export function floorStellarAmount(amount: BigNumber) {
  return amount.round(7, 0).toFixed(7)
}

export function ceilStellarAmount(amount: BigNumber) {
  return amount.round(7, 3).toFixed(7)
}

export function getAllowedPriceChangeBound(quote: SwapQuote, allowedPriceChange: number) {
  return quote.mode === "strict-send"
    ? floorStellarAmount(BigNumber(quote.destinationAmount).mul(1 - allowedPriceChange))
    : ceilStellarAmount(BigNumber(quote.sourceAmount).mul(1 + allowedPriceChange))
}

export function horizonAssetToAsset(asset: HorizonAssetRecord) {
  return asset.asset_type === "native" ? Asset.native() : new Asset(asset.asset_code || "", asset.asset_issuer || "")
}

export function selectBestStrictSendPath(records: HorizonPathRecord[]) {
  return records.reduce<HorizonPathRecord | undefined>((best, record) => {
    if (!record.destination_amount) return best
    return !best || BigNumber(record.destination_amount).gt(best.destination_amount || 0) ? record : best
  }, undefined)
}

export function selectBestStrictReceivePath(records: HorizonPathRecord[]) {
  return records.reduce<HorizonPathRecord | undefined>((best, record) => {
    if (!record.source_amount) return best
    return !best || BigNumber(record.source_amount).lt(best.source_amount || Number.MAX_SAFE_INTEGER) ? record : best
  }, undefined)
}

function pathFromRecord(record: HorizonPathRecord) {
  return (record.path || []).map(horizonAssetToAsset)
}

export async function fetchSwapQuote(options: {
  amount: string
  destinationAsset: Asset
  horizon: Horizon.Server
  primarySide: SwapSide
  sourceAsset: Asset
}) {
  const { amount, destinationAsset, horizon, primarySide, sourceAsset } = options

  if (primarySide === "source") {
    const response = await horizon.strictSendPaths(sourceAsset, amount, [destinationAsset]).call()
    const record = selectBestStrictSendPath((response.records || []) as HorizonPathRecord[])
    if (!record || !record.destination_amount) return undefined

    return {
      mode: "strict-send" as SwapMode,
      sourceAsset,
      sourceAmount: amount,
      destinationAsset,
      destinationAmount: record.destination_amount,
      path: pathFromRecord(record),
      createdAt: Date.now()
    }
  } else {
    const response = await horizon.strictReceivePaths([sourceAsset], destinationAsset, amount).call()
    const record = selectBestStrictReceivePath((response.records || []) as HorizonPathRecord[])
    if (!record || !record.source_amount) return undefined

    return {
      mode: "strict-receive" as SwapMode,
      sourceAsset,
      sourceAmount: record.source_amount,
      destinationAsset,
      destinationAmount: amount,
      path: pathFromRecord(record),
      createdAt: Date.now()
    }
  }
}

export function quoteChangedMaterially(previousQuote: SwapQuote, nextQuote: SwapQuote) {
  if (previousQuote.mode !== nextQuote.mode) return true
  const previousDerivedAmount = previousQuote.mode === "strict-send" ? previousQuote.destinationAmount : previousQuote.sourceAmount
  const nextDerivedAmount = nextQuote.mode === "strict-send" ? nextQuote.destinationAmount : nextQuote.sourceAmount
  return BigNumber(previousDerivedAmount).minus(nextDerivedAmount).abs().gt(0.0000001)
}

export function useSwapQuote(options: {
  amount: string
  amountIsValid: boolean
  destinationAsset?: Asset
  horizon: Horizon.Server
  primarySide: SwapSide
  sourceAsset?: Asset
}) {
  const { amount, amountIsValid, destinationAsset, horizon, primarySide, sourceAsset } = options
  const [quote, setQuote] = React.useState<SwapQuote | undefined>()
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "unavailable" | "failed">("idle")
  const requestIdRef = React.useRef(0)

  const requestQuote = React.useMemo(
    () =>
      debounce(async (requestId: number, requestOptions: Parameters<typeof fetchSwapQuote>[0]) => {
        try {
          const nextQuote = await fetchSwapQuote(requestOptions)
          if (requestId !== requestIdRef.current) return

          if (nextQuote) {
            setQuote(nextQuote)
            setStatus("success")
          } else {
            setQuote(undefined)
            setStatus("unavailable")
          }
        } catch (error) {
          if (requestId !== requestIdRef.current) return
          setQuote(undefined)
          setStatus("failed")
        }
      }, 400),
    []
  )

  React.useEffect(() => {
    requestIdRef.current += 1
    const requestId = requestIdRef.current

    if (!sourceAsset || !destinationAsset || sourceAsset.equals(destinationAsset) || !amountIsValid) {
      requestQuote.cancel()
      setQuote(undefined)
      setStatus("idle")
      return
    }

    setStatus("loading")
    requestQuote(requestId, {
      amount,
      destinationAsset,
      horizon,
      primarySide,
      sourceAsset
    })

    return () => requestQuote.cancel()
  }, [amount, amountIsValid, destinationAsset, horizon, primarySide, sourceAsset, requestQuote])

  React.useEffect(() => {
    if (!quote || !sourceAsset || !destinationAsset || sourceAsset.equals(destinationAsset) || !amountIsValid) return

    const refreshTimeout = window.setTimeout(() => {
      requestIdRef.current += 1
      setStatus("loading")
      requestQuote(requestIdRef.current, {
        amount,
        destinationAsset,
        horizon,
        primarySide,
        sourceAsset
      })
    }, Math.max(quote.createdAt + quoteFreshnessMs - Date.now(), 0))

    return () => window.clearTimeout(refreshTimeout)
  }, [amount, amountIsValid, destinationAsset, horizon, primarySide, quote, requestQuote, sourceAsset])

  return { quote, status }
}
