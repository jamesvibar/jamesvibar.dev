// import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { AnimatePresence } from 'framer-motion'
import theme from '../theme'

import 'normalize.css/normalize.css'

const mainStyle = { overflow: 'hidden' }

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
