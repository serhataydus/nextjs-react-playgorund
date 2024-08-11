import { getLocalizations } from "@/localizations/dictionary";
import { IProps } from "@/models/page/IProps";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage<IProps> = async (pageProps: IProps) => {
  const language = pageProps.params.locale;
  const dynamicUrl = pageProps.params.params?.join("/");
  const dynamicUrlParams = new URLSearchParams(pageProps.searchParams).toString();
const {title,description} = await getLocalizations(language);

  return (
    <>
    <Head>
        <title>Home - {title}</title>
      </Head>
      <h1>Translations</h1>
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
      </section>
      <hr />
      <h1>SSR Home Page</h1>
      <h2>Language : {language}</h2>
      <h2>You passed url : {dynamicUrl}</h2>
      <h2>You passed searchParams :{dynamicUrlParams}</h2>
      <h2>
        You url : {dynamicUrl}?{dynamicUrlParams}
      </h2>
    </>
  );
};

export default Home;
