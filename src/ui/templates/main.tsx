import * as React from "react";
import styled from "styled-components";

import { Header } from "features/header";

const Main = styled.main`
  height: calc(100vh - 60px);
  padding: 0 15px;
`;

export const MainTemplate = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);
