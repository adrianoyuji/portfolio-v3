import Head from "next/head";
import React from "react";

interface HeadProps {
  title: string;
  description: string;
}

const HeadTag = ({ title, description }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;
