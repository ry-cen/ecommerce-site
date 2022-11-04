import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { StoreProvider } from '../utils/Store'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps<{session: Session}>) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  )
}

export default MyApp
