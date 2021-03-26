import * as React from "react";
import styled from "styled-components";

import Icon from "./profile-user.svg";

const Container = styled.div`
  width: 30px;
  height: 30px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

type UserIconProps = {
  clickHandler: () => void;
};

export const UserIcon = ({ clickHandler }: UserIconProps) => (
  <Container onClick={clickHandler}>
    <Icon />
  </Container>
);
