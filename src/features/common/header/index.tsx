import * as React from "react";

import { Burger } from "ui/molecules";
import { HeaderStyled, Logotype } from "./ui/atoms";

export const Header = () => (
  <HeaderStyled>
    <Burger />
    <Logotype>Love-birds</Logotype>
  </HeaderStyled>
);
