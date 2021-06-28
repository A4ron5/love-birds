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
  position: relative;
  height: 30px;
  text-align: right;
`;

const Content = styled.div`
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Krestik = styled.div`
  font-size: 1.8rem;

  &:after {
    width: 25px;
    height: 25px;
    display: inline-block;
    content: "\\00d7";
  }
`;

type TPopup = TNotification & {
  closeHandler: Event<TNotification>;
};

export const Popup = ({ message, status, closeHandler }: TPopup) => {
  return (
    <Wrapper>
      <Header>
        <Krestik onClick={() => closeHandler(null)} />
      </Header>
      <Content>
        {message}
        {status}
      </Content>
    </Wrapper>
  );
};
