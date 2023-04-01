import "reflect-metadata";

import "../styles/globals.scss";

import "react-toastify/dist/ReactToastify.css";

import { XUIProvider } from "@bluelibs/x-ui-next";
import { kernel as baseKernel } from "../startup/kernel";

import { useMemo } from "react";
import { AppProps } from "next/app";
import ToastContainer from "@app/containers/Toast";
import PageLoader from "@app/components/PageLoader";

const App = ({ Component, pageProps }: AppProps) => {
  const kernel = useMemo(() => baseKernel, []);

  return (
    <XUIProvider {...{ kernel, loadingComponent: <PageLoader /> }}>
      <Component {...pageProps} />

      <ToastContainer />
    </XUIProvider>
  );
};

export default App;
