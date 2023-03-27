import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from './../layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-black/80 backdrop-blur-sm" />
    </>
  )
}

export default MyApp
