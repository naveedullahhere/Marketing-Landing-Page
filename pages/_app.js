
import { Footer } from '@/layout/Footer'
import Header from '@/layout/Header'
import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { ScrollerMotion } from 'scroller-motion';


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="stylesheet" href="/bs.css" />
      <script src="https://kit.fontawesome.com/20b4506959.js" crossorigin="anonymous"></script>
      <script src="/jQuery.js"></script>
      <link href="/css/fontawesome-all.css" rel="stylesheet" />
      <link href="/css/flaticon.css" rel="stylesheet" />
      <script src="https://js.pusher.com/7.2/pusher.min.js"></script>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
      <script src="https://apis.google.com/js/api:client.js"></script>
      <title>Marketing Chapter</title>
    </Head>
    <ConfigProvider
      theme={{
        "token": {
          "colorPrimary": "#c11432",
          "colorPrimaryBg": "#eee",
          "fontSize": 14,
          "borderRadius": 6,
          "wireframe": true
        }
      }}
    >
      <ScrollerMotion>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Toaster position="top-right" />
      </ScrollerMotion>
    </ConfigProvider>
  </>
}
