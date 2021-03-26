import * as React from "react";

import { UserIcon } from "ui/atoms";

import { clickUserIcon } from "./model";

export const User = () => <UserIcon clickHandler={clickUserIcon} />;
