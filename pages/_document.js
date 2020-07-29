import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Exo+2&display=swap"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
