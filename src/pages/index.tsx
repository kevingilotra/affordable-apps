import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const Index: FunctionComponent = () => {
  return (
    <>
      <SEO title="Home" image="/logo.png" />
      <Layout>Home Page</Layout>
    </>
  );
};

export default Index;
