import * as React from "react";
import styled from "styled-components";

import { Header } from "features/header";

const Main = styled.main``;

export const MainTemplate = ({ children }: { children: React.ReactNode }) => (
  <Main>
    <Header />
    {children}
  </Main>
);
