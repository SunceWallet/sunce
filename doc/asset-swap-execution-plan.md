# Asset Swap Execution Plan

## Product Decisions

- Asset Swap is part of the existing Trade flow.
- Swap is the default option under Trade.
- Default slippage tolerance is 1%.
- The UI stays simple and reuses existing wallet components where possible.

## User Experience

1. Opening Trade shows the Asset Swap form by default.
2. The form has two amount-and-asset controls:
   - Source: amount and asset the user sends.
   - Destination: amount and asset the user receives.
3. Either amount can be primary:
   - When the user edits the source amount, quote via Horizon strict-send paths and derive the destination amount.
   - When the user edits the destination amount, quote via Horizon strict-receive paths and derive the source amount.
4. The derived control shows an approximate value with an `≈` prefix.
5. The derived amount-and-asset control is visually smaller than the primary control to emphasize that it is calculated.
6. If the user edits the derived field, it becomes primary and the other field becomes derived.
7. Show quote states inline:
   - Finding best path.
   - No conversion path found.
   - Quote failed.
8. Submit action label: `Swap`.

## Reused Architecture

- Keep the existing `TradingDialog` as the entry point for asset exchange features.
- Reuse `TransactionSender` for signing and submission.
- Reuse `createTransaction` for transaction construction.
- Reuse `AssetSelector` for source and destination asset selection.
- Reuse `PriceInput` for amount input with embedded asset selectors.
- Reuse balance helpers from `~Generic/lib/stellar` for spendable balance validation.
- Reuse dialog action components: `DialogActionsBox`, `ActionButton`, and `Portal`.

## Routing

Update `src/App/routes.ts`:

```ts
tradeAsset(accountID, method?: "buy" | "sell" | "swap", preselectedAsset?: string)
```

Update `src/Trading/components/TradingDialog.tsx`:

- Treat `/account/:id/trade` as Swap by default.
- Keep `/account/:id/trade/buy` and `/account/:id/trade/sell` for existing order placement.
- Add `/account/:id/trade/swap` as an explicit swap route if needed for navigation consistency.
- Keep back navigation behavior consistent with the existing carousel flow.

Update `src/Trading/components/MainActionSelection.tsx`:

- Add Swap as the default/first option.
- Keep Buy and Sell as secondary options.

## Components To Add

Add `src/Trading/components/SwapForm.tsx`.

Responsibilities:

- Render source and destination controls.
- Track which side is primary.
- Trigger quote lookup when primary amount/assets change.
- Show derived amount with `≈`.
- Validate balances and selected assets.
- Build and submit a path-payment transaction.

Add `src/Trading/hooks/swap.ts` or `src/Trading/lib/swap.ts`.

Responsibilities:

- Debounce Horizon quote requests.
- Fetch strict-send and strict-receive paths.
- Select best quote.
- Convert Horizon path records to SDK `Asset[]` paths.
- Protect UI from stale Horizon responses.
- Apply 1% slippage.

## Horizon Quote Logic

For source amount primary:

```ts
horizon.strictSendPaths(sourceAsset, sourceAmount, [destinationAsset]).call()
```

- Select the record with the highest `destination_amount`.
- Derived destination amount is `destination_amount`.
- Transaction uses strict-send.
- Submit with `destMin = quotedDestination * 0.99`.

For destination amount primary:

```ts
horizon.strictReceivePaths([sourceAsset], destinationAsset, destinationAmount).call()
```

- Select the record with the lowest `source_amount`.
- Derived source amount is `source_amount`.
- Transaction uses strict-receive.
- Submit with `sendMax = quotedSource * 1.01`.

Implementation notes:

- Use existing `lodash.debounce` dependency.
- Ignore quote requests until both assets are selected, assets differ, and primary amount is valid and greater than zero.
- Use a monotonic request id or cancellation flag to ignore stale responses.
- Clear derived value when quote inputs become incomplete.

## Transaction Helper

Add a helper to `src/Generic/lib/transaction.ts` similar to `createPaymentOperation`:

```ts
createPathPaymentOperation({
  mode,
  sourceAsset,
  sourceAmount,
  destinationAsset,
  destinationAmount,
  destination,
  path
})
```

For an in-wallet swap, `destination` is the account's own account ID.

Strict-send operation:

```ts
Operation.pathPaymentStrictSend({
  sendAsset: sourceAsset,
  sendAmount: sourceAmount,
  destination,
  destAsset: destinationAsset,
  destMin,
  path,
  withMuxing: true
})
```

Strict-receive operation:

```ts
Operation.pathPaymentStrictReceive({
  sendAsset: sourceAsset,
  sendMax,
  destination,
  destAsset: destinationAsset,
  destAmount: destinationAmount,
  path,
  withMuxing: true
})
```

Then create the transaction with existing `createTransaction`.

## Validation

Validate before quote and before submit:

- Source asset is selected.
- Destination asset is selected.
- Source and destination assets are different.
- Primary amount is valid and greater than zero.
- A quote exists for the current form state.
- Source spendable balance is enough.
- Destination asset is already trusted by the account.

MVP asset scope:

- Use current account balances/trustlines for both selectors.
- Include XLM via `showXLM`.
- Do not add trustline creation to the swap transaction in the first implementation.

## Transaction Review And History

Update `src/TransactionReview/components/Operations.tsx`:

- Render `pathPaymentStrictSend` and `pathPaymentStrictReceive` as swap/path-payment operations instead of generic JSON.
- Show source amount, source asset, destination amount, destination asset, path, and destination account.

Update `src/Generic/lib/paymentSummary.ts`:

- Include strict-send and strict-receive path-payment operations.
- For swaps to self, summarize as a mixed asset change so transaction history gets the swap icon and meaningful balances.

## Translations

Add keys to each `i18n/locales/*/trading.json` file:

- `action-selection.swap.label`
- `action-selection.swap.description`
- `swap.action.submit`
- `swap.inputs.source.label`
- `swap.inputs.destination.label`
- `swap.quote.loading`
- `swap.quote.no-path`
- `swap.quote.failed`
- `swap.validation.source-asset-missing`
- `swap.validation.destination-asset-missing`
- `swap.validation.same-asset`
- `swap.validation.invalid-amount`
- `swap.validation.not-enough-balance`
- `swap.validation.no-quote`

Use English as the source wording and mirror keys in all locale files.

## Implementation Steps

1. Add route/action plumbing for Swap in `routes.ts`, `TradingDialog.tsx`, and `MainActionSelection.tsx`.
2. Add `SwapForm` UI using `PriceInput` and `AssetSelector`.
3. Add quote hook/lib for strict-send and strict-receive Horizon paths.
4. Add path-payment transaction helper with 1% slippage handling.
5. Connect form submission through existing `TransactionSender` and `createTransaction` flow.
6. Add validation and spendable balance checks.
7. Add transaction review and history support for strict path payments.
8. Add translation keys to all locales.
9. Run `npm test`.

## Non-Goals For First Implementation

- No custom slippage UI.
- No trustline creation during swap.
- No manual path selection.
- No advanced quote details unless needed for debugging.
