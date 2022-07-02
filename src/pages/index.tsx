import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Head>
        <title>Portfolio Playground</title>
        <meta
          name="description"
          content="João's personal portfolio/resume web app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
    </div>
  );
};

export default Home;
