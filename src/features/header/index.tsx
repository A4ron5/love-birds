import * as React from "react";
import { useStore } from "effector-react";

import { User } from "features/user";

import { Burger } from "ui/molecules";

import { HeaderStyled, Logotype } from "./ui/atoms";
import { $isBurgerOpen, triggerBurger, clickLogotype } from "./model";

export const Header = () => {
  const isBurgerOpen = useStore($isBurgerOpen);

  const burgerClickHandler = () => {
    triggerBurger();
  };

  const logotypeClickHandler = () => {
    clickLogotype();
  };

  return (
    <HeaderStyled>
      <Burger open={isBurgerOpen} clickHandler={burgerClickHandler} />
      <Logotype onClick={logotypeClickHandler}>Love-birds</Logotype>
      <User />
    </HeaderStyled>
  );
};
