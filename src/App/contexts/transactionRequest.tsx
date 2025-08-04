import React from "react"
import { StellarUri, StellarUriType, TransactionStellarUri } from "@suncewallet/stellar-uri"
import { CustomError } from "~Generic/lib/errors"
import { subscribeToDeepLinkURLs } from "~Platform/protocol-handler"
import { verifyTransactionRequest } from "~Transaction/lib/stellar-uri"
import { trackError } from "./notifications"
import { useTranslation } from "react-i18next"

const allowUnsafeTestnetURIs = Boolean(import.meta.env.VITE_ALLOW_UNSAFE_TESTNET_URIS)

interface Props {
  children: React.ReactNode
}

interface ContextType {
  uri: StellarUri | null
  clearURI: () => void
  setURI: (uri: StellarUri) => void
}

const initialValues: ContextType = {
  uri: null,
  clearURI: () => undefined,
  setURI: () => undefined
}

const TransactionRequestContext = React.createContext<ContextType>(initialValues)

export function TransactionRequestProvider(props: Props) {
  const [uri, setURI] = React.useState<StellarUri | null>(null)

  const { t } = useTranslation()

  const clearURI = React.useCallback(() => setURI(null), [])

  const verifyStellarURI = React.useCallback(async (incomingURI: string) => {
    try {
      const parsedURI = await verifyTransactionRequest(incomingURI, { allowUnsafeTestnetURIs })

      if (parsedURI.operation === StellarUriType.Transaction) {
        // check if contained transaction is valid
        const txURI = parsedURI as TransactionStellarUri
        txURI.getTransaction()
      }

      setURI(parsedURI)
    } catch (error) {
      trackError(error)
    }
  }, [])

  React.useEffect(() => {
    const unsubscribe = subscribeToDeepLinkURLs(async (incomingURI) => {
      const url = new URL(incomingURI)
      switch (url.pathname) {
        case StellarUriType.Transaction:
        case StellarUriType.Pay:
          verifyStellarURI(incomingURI)
          break
        default:
          trackError(
            CustomError(
              "UnexpectedStellarUriTypeError",
              t("unexpected-stellar-uri-type-error", `Incoming uri ${incomingURI} does not match any expected type.`, {
                incomingURI
              })
            )
          )
          break
      }
    })
    return unsubscribe
  }, [verifyStellarURI, t])

  return (
    <TransactionRequestContext.Provider value={{ uri, clearURI, setURI }}>
      {props.children}
    </TransactionRequestContext.Provider>
  )
}

export { ContextType as TransactionRequestContextType, TransactionRequestContext }
