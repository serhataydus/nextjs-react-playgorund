import { NextPage } from "next";
import React from "react";

interface IParam {
  params: string[];
}

interface IProps {
  searchParams: Record<string, string>;
  params: IParam;
}

const DynamicPage: NextPage<IProps> = (params: IProps) => {
  console.log(params);

  const dynamicUrl = params.params.params.join("/");
  const dynamicUrlParams = new URLSearchParams(params.searchParams).toString();
  return (
    <>
      <h1>SSR Dynamic Page</h1>
      <h2>You passed url : {dynamicUrl}</h2>
      <h2>You passed searchParams :{dynamicUrlParams}</h2>
      <h2>
        You url : {dynamicUrl}?{dynamicUrlParams}
      </h2>
    </>
  );
};

export default DynamicPage;
