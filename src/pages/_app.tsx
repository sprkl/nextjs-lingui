import { useEffect } from 'react'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"

import { activate } from "../lingui-example/i18n"
import "../lingui-example/styles.css"

export default function Page({ Component, pageProps } : AppProps) {
  useEffect(() => {
    // Activate the default locale on page load
    activate("en")
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  )
}
