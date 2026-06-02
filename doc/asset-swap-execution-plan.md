# Asset Swap Execution Plan

## Product Decisions

- Asset Swap is part of the existing Trade flow.
- Swap is the default option under Trade.
- Buy and Sell remain separate flows for order placement.
- Slippage tolerance is user-selectable with simple presets: 0.5%, 1%, 2%, and 5%.
- Default slippage tolerance is 1%.
- The UI stays simple and reuses existing wallet components where possible.
- When Trade is opened from an asset details screen, preselect that asset as `You pay`.

## User Experience

1. Opening Trade shows the Asset Swap form by default.
2. The form has two amount-and-asset controls:
   - `You pay`: amount and asset the user sends.
   - `You receive`: amount and asset the user receives.
3. Either amount can be primary:
   - When the user edits `You pay`, quote via Horizon strict-send paths and derive `You receive`.
   - When the user edits `You receive`, quote via Horizon strict-receive paths and derive `You pay`.
4. Keep the `You pay` and `You receive` controls the same size for readability and accessibility.
5. The derived control shows an approximate value with an `≈` prefix and a secondary label such as `Estimated`.
6. If the user edits the derived field, it becomes primary and the other field becomes derived.
7. Add a source/destination swap button between the two controls.
8. When the source/destination swap button is clicked, swap both amount+asset pairs and invert the quoted direction. Example: `10 XLM` for derived `0.12 EURMTL` becomes `0.12 EURMTL` for derived `10 XLM`.
9. Show quote states inline:
   - Finding best path.
   - No conversion path found.
   - Quote failed.
   - Quote updating.
   - Quote expired.
10. After quote loads, show a plain-language summary such as `You pay 10 XLM and receive about 0.12 EURMTL.`
11. Show the effective rate, for example `1 XLM ≈ 0.012 EURMTL`.
12. Show the path only when useful. For direct paths, omit it. For multi-hop paths, show compact text such as `via USDC`.
13. Show a compact slippage control below the quote details or near the submit action.
14. Slippage control options are `0.5%`, `1%`, `2%`, and `5%`, with `1%` selected by default.
15. Show slippage consequence in plain language:
   - If `You pay` is primary: `Minimum received: ...`.
   - If `You receive` is primary: `Maximum paid: ...`.
16. Submit action label: `Swap`.

## Reused Architecture

- Keep the existing `TradingDialog` as the entry point for asset exchange features.
- Reuse `TransactionSender` for signing and submission.
- Reuse `createTransaction` for transaction construction.
- Reuse `AssetSelector` for source and destination asset selection.
- Reuse `PriceInput` for amount input with embedded asset selectors.
- Reuse balance helpers from `~Generic/lib/stellar` for spendable balance validation.
- Reuse dialog action components: `DialogActionsBox`, `ActionButton`, and `Portal`.
- Reuse existing `Max` behavior from the payment form for the `You pay` amount.

## Routing

Update `src/App/routes.ts`:

```ts
tradeAsset(accountID, method?: "buy" | "sell" | "swap", preselectedAsset?: string)
```

Update `src/Trading/components/TradingDialog.tsx`:

- Treat `/account/:id/trade` as Swap by default.
- Keep `/account/:id/trade/buy` and `/account/:id/trade/sell` for existing order placement.
- Add `/account/:id/trade/swap` as an explicit swap route for navigation consistency.
- If an asset is present in the route, pass it to `SwapForm` as the initial `You pay` asset.
- Keep back navigation behavior consistent with the existing carousel flow.

Update the Trade action selection UI:

- Avoid a landing screen where users must choose before swapping.
- Use a simple top segmented control or compact mode selector: `Swap`, `Buy`, `Sell`.
- Select `Swap` by default.
- Keep Buy and Sell as separate flows, not as settings inside Swap.
- Keep the existing Buy and Sell forms reachable from `/trade/buy` and `/trade/sell`.

## Components To Add

Add `src/Trading/components/SwapForm.tsx`.

Responsibilities:

- Render source and destination controls.
- Track which side is primary.
- Render the source/destination swap button.
- Preselect `You pay` when an initial asset is provided.
- Trigger quote lookup when primary amount/assets change.
- Show derived amount with `≈`.
- Show available `You pay` balance below the selected pay asset.
- Show the effective rate, route summary, and slippage-adjusted transaction bound.
- Validate balances and selected assets.
- Track selected slippage tolerance.
- Track quote freshness.
- Build and submit a path-payment transaction.

Add `src/Trading/hooks/swap.ts` or `src/Trading/lib/swap.ts`.

Responsibilities:

- Debounce Horizon quote requests.
- Fetch strict-send and strict-receive paths.
- Select best quote.
- Convert Horizon path records to SDK `Asset[]` paths.
- Protect UI from stale Horizon responses.
- Apply selected slippage tolerance.
- Round slippage-adjusted bounds safely to Stellar's 7 decimal places.
- Re-check quote freshness before submission.

## Trade Mode Selection

The Trade screen should not force a first decision between Swap, Buy, and Sell before showing useful content.

Recommended UI:

- Show `Swap | Buy | Sell` as a compact segmented control near the top of `TradingDialog`, below the title/balances area.
- Default selected segment is `Swap`.
- The Swap form is visible immediately when opening Trade.
- Buy and Sell remain separate forms for order placement.
- When users change mode, update the route so deep links and back navigation stay predictable.
- Use labels that describe intent:
  - `Swap`: simple asset conversion now.
  - `Buy`: place a buy order.
  - `Sell`: place a sell order.

This replaces the current two-card action choice for users who just want to swap, while preserving the advanced Buy/Sell flows.

## Swap Direction Button

Add a small button between `You pay` and `You receive`.

Recommended UI:

- Use a vertical swap icon on mobile and a bidirectional swap icon on desktop if that matches available Material icons.
- Keep the button centered between the two controls.
- Give it an accessible label such as `Swap source and destination assets`.
- After click, animate or immediately exchange the two controls; do not show a confirmation.

Behavior:

- Exchange `You pay` amount+asset with `You receive` amount+asset.
- The new `You pay` side becomes primary.
- The new `You receive` side becomes derived.
- Trigger a quote refresh for the new direction.
- Preserve selected slippage.
- Example: `10 XLM` for derived `0.12 EURMTL` becomes `0.12 EURMTL` for derived `10 XLM`.

## Slippage Control

Add a simple preset control to `SwapForm`.

Recommended UI:

- Label: `Slippage tolerance`.
- Render options as small segmented buttons or chips: `0.5%`, `1%`, `2%`, `5%`.
- Keep `1%` selected by default.
- Keep the control visually secondary so it does not compete with the amount fields.
- Place it below the quote/status area, above the primary `Swap` action.
- Do not hide it under an advanced section for the first implementation; users should be able to understand why the final received/sent amount may differ from the quote.
- If `5%` is selected, show a mild warning: `High tolerance may allow a worse rate.`

Behavior:

- Changing slippage does not need to re-query Horizon because the best path and quoted amounts stay the same.
- Changing slippage updates the transaction bounds used at submit time.
- If the source amount is primary, slippage lowers the minimum accepted destination amount.
- If the destination amount is primary, slippage raises the maximum accepted source amount.
- Show a short helper text such as `Protects your swap if the market moves before submission.`
- Always show the calculated bound next to the slippage control:
  - `Minimum received` for strict-send swaps.
  - `Maximum paid` for strict-receive swaps.

## Horizon Quote Logic

For source amount primary:

```ts
horizon.strictSendPaths(sourceAsset, sourceAmount, [destinationAsset]).call()
```

- Select the record with the highest `destination_amount`.
- Derived destination amount is `destination_amount`.
- Transaction uses strict-send.
- Submit with `destMin = quotedDestination * (1 - selectedSlippage)`.
- Round `destMin` down to 7 decimal places.

For destination amount primary:

```ts
horizon.strictReceivePaths([sourceAsset], destinationAsset, destinationAmount).call()
```

- Select the record with the lowest `source_amount`.
- Derived source amount is `source_amount`.
- Transaction uses strict-receive.
- Submit with `sendMax = quotedSource * (1 + selectedSlippage)`.
- Round `sendMax` up to 7 decimal places.

Implementation notes:

- Use existing `lodash.debounce` dependency.
- Ignore quote requests until both assets are selected, assets differ, and primary amount is valid and greater than zero.
- Use a monotonic request id or cancellation flag to ignore stale responses.
- Clear derived value when quote inputs become incomplete.
- Store the quote timestamp.
- Treat quotes as stale after a short interval, such as 30 seconds.
- Disable `Swap` while a quote is missing, loading, failed, or stale.
- Re-query Horizon immediately before creating the transaction if the quote is stale.
- If the refreshed quote changes materially, update the UI and ask the user to submit again instead of silently submitting a changed swap.

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
  path,
  slippage
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
- The quote is fresh.
- Source spendable balance is enough.
- Destination asset is already trusted by the account.
- Destination trustline has enough receiving capacity for the quoted amount.

Receiving capacity for non-native assets:

- Find the destination asset balance line.
- Calculate `limit - balance - buying_liabilities`.
- Ensure the quoted destination amount does not exceed that capacity.
- If capacity is insufficient, show a clear inline error: `Receiving limit exceeded for EURMTL.`

MVP asset scope:

- Use current account balances/trustlines for both selectors.
- Include XLM via `showXLM`.
- Do not add trustline creation to the swap transaction in the first implementation.
- If the account cannot select two swappable assets, show an empty state with an `Add asset` action that routes to asset management.

## Quote Display

Keep quote information understandable and minimal.

Show after a quote is available:

- Plain-language summary: `You pay 10 XLM and receive about 0.12 EURMTL.`
- Rate: `1 XLM ≈ 0.012 EURMTL`.
- Slippage bound: `Minimum received: 0.1188 EURMTL` or `Maximum paid: 10.1 XLM`.
- Route only if multi-hop: `via USDC` or `via USDC, EURC`.

Show while quoting:

- `Finding best path...`

Show no path:

- `No path found. Try another amount or asset.`

Show stale quote:

- `Quote expired. Refreshing...`

Avoid showing raw Horizon details in the main form.

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
- `swap.quote.updating`
- `swap.quote.expired`
- `swap.quote.summary`
- `swap.quote.rate`
- `swap.quote.via`
- `swap.slippage.label`
- `swap.slippage.helper`
- `swap.slippage.minimum-received`
- `swap.slippage.maximum-paid`
- `swap.slippage.high-warning`
- `swap.swap-direction.label`
- `swap.validation.source-asset-missing`
- `swap.validation.destination-asset-missing`
- `swap.validation.same-asset`
- `swap.validation.invalid-amount`
- `swap.validation.not-enough-balance`
- `swap.validation.receiving-capacity-exceeded`
- `swap.validation.stale-quote`
- `swap.validation.no-quote`

Use English as the source wording and mirror keys in all locale files.

## Implementation Steps

1. Add route/action plumbing for Swap in `routes.ts` and `TradingDialog.tsx`.
2. Replace the Trade landing choice with a compact `Swap | Buy | Sell` mode selector, defaulting to Swap.
3. Keep Buy and Sell as separate flows.
4. Pass preselected asset route params to `SwapForm` as the initial `You pay` asset.
5. Add `SwapForm` UI using `PriceInput` and `AssetSelector`.
6. Add the source/destination swap button and behavior.
7. Add quote hook/lib for strict-send and strict-receive Horizon paths.
8. Add quote display for summary, effective rate, optional path, quote status, and stale quote handling.
9. Add slippage preset control with 0.5%, 1%, 2%, and 5% options, defaulting to 1%.
10. Add path-payment transaction helper with selected slippage handling and safe 7-decimal rounding.
11. Connect form submission through existing `TransactionSender` and `createTransaction` flow.
12. Add validation for spendable balance, destination trustline capacity, quote freshness, and no-path states.
13. Add transaction review and history support for strict path payments.
14. Add translation keys to all locales.
15. Add targeted tests for quote selection, slippage rounding, direction swapping, preselected pay asset, stale quote protection, receiving capacity validation, and path-payment transaction summaries.
16. Run `npm test`.

## Non-Goals For First Implementation

- No custom free-form slippage input beyond the four preset options.
- No trustline creation during swap.
- No manual path selection.
- No advanced quote details unless needed for debugging.
