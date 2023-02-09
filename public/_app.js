import { Footer1 } from '@/Component/layout/Footer1';
import { Header } from '@/Component/layout/Header';
import store, { persistor } from '@/Store'
import '@/styles/globals.css'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';




import { AppContext } from "@/context/AppContext.js";
import { useState } from 'react';
import { URL, APP_NAME, API_TOKEN, SITE_URL, GOOGLE_CLIENT_ID } from '@/config'
import { Toaster } from "react-hot-toast";
import { removeUserData, addUserData, updateUserData, setCartItems, removeCartItems, manageQuantity, setCouponCode } from '@/actions';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ConfigProvider } from 'antd';
import Head from 'next/head';


export default function App({ Component, pageProps }) {




  // const cartItems = useSelector((state) => state.cartReducer);
  // const user = useSelector((state) => state.userReducer.user[0]);
  // const discountCode = useSelector((state) => state.userReducer.couponCode[0]);

  const [Title, setTitle] = useState('')

  // const [Title, setTitle] = useState(`Home${APP_NAME}`);



  var values = {
    setCartItems, SITE_URL, API_TOKEN, setTitle, Title, APP_NAME, URL, removeCartItems, setCouponCode, manageQuantity, removeUserData, addUserData, updateUserData
  }

  var values;
  return <>

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              "colorPrimary": "#04396d",
              "colorPrimaryBg": "#eee"
            },
          }}
        >
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <AppContext.Provider value={values}>
              <Head >
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
              </Head>
              <Header />
              <Component {...pageProps} />
              <Footer1 />
              <Toaster position="top-right" containerStyle={{ "transform": "translateY(104px)" }} />
            </AppContext.Provider>
          </GoogleOAuthProvider>
        </ConfigProvider>
      </PersistGate>
    </Provider>

  </>
}
