import type { NextPage } from "next";
import Head from "next/head";

import { Home } from "~/components/home/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Playground</title>
        <meta
          name="description"
          content="João's personal portfolio/resume web app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
};

export default HomePage;
