import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { fonts } from "./fonts";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${fonts};

  [data-theme="light"] {
    ${theme};
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: JetBrainsMonoRegular, Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--primary-color);
    font-size: 16px;
  }
`;
