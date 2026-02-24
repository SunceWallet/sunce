# Data Entry Editor (Stellar) - Design Intent and Decision Record

## Purpose
This document captures the original intent, constraints, architecture choices, and iterative product decisions for the **Account Data Entries** editor in Sunce.

Goal: allow users to safely create, update, and delete Stellar `manageData` entries directly from the account section, with immediate validation and predictable transaction behavior.

## Product Intent (Initial)
The editor was designed to feel native to existing account workflows (trade/assets/balances menu area), while handling Stellar-specific constraints that are easy to miss.

Primary product goals:
- Edit account data without leaving the account context.
- Show existing data entries sorted alphabetically.
- Allow new entries to be staged in a dedicated "New" section.
- Prevent invalid saves early (during editing), not only at submit time.
- Make pending changes visually obvious (new, updated, deleted, invalid).
- Build and send a transaction in the same way as other account operations.
- Reload account state after submit so the user lands on fresh data.

## Stellar Rules That Drive the UX
The implementation explicitly models these constraints:
- Data name:
  - ASCII printable set only (first 128 code points, constrained via regex).
  - Max length: 64 chars.
  - Name is immutable for existing entries (rename requires delete + add).
- Data value:
  - Max size: 64 bytes.
  - Can represent arbitrary bytes.
- Account subentry limit:
  - Global cap: 1000 shared by trustlines/offers/signers/data entries.
  - Data additions must respect remaining subentry capacity.
  - Planned deletions free slots and are counted in the simulation.
- Transaction op limit:
  - Max 100 operations per transaction.
- XLM reserve + fee economics:
  - Each added data entry increases minimum reserve by 0.5 XLM (`BASE_RESERVE`).
  - Every operation requires fee (modeled with `MIN_OPERATION_FEE_XLM`).
  - Deletions can free reserve; simulation includes this before allowing additions.

## Architecture and File Split
Core files:
- `src/Account/components/DataEntriesDialog.tsx`
  - UI, staging state, interaction logic, transaction submit.
- `src/Account/lib/dataEntries.ts`
  - Domain logic: parsing/validation, diffing, limits, operation drafts.
- `src/App/contexts/dialogs.tsx`
  - Dialog registration and open/close plumbing.
- `src/Account/components/AccountContextMenu.tsx`
  - Entry point in account main menu ("Data Entries").
- `i18n/locales/en/account.json`, `i18n/locales/ru/account.json`
  - Copy for labels, validation errors, warnings, statuses.

Design principle:
- Keep all non-trivial business rules in `dataEntries.ts`.
- Keep `DataEntriesDialog.tsx` mostly focused on rendering, state wiring, and submit orchestration.

## Data Model and Diff Strategy
Rows in editor state:
- Existing row: `kind: "existing"`, immutable name, editable value, `markedForDeletion`, `initialValueBase64`.
- New row: `kind: "new"`, editable name/value.

Diffing strategy:
- Build `initialMap` from account `data_attr`.
- Build `finalMap` from valid active rows (existing + new).
- Compare by name and bytes to produce operation drafts:
  - `add`, `update`, `delete`.
- Sort operation names alphabetically for deterministic output.

Important behavior:
- No-op protection: if computed operations are empty, show "no changes" and do not submit.
- Delete+recreate with identical final bytes is collapsed naturally by map diff into no-op or update/add/delete as needed.

## Validation Model
Validation is split into:
- Per-row issues (`rowIssues`): name/value format, duplicates, byte size, required fields.
- General issues (`generalIssues`):
  - subentry limit,
  - op count limit,
  - XLM additions limit,
  - final required balance check.

Save button rule:
- Enabled only when there are changes and no row/general errors and transaction is not pending.

## Key UX Decisions
### Existing entry deletion
Stellar deletion is implemented by saving `value = null` in `manageData`.

UI decision:
- Existing rows are not physically removed from UI when "deleted".
- They are marked as pending deletion with distinct visual status.
- Value input becomes disabled.
- Name input also becomes disabled for consistent visual affordance.

### New row deletion
UI decision:
- Deleting a newly staged row removes that row block entirely.

### Name immutability
UI decision:
- Existing row name is read-only.
- Rename is represented by deleting old key and adding new key in "New" rows.

### Duplicate names
UI decision:
- Duplicate with active existing name is a validation error.
- Duplicate among new rows is a validation error.
- If an existing row is planned for deletion, its name is considered free for a new row.

### Encoding mode
To support arbitrary bytes:
- Value can be edited in text or Base64 mode.
- Mode switching attempts byte-preserving conversion.

Refined UX choice:
- Switched from a large encoding selector to a low-attention dotted-link toggle in the status line (`Text` / `Base64`).
- Tooltip/title carries the full "Encoding" label.

### Change visibility
Rows always display state cues:
- New, updated, deleted, invalid states use colored left border + status text.
- To avoid layout shifts, left border now always exists (neutral gray by default), and only color changes by status.

### Layout and spacing (latest refinements)
Accepted layout refinements:
- Name and value are always stacked vertically on all breakpoints.
- Explicit vertical spacing between name and value.
- Action button moved to top-right near the name field.
- Extra horizontal space between byte counter and encoding toggle.

### Delete vs Undo action for existing rows
Refined interaction:
- Default action is delete (trash) when row equals original value.
- If row is edited or marked for deletion, action becomes undo (restore).
- Undo restores the original on-chain bytes in current mode and clears deletion mark.

### Search and filter workflow (post-baseline update)
To support accounts with many entries, a filter layer was added:
- A filter icon in the title bar toggles filter controls visibility.
- Filter controls include:
  - a text query (substring match),
  - a "changed only" toggle.
- Text query matches against both `name` and `valueInput` (case-insensitive).
- "Changed only" hides unchanged existing rows and keeps changed/deleted/new rows visible.
- The "New entry" creation form remains visible while filtering, so users can still add entries in filtered mode.

State persistence rule:
- Hiding the filter UI disables filtering visually and functionally.
- Re-opening filter UI restores previous query/toggle state (no reset on hide/show).

Implementation notes:
- Filtering is currently client-side on staged row state (no network request).
- Matching is applied to existing rows and staged new rows through derived `visibleExistingRows` / `visibleNewRows`.

## Transaction Flow
1. User edits staged rows.
2. Analyzer computes operations and all constraints.
3. If valid and changed, build `Operation.manageData` list.
4. Create transaction via shared `createTransaction(...)` path.
5. Send via shared `TransactionSender` flow.
6. Query account again and rely on live subscription refresh.
7. Show success notification.

## Error/Warning Cases Handled During Development
Observed and resolved during iteration:
- React synthetic event pooling warning in `DataEntriesDialog`.
  - Fix: read `event.target.value` synchronously before state updater.
- Separate legacy runtime warnings unrelated to Data Entries were investigated and partially guarded in cache/subscription paths.

## Notes on Safety and Side Effects
Risk control choices:
- New behavior implemented locally in Data Entry components/lib, minimizing cross-feature impact.
- Reused existing transaction submit infrastructure instead of introducing custom send flow.
- Added immediate client-side validation to prevent building invalid transactions after large editing sessions.
- Added debounced global analysis (`analyzeDataEntryRows`) to reduce keystroke lag on large forms, while keeping immediate recomputation on submit to avoid stale transaction drafts.

## Performance Strategy (post-baseline update)
Observed issue:
- Recomputing full cross-row analysis on every keystroke caused visible typing lag on rapid input.

Applied strategy:
- Split editable state and analysis state:
  - `rows` for immediate field updates,
  - `rowsForAnalysis` for debounced global validation/diff.
- Run full analysis with a short debounce window (currently 200ms).
- Force immediate analysis flush on field blur and on submit path.
- Keep transaction creation bound to a fresh non-debounced analysis from current `rows`.

Resulting behavior:
- Typing remains responsive.
- Cross-row/global constraints still update quickly.
- Save path remains correctness-first (never uses stale analysis).

## Navigation Model Note
Current implementation is route-driven: data entries open via dedicated account route (`/account/:id/data-entries`) and participate in URL/history navigation.
The screen is still rendered as a full-screen view with the same visual model and back behavior expected from account subflows.

## Remaining Considerations
Potential future improvements:
- Granular operation preview list (exact add/update/delete lines) above Save.
- Optional confirm dialog when submitting very large valid operation sets.
- Extended byte visualization tools for non-text payloads.
- Unit tests for analyzer edge cases (especially reserve + deletion/addition interplay).

## Snapshot of Implemented Scope
Implemented and already integrated:
- Account menu entry + full-screen dialog.
- Existing/new rows editing.
- All core Stellar constraints listed above.
- Deterministic operation generation.
- Search + filter controls (query + changed-only) with persistent filter state across hide/show.
- Debounced global analysis for better editing responsiveness.
- Submit/sign/send via normal Sunce transaction flow.
- Post-submit account refresh behavior.
- UX refinements requested during iterative review.
