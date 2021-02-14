import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { fonts } from "../fonts";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${fonts};

  * {
    box-sizing: border-box;
  }

  body {
    font-family: JetBrainsMonoRegular, Arial, sans-serif;
  }
`;
