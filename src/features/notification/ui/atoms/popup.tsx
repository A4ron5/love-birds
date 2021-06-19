import * as React from "react";
import styled from "styled-components";
import { Event } from "effector";

import { TNotification } from "../../types";

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid var(--primary-color);
`;

const Header = styled.div`
  height: 30px;
  text-align: right;
`;

const Content = styled.div`
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TPopup = TNotification & {
  closeHandler: Event<TNotification>;
};

export const Popup = ({ message, status, closeHandler }: TPopup) => {
  return (
    <Wrapper>
      <Header>
        <span onClick={() => closeHandler(null)}>X</span>
      </Header>
      <Content>
        {message}
        {status}
      </Content>
    </Wrapper>
  );
};
