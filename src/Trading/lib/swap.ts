import React from "react"
import BigNumber from "big.js"
import debounce from "lodash.debounce"
import { Asset } from "@stellar/stellar-sdk"
import { ceilStellarAmount, floorStellarAmount, stringifyAsset } from "~Generic/lib/stellar"
import { NetWorker } from "~Workers/worker-controller"

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

function getSwapMode(primarySide: SwapSide): SwapMode {
  return primarySide === "source" ? "strict-send" : "strict-receive"
}

export async function fetchSwapQuote(options: {
  amount: string
  destinationAsset: Asset
  horizonURLs: string[]
  netWorker: NetWorker
  primarySide: SwapSide
  sourceAsset: Asset
}) {
  const { amount, destinationAsset, horizonURLs, netWorker, primarySide, sourceAsset } = options
  const mode = getSwapMode(primarySide)

  if (mode === "strict-send") {
    const records = await netWorker.fetchStrictSendPaths(
      horizonURLs,
      stringifyAsset(sourceAsset),
      amount,
      stringifyAsset(destinationAsset)
    )
    const record = selectBestStrictSendPath((records || []) as HorizonPathRecord[])
    if (!record || !record.destination_amount) return undefined

    return {
      mode,
      sourceAsset,
      sourceAmount: amount,
      destinationAsset,
      destinationAmount: record.destination_amount,
      path: pathFromRecord(record),
      createdAt: Date.now()
    }
  } else {
    const records = await netWorker.fetchStrictReceivePaths(
      horizonURLs,
      stringifyAsset(sourceAsset),
      stringifyAsset(destinationAsset),
      amount
    )
    const record = selectBestStrictReceivePath((records || []) as HorizonPathRecord[])
    if (!record || !record.source_amount) return undefined

    return {
      mode,
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
  horizonURLs: string[]
  netWorker: NetWorker
  primarySide: SwapSide
  sourceAsset?: Asset
}) {
  const { amount, amountIsValid, destinationAsset, horizonURLs, netWorker, primarySide, sourceAsset } = options
  const [quote, setQuote] = React.useState<SwapQuote | undefined>()
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "unavailable" | "failed">("idle")
  const requestIdRef = React.useRef(0)
  const currentQuote =
    quote &&
    sourceAsset &&
    destinationAsset &&
    quote.sourceAsset.equals(sourceAsset) &&
    quote.destinationAsset.equals(destinationAsset) &&
    quote.mode === getSwapMode(primarySide)
      ? quote
      : undefined

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
      horizonURLs,
      netWorker,
      primarySide,
      sourceAsset
    })

    return () => requestQuote.cancel()
  }, [amount, amountIsValid, destinationAsset, horizonURLs, netWorker, primarySide, sourceAsset, requestQuote])

  React.useEffect(() => {
    if (!currentQuote || !sourceAsset || !destinationAsset || sourceAsset.equals(destinationAsset) || !amountIsValid) return

    const refreshTimeout = window.setTimeout(() => {
      requestIdRef.current += 1
      setStatus("loading")
      requestQuote(requestIdRef.current, {
        amount,
        destinationAsset,
        horizonURLs,
        netWorker,
        primarySide,
        sourceAsset
      })
    }, Math.max(currentQuote.createdAt + quoteFreshnessMs - Date.now(), 0))

    return () => window.clearTimeout(refreshTimeout)
  }, [amount, amountIsValid, currentQuote, destinationAsset, horizonURLs, netWorker, primarySide, requestQuote, sourceAsset])

  return { quote: currentQuote, status }
}
