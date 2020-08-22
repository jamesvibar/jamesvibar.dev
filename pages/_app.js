// import App from 'next/app'
import React from 'react'
import Router from 'next/router'
import { ThemeProvider } from 'theme-ui'
import { AnimatePresence } from 'framer-motion'
import NProgress from 'nprogress'
import theme from '../theme'

import 'normalize.css/normalize.css'
import '../styles/nprogress.css'

let timer;
let state;
let activeRequests = 0
const delay = 250;

// NProgress.configure({ showSpinner: false })

function load() {
  if (state === 'loading'){
    return;
  }

  state = 'loading'

  timer = setTimeout(() => {
    NProgress.start()
  }, delay)
}

function stop() {
  if (activeRequests > 0) {
    return;
  }

  state = 'stop'
  
  clearTimeout(timer)
  NProgress.done()
}

Router.events.on('routeChangeStart', load)
Router.events.on('routeChangeComplete', stop)
Router.events.on('routeChangeError', stop)

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
