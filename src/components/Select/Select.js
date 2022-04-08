import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBits>
        <span>{displayedValue}</span>
        <StyledIcon id="chevron-down" color={COLORS.gray700} />
      </PresentationalBits>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  background-color: ${COLORS.transparentGray15};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBits = styled.div`
  padding: 16px 48px 16px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: solid;
  }

  ${NativeSelect}:hover + & {
    background-color: ${COLORS.transparentGray35};
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 12px;
  pointer-events: none;
`;

export default Select;
