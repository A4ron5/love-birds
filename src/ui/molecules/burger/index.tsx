import * as React from "react";
import styled, { css } from "styled-components";

const line = css`
  width: 25px;
  height: 4px;
  background: var(--primary-color);
  transition: all 0.2s ease-in-out;
`;

const Menu = styled.div`
  span {
    position: relative;
    display: block;
    ${line}

    &:before,
    &:after {
      content: "";
      position: absolute;
      ${line}
    }
    &:before {
      top: -8px;
    }

    &:after {
      top: 8px;
    }
  }

  &[data-open="true"] {
    span {
      background: transparent;

      &:before {
        transform: rotate(45deg) translate(5px, 6px);
      }

      &:after {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  }
`;

type Props = {
  open: boolean;
  clickHandler: () => void;
};

export const Burger = ({ open, clickHandler }: Props) => {
  return (
    <Menu data-open={open} onClick={clickHandler}>
      <span />
    </Menu>
  );
};
