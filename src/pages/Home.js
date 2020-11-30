import React from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "../components/Carousel/Carousel";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Helmet>
        <title>MJV test</title>
        <meta
          name="description"
          content="Website app to looking for your favorite pet"
        />
      </Helmet>
    </>
  );
};
