import * as React from "react";

import { Pages } from "pages/index";
import { AppGate } from "features/common/entry";
import { ThemeProvider } from "features/common/theme-provider";
import { GlobalStyles } from "ui/global";

const Application = () => (
  <ThemeProvider>
    <AppGate />
    <GlobalStyles />
    <Pages />
  </ThemeProvider>
);
console.log(process.env);
export default Application;
