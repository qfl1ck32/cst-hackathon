import "reflect-metadata";

import "../styles/globals.css";

import "react-toastify/dist/ReactToastify.css";

import { createApp, XUIProvider } from "@bluelibs/x-ui-next";
import { kernel as baseKernel } from "../startup/kernel";

import { useMemo } from "react";
import { AppProps } from "next/app";
import ToastContainer from "@app/containers/toast";

const App = ({ Component, pageProps }: AppProps) => {
  const kernel = useMemo(() => baseKernel, []);

  return (
    <XUIProvider {...{ kernel }}>
      <Component {...pageProps} />

      <ToastContainer />
    </XUIProvider>
  );
};

export default App;
