// import App from 'next/app'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import './app.sass'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="../asset/OpenSans/OpenSans-BoldItalic.ttf"
          rel="stylesheet"
        />
        <link
          href="../asset/OpenSans/OpenSans-ExtraBoldItalic.ttf"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
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
