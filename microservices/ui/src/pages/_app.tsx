import "reflect-metadata";

import "../styles/globals.scss";

import "react-toastify/dist/ReactToastify.css";

import { XUIProvider } from "@bluelibs/x-ui-next";
import { kernel as baseKernel } from "../startup/kernel";

import { useMemo } from "react";
import { AppProps } from "next/app";
import ToastContainer from "@app/containers/Toast";
import PageLoader from "@app/components/PageLoader";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  const kernel = useMemo(() => baseKernel, []);

  return (
    <XUIProvider {...{ kernel, loadingComponent: <PageLoader /> }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />

      <ToastContainer />
    </XUIProvider>
  );
};

export default App;
