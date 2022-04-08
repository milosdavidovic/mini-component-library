import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
  small: {
    "--fontSize": `${14 / 16}rem`,
    "--placeholderOffset": "24px",
    "--border": "1px",
  },
  large: {
    "--fontSize": `${18 / 16}rem`,
    "--placeholderOffset": "36px",
    "--border": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? 16 : 24;

  return (
    <Wrapper width={width} style={SIZE[size]}>
      <IconWrapper size={iconSize}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <VisuallyHidden>
        <label for="input">{label}</label>
      </VisuallyHidden>
      <StyledInput id="input" type="text" placeholder="Search..." />
    </Wrapper>
  );
};

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  padding-left: var(--placeholderOffset);
  font-size: var(--fontSize);
  font-weight: 700;
  outline: none;
  color: inherit;

  ::placeholder {
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  position: relative;
  border-bottom: var(--border) solid ${COLORS.gray700};
  width: ${({ width }) => width}px;
  font-family: "Roboto", sans-serif;
  padding: 2px 0;
  color: ${COLORS.gray700};

  & > ${StyledInput}:focus {
    outline-offset: 4px;
    outline: solid;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: ${({ size }) => `${size}px`};
  pointer-events: none;
`;

export default IconInput;
