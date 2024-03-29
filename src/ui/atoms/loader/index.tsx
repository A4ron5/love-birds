import * as React from "react";
import styled from "styled-components";

export const Status = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => <Status>Loading...</Status>;
