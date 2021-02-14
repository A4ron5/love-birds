import * as React from "react";

import { Pages } from "pages/index";
import { AppGate } from "features/common/entry";
import { GlobalStyles } from "ui/global";

const Application = () => (
  <div>
    <AppGate />
    <GlobalStyles />
    <Pages />
  </div>
);

export default Application;
