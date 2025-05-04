import { Horizon, Operation, OperationType, Transaction } from '@stellar/stellar-sdk';

export type ThresholdLevel = 'low' | 'med' | 'high';

const thresholdMap: Record<OperationType, ThresholdLevel> = {
  createAccount: 'med',
  payment: 'med',
  pathPaymentStrictReceive: 'med',
  pathPaymentStrictSend: 'med',
  manageSellOffer: 'med',
  manageBuyOffer: 'med',
  createPassiveSellOffer: 'med',
  setOptions: 'high',
  changeTrust: 'med',
  allowTrust: 'low',
  accountMerge: 'high',
  inflation: 'low',
  manageData: 'med',
  bumpSequence: 'low',
  createClaimableBalance: 'med',
  claimClaimableBalance: 'low',
  beginSponsoringFutureReserves: 'med',
  endSponsoringFutureReserves: 'med',
  revokeSponsorship: 'med',
  clawback: 'med',
  clawbackClaimableBalance: 'med',
  setTrustLineFlags: 'low',
  invokeHostFunction: 'med',
  extendFootprintTtl: 'med',
  restoreFootprint: 'med',
  liquidityPoolDeposit: 'med',
  liquidityPoolWithdraw: 'med',
};

const thresholdValues: Record<ThresholdLevel, number> = {
  low: 1,
  med: 2,
  high: 3,
};

const reverseThresholdValues: Record<number, ThresholdLevel> = {
  1: 'low',
  2: 'med',
  3: 'high',
};

function getAccountThreshold(account: Horizon.AccountResponse, threshold: ThresholdLevel): number {
  switch (threshold) {
    case 'low':
      return account.thresholds.low_threshold
    case 'med':
      return account.thresholds.med_threshold
    case 'high':
      return account.thresholds.high_threshold
    default:
      return account.thresholds.high_threshold
  }
}

/**
 * Determines the highest threshold level required to authorize a Stellar transaction.
 * @param tx A Stellar Transaction object.
 * @returns 'low', 'med', or 'high'
 */
export function getRequiredThreshold(operations: Operation[]): ThresholdLevel {
  let maxThresholdValue = 0;

  for (const op of operations) {
    const opType = op.type;
    const level = thresholdMap[opType] || 'high'; // default to 'high' for unknown
    const numericValue = thresholdValues[level];
    maxThresholdValue = Math.max(maxThresholdValue, numericValue);
  }

  return reverseThresholdValues[maxThresholdValue] || 'high';
}

export function getAccountTransactionThreshold(sourceAccount: Horizon.AccountResponse, transaction: Transaction): number {
  const sourceAccountOps = transaction.operations.filter(op => !op.source || op.source === sourceAccount.account_id)
  const opsThreshold = getRequiredThreshold(sourceAccountOps)
  const accountThreshold = getAccountThreshold(sourceAccount, opsThreshold)
  return accountThreshold
}

