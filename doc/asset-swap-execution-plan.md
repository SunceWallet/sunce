# Asset Swap Execution Plan

## Product Decisions

- Asset Swap is part of the existing Trade flow.
- Swap is the default option under Trade.
- Buy and Sell remain separate flows for order placement.
- Open orders are reachable from the Trade tabs as `Orders`.
- Allowed price change is user-adjustable with simple presets: 0.5%, 1%, 2%, and 5%.
- Default allowed price change is 1%.
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
5. The derived control shows an approximate value with an `≈` prefix and a direction-aware label:
   - `You pay about` when the source amount is derived.
   - `You receive about` when the destination amount is derived.
6. The active amount should look clearly editable; the derived amount should look estimated until the user focuses or edits it.
7. If the user edits the derived field, it becomes primary and the other field becomes derived.
8. Add a switch-assets button between the two controls.
9. When the switch-assets button is clicked, swap both amount+asset pairs and invert the quoted direction. Example: `10 XLM` for derived `0.12 EURMTL` becomes `0.12 EURMTL` for derived `10 XLM`.
10. Show price/quote states inline:
   - Finding price.
   - These assets cannot be swapped right now.
   - Could not get a price.
   - Updating price.
   - Price changed.
11. After quote loads, show a direction-aware plain-language summary near the submit action:
   - Strict-send: `You pay 10 XLM and receive about 0.12 EURMTL (no less than 0.1188 EURMTL).`
   - Strict-receive: `You pay about 10 XLM (no more than 10.1 XLM) and receive 0.12 EURMTL.`
12. Show the effective rate inline in the body, for example `1 XLM ≈ 0.012 EURMTL`.
13. Hide route details in the main swap form for now. Route/path information is advanced detail and can stay in transaction review.
14. Show the allowed price change control as compact secondary copy: `Allowed price change: 1%`, where the percentage opens the preset menu.
15. Allowed price change control options are `0.5%`, `1%`, `2%`, and `5%`, with `1%` selected by default.
16. Fold the allowed-price-change consequence into the footer summary instead of rendering separate `Minimum received` or `Maximum paid` rows in the main form.
17. Submit action label: `Swap`.
18. Keep the submit button label as `Swap`. Disabled, loading, and error context is shown through the surrounding form state instead of changing the button label.
19. The final signing/review flow must show a stable summary before the irreversible action, but the form submit label remains `Swap`.

## UI Copy Principles

- Use `You pay` and `You receive` in visible UI; do not use `source` and `destination` in user-facing labels.
- Use `Allowed price change` in visible UI; avoid `slippage` unless it appears in optional explanatory text.
- Use `Updating price...` instead of `Quote expired` while refreshing a stale quote.
- Use `Price changed. Review the new amount before swapping.` when a refreshed quote materially changes.
- Use `no less than ...` and `no more than ...` in the main swap summary to explain allowed price change consequences. `Minimum received` and `Maximum paid` are suitable in transaction review.
- Avoid raw Horizon, path-payment, strict-send, and strict-receive terminology in user-facing surfaces.
- Make the main form feel like a simple conversion calculator; progressively reveal details only when they help the user decide.
- Prefer user-language statuses such as `Finding price...` over implementation-language route/path statuses.
- Avoid `path` or `route` in main form copy. Route details can appear in transaction review where advanced details are expected.

## Reused Architecture

- Keep the existing `TradingDialog` as the entry point for asset exchange features.
- Reuse `TransactionSender` for signing and submission.
- Reuse `createTransaction` for transaction construction.
- Reuse `AssetSelector` for `You pay` and `You receive` asset selection.
- Reuse `PriceInput` for amount input with embedded asset selectors.
- Reuse balance helpers from `~Generic/lib/stellar` for spendable balance validation.
- Reuse dialog action components: `DialogActionsBox`, `ActionButton`, and `Portal`.
- Reuse existing `Max` behavior from the payment form for the `You pay` amount.

## Routing

Update `src/App/routes.ts`:

```ts
tradeAsset(accountID, method?: "buy" | "sell" | "swap" | "orders", preselectedAsset?: string)
```

Update `src/Trading/components/TradingDialog.tsx`:

- Treat `/account/:id/trade` as Swap by default.
- Keep `/account/:id/trade/buy` and `/account/:id/trade/sell` for existing order placement.
- Add `/account/:id/trade/swap` as an explicit swap route for navigation consistency.
- Add `/account/:id/trade/orders` for the account's open orders list.
- If an asset is present in the route, pass it to `SwapForm` as the initial `You pay` asset.
- From Buy, Sell, and Orders, the dialog back action returns to Swap. From Swap, it closes the Trade dialog.

Update the Trade action selection UI:

- Avoid a landing screen where users must choose before swapping.
- Use Material UI tabs near the top: `Swap`, `Buy`, `Sell`, `Orders`.
- Select `Swap` by default.
- Keep Buy and Sell as separate flows, not as settings inside Swap.
- Keep the existing Buy and Sell forms reachable from `/trade/buy` and `/trade/sell`.
- Use standard centered tabs on desktop with a wider navigation container than the form body. Use full-width tabs on mobile.

## Components To Add

Add `src/Trading/components/SwapForm.tsx`.

Responsibilities:

- Render `You pay` and `You receive` controls.
- Track which side is primary.
- Render the switch-assets button.
- Preselect `You pay` when an initial asset is provided.
- Trigger quote lookup when primary amount/assets change.
- Show derived amount with `≈`.
- Show available `You pay` balance below the selected pay asset.
- Show the effective rate and the allowed-price-change-adjusted transaction bound.
- Validate balances and selected assets.
- Track selected allowed price change.
- Track quote freshness.
- Build and submit a path-payment transaction.

Add `src/Trading/hooks/swap.ts` or `src/Trading/lib/swap.ts`.

Responsibilities:

- Debounce Horizon quote requests.
- Fetch strict-send and strict-receive paths.
- Select best quote.
- Convert Horizon path records to SDK `Asset[]` paths.
- Protect UI from stale Horizon responses.
- Apply selected allowed price change.
- Round allowed-price-change-adjusted bounds safely to Stellar's 7 decimal places.
- Re-check quote freshness before submission.

## Trade Mode Selection

The Trade screen should not force a first decision between Swap, Buy, and Sell before showing useful content.

Implemented UI:

- Show `Swap | Buy | Sell | Orders` as Material UI tabs near the top of `TradingDialog`, below the title/balances area.
- Default selected tab is `Swap`.
- The Swap form is visible immediately when opening Trade.
- Buy and Sell remain separate forms for order placement.
- Orders shows the account's open orders list.
- When users change mode, update the route so deep links and back navigation stay predictable.
- Use labels that describe intent:
   - `Swap`: simple asset conversion now.
   - `Buy`: place a buy order.
   - `Sell`: place a sell order.
   - `Orders`: review open orders.
- Use standard centered tabs on desktop. Use full-width tabs on mobile.

This replaces the old action-choice/button-group pattern for users who just want to swap, while preserving the advanced Buy/Sell order-placement flows and open order management.

## Swap Direction Button

Add a small button between `You pay` and `You receive`.

Recommended UI:

- Use a vertical swap icon.
- Keep the button centered between the two controls.
- Give it an accessible label such as `Switch assets`.
- If tooltips are available, show `Switch assets` on hover or long press.
- After click, animate or immediately exchange the two controls; do not show a confirmation.

Behavior:

- Exchange `You pay` amount+asset with `You receive` amount+asset.
- The new `You pay` side becomes primary.
- The new `You receive` side becomes derived.
- Trigger a quote refresh for the new direction.
- Preserve selected allowed price change.
- Example: `10 XLM` for derived `0.12 EURMTL` becomes `0.12 EURMTL` for derived `10 XLM`.

## Allowed Price Change Control

Add a simple preset control to `SwapForm`.

Recommended UI:

- Label: `Allowed price change`.
- Render the current preset as a compact inline value. Clicking the value opens menu options: `0.5%`, `1%`, `2%`, `5%`.
- Keep `1%` selected by default.
- Keep the control visually secondary so it does not compete with the amount fields.
- Put the calculated bound into the sticky footer summary next to the primary `Swap` action.
- Users should always see the consequence in the submit summary, but do not need a separate bound row in the body.
- If `5%` is selected, show a mild warning: `High allowed price change may allow a worse rate.`

Behavior:

- Changing allowed price change does not need to re-query Horizon because the best route and quoted amounts stay the same.
- Changing allowed price change updates the transaction bounds used at submit time.
- If the `You pay` amount is primary, allowed price change lowers the minimum accepted `You receive` amount.
- If the `You receive` amount is primary, allowed price change raises the maximum accepted `You pay` amount.
- Show a short helper text in the preset menu, such as `If the price changes more than this before signing, the swap will be cancelled.`
- Summarize the calculated bound in the footer:
  - `no less than ...` when the user enters `You pay`.
  - `no more than ...` when the user enters `You receive`.

## Horizon Quote Logic

For source amount primary:

```ts
horizon.strictSendPaths(sourceAsset, sourceAmount, [destinationAsset]).call()
```

- Select the record with the highest `destination_amount`.
- Derived destination amount is `destination_amount`.
- Transaction uses strict-send.
- Submit with `destMin = quotedDestination * (1 - selectedAllowedPriceChange)`.
- Round `destMin` down to 7 decimal places.

For destination amount primary:

```ts
horizon.strictReceivePaths([sourceAsset], destinationAsset, destinationAmount).call()
```

- Select the record with the lowest `source_amount`.
- Derived source amount is `source_amount`.
- Transaction uses strict-receive.
- Submit with `sendMax = quotedSource * (1 + selectedAllowedPriceChange)`.
- Round `sendMax` up to 7 decimal places.

Implementation notes:

- Use existing `lodash.debounce` dependency.
- Ignore quote requests until both assets are selected, assets differ, and primary amount is valid and greater than zero.
- Use a monotonic request id or cancellation flag to ignore stale responses.
- Clear derived value when quote inputs become incomplete.
- Store the quote timestamp.
- Treat quotes as stale after a short interval, such as 30 seconds.
- Disable `Swap` while a quote is missing, loading, failed, stale, or the selected assets are the same. Keep the button label static and explain state in the quote/status copy.
- Re-query Horizon immediately before creating the transaction if the quote is stale.
- If the refreshed quote changes materially, show `Price changed. Review the new amount before swapping.` and ask the user to submit again instead of silently submitting a changed swap.

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
  destMin,
  sendMax
})
```

For an in-wallet swap, `destination` is the account's own account ID.
`SwapForm` computes the allowed-price-change-adjusted bound before calling this helper:

- Strict-send passes `destMin`.
- Strict-receive passes `sendMax`.

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
- If capacity is insufficient, show a clear inline error: `Your EURMTL wallet limit is too low to receive this amount.`

MVP asset scope:

- Use current account balances/trustlines for both selectors.
- Include XLM via `showXLM`.
- Do not add trustline creation to the swap transaction in the first implementation.
- If the account has no non-XLM trustlines, `TradingDialog` shows the existing no-assets message and an `Add asset` action that routes to asset management.
- The first implementation uses current account balances/trustlines for both selectors, so unavailable destination assets are not shown as selectable choices.
- When `Max` is used for XLM, leave enough spendable XLM for network fees and reserves, and explain this with helper text such as `Max leaves XLM for network fees.`
- When Trade is opened from an asset details screen, preselect that asset as `You pay` and leave `You receive` empty unless there is an explicit future product decision for a default destination asset.

## Quote Display

Keep quote information understandable and minimal.

Show after a quote is available:

- Body rate: `1 XLM ≈ 0.012 EURMTL`.
- Sticky footer summary for strict-send: `You pay 10 XLM and receive about 0.12 EURMTL (no less than 0.1188 EURMTL).`
- Sticky footer summary for strict-receive: `You pay about 10 XLM (no more than 10.1 XLM) and receive 0.12 EURMTL.`
- No route line in the main form. Keep route details out of the main swap UI for now.

Show while quoting:

- `Finding price...`

Show unavailable swap route:

- `These assets cannot be swapped right now. Try a smaller amount or choose another asset.`

Show quote failure:

- `Could not get a price. Try again.`

Show stale quote or stale quote refresh:

- `Updating price...`
- If changed materially: `Price changed. Review the new amount before swapping.`

Avoid showing raw Horizon details in the main form.

## Transaction Review And History

Update `src/TransactionReview/components/Operations.tsx`:

- Render `pathPaymentStrictSend` and `pathPaymentStrictReceive` as swap/path-payment operations instead of generic JSON.
- Show source amount, source asset, destination amount, destination asset, route, and destination account.
- Mirror the swap form language where possible in transaction review:
  - `Swap`.
  - `You pay: 10 XLM`.
  - `You receive: 0.1188 EURMTL` for strict-send review, because the signed operation contains `destMin`.
  - `Minimum received: 0.1188 EURMTL` or `Maximum paid: 10.1 XLM`.
- Treat transaction review as the final stable summary before the irreversible signing/submission action.
- Keep raw operation details out of the main review summary.

Update `src/Generic/lib/paymentSummary.ts`:

- Include strict-send and strict-receive path-payment operations.
- For swaps to self, summarize as a mixed asset change so transaction history gets the swap icon and meaningful balances.

## Translations

Current swap UI keys in each `i18n/locales/*/trading.json` file:

- `action-selection.swap.label`
- `action-selection.orders.label`
- `swap.action.submit`
- `swap.inputs.source.label`
- `swap.inputs.source.estimated`
- `swap.inputs.destination.label`
- `swap.inputs.destination.estimated`
- `swap.quote.loading`
- `swap.quote.unavailable`
- `swap.quote.failed`
- `swap.quote.updating`
- `swap.quote.price-changed`
- `swap.quote.summary-strict-send`
- `swap.quote.summary-strict-receive`
- `swap.quote.rate`
- `swap.allowed-price-change.label`
- `swap.allowed-price-change.helper`
- `swap.allowed-price-change.high-warning`
- `swap.swap-direction.label`
- `swap.validation.invalid-amount`
- `swap.validation.not-enough-balance`
- `swap.validation.receiving-capacity-exceeded`

Use English as the source wording and mirror keys in all locale files.

Do not keep obsolete main-form keys for route display, separate minimum/maximum bound rows, dynamic submit labels, or unused validation messages unless the UI starts rendering those surfaces again.

## Implementation Steps

1. Add route/action plumbing for Swap in `routes.ts` and `TradingDialog.tsx`.
2. Replace the Trade landing choice with `Swap | Buy | Sell | Orders` tabs, defaulting to Swap.
3. Keep Buy and Sell as separate flows and expose open orders through the Orders tab.
4. Pass preselected asset route params to `SwapForm` as the initial `You pay` asset.
5. Add `SwapForm` UI using `PriceInput` and `AssetSelector`.
6. Add the switch-assets button and behavior.
7. Add quote hook/lib for strict-send and strict-receive Horizon paths.
8. Add quote display for effective rate, footer summary, quote status, and stale quote handling. Keep route details out of the main form.
9. Add compact allowed price change preset control with 0.5%, 1%, 2%, and 5% options, defaulting to 1%.
10. Add path-payment transaction helper with selected allowed price change handling and safe 7-decimal rounding.
11. Connect form submission through existing `TransactionSender` and `createTransaction` flow.
12. Add validation for spendable balance, destination trustline capacity, quote freshness, and unavailable swap states.
13. Add transaction review and history support for strict path payments.
14. Add translation keys to all locales.
15. Add targeted tests for quote selection, allowed price change rounding, direction swapping, preselected pay asset, stale quote protection, receiving capacity validation, and path-payment transaction summaries.
16. Run `npm test`.

## Non-Goals For First Implementation

- No custom free-form allowed price change input beyond the four preset options.
- No trustline creation during swap.
- No manual path selection.
- No advanced quote details unless needed for debugging.
