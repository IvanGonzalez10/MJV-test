import React from "react";
import { Img, Div } from "./styles";
import { Link } from "@reach/router";

export const Header = () => {
  return (
    <Div>
      <Link to="/">
        <Img
          src="https://www.mjvinnovation.com/wp-content/themes/mjv/img/mjv.png"
          alt="logo"
        />
      </Link>
    </Div>
  );
};