import * as React from "react";

import { UserIcon } from "ui/atoms";

import { clickUserIcon, UserGate } from "./model";

export const User = () => (
  <>
    <UserGate />
    <UserIcon clickHandler={clickUserIcon} />
  </>
);
