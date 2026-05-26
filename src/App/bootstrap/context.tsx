import React from "react"
import { AccountsProvider } from "../contexts/accounts"
import { AppModeProvider } from "../contexts/appMode"
import { CachingProviders } from "../contexts/caches"
import { NotificationsProvider } from "../contexts/notifications"
import { SettingsProvider } from "../contexts/settings"
import { SignatureDelegationProvider } from "../contexts/signatureDelegation"
import { StellarProvider } from "../contexts/stellar"
import { TransactionRequestProvider } from "../contexts/transactionRequest"
import { DialogsProvider } from "~App/contexts/dialogs"
import { SavedAddressesProvider } from "~App/contexts/savedAddresses"
import { HiddenSendersProvider } from "~App/contexts/hiddenSenders"

export function ContextProviders(props: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <StellarProvider>
        <AccountsProvider>
          <AppModeProvider>
            <SavedAddressesProvider>
              <HiddenSendersProvider>
                <TransactionRequestProvider>
                  <CachingProviders>
                    <NotificationsProvider>
                      <DialogsProvider>
                        <SignatureDelegationProvider>{props.children}</SignatureDelegationProvider>
                      </DialogsProvider>
                    </NotificationsProvider>
                  </CachingProviders>
                </TransactionRequestProvider>
              </HiddenSendersProvider>
            </SavedAddressesProvider>
          </AppModeProvider>
        </AccountsProvider>
      </StellarProvider>
    </SettingsProvider>
  )
}
