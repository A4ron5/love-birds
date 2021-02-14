import { css } from "styled-components";

import JetBrainsMonoRegular from "./JetBrainsMonoRegular.ttf";
import JetBrainsMonoBold from "./JetBrainsMonoBold.ttf";

const includeFont = (fontName: string, fontSrc: string) => css`
  @font-face {
    font-family: ${fontName};
    src: url(${fontSrc});
  }
`;

export const fonts = css`
  ${includeFont("JetBrainsMonoRegular", JetBrainsMonoRegular)}
  ${includeFont("JetBrainsMonoBold", JetBrainsMonoBold)}
`;
