import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/globals.css'

import { SessionProvider } from "next-auth/react"
import Layout from "@/layout/Layout";

import store from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>


  )


}
