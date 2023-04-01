import type { NextPage } from "next";
import React from "react";

import HomeContainer from "@app/containers/Home";
import Layout from "@app/containers/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
};

export default Home;
