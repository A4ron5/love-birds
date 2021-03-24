import * as React from "react";
import { useStore } from "effector-react";

import { Burger } from "ui/molecules";
import { HeaderStyled, Logotype } from "./ui/atoms";
import { $isBurgerOpen, triggerBurger } from "./model";

export const Header = () => {
  const isBurgerOpen = useStore($isBurgerOpen);

  const burgerClickHandler = () => {
    triggerBurger();
  };

  return (
    <HeaderStyled>
      <Burger open={isBurgerOpen} clickHandler={burgerClickHandler} />
      <Logotype>Love-birds</Logotype>
    </HeaderStyled>
  );
};
