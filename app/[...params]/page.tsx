import { getDictionary } from "@/lib/dictionary";
import { NextPage } from "next";
import React from "react";

const DynamicPage: NextPage<IProps> = async (params: IProps) => {
  console.log(params);

  const language = params.params.locale;
  const dynamicUrl = params.params.params.join("/");
  const dynamicUrlParams = new URLSearchParams(params.searchParams).toString();
  const { page } = await getDictionary(language as "en" | "de");

  return (
    <>
      <h1>Translations</h1>
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">{page.about.title}</h1>
          <p className="text-gray-500">{page.about.description}</p>
        </div>
      </section>
      <hr />
      <h1>SSR Dynamic Page</h1>
      <h2>Language : {language}</h2>
      <h2>You passed url : {dynamicUrl}</h2>
      <h2>You passed searchParams :{dynamicUrlParams}</h2>
      <h2>
        You url : {dynamicUrl}?{dynamicUrlParams}
      </h2>
    </>
  );
};

export default DynamicPage;
