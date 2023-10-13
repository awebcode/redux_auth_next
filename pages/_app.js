import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

// ... rest of your code ...

import { ThemeProvider } from "@/components/Theme";
import { setUserData } from "@/redux/actions/userAction";
import store from "@/redux/store";
import "@/styles/globals.css";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { Spin } from "antd";

export default function App(props) {
  const { user, Component, pageProps } = props;
   const [loading,setLoading]=useState(false)
  let data;
  useEffect(() => {
    let data;
    
    if (typeof window !== "undefined") {
      const jsonData = localStorage.getItem("userData");

      try {
        data = JSON.parse(jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }

    if (data) {
       setLoading(true);
       store.dispatch(setUserData(data));
        setLoading(false);
    }
  }, [store.dispatch]);
  if (loading) {
  return <div>
    <Spin/>
  </div>
}
  return (
    <>
      <Head>
        <title>Home -Asikur</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
