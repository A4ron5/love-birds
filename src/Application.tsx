import * as React from "react";

import { Pages } from "pages/index";
import { AppGate } from "features/common/mounting";
import { ThemeProvider } from "features/common/theme-provider";
import { GlobalStyles } from "ui/global";

const Application = () => (
  <ThemeProvider>
    <AppGate />
    <GlobalStyles />
    <Pages />
  </ThemeProvider>
);

export default Application;
