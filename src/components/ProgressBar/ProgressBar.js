/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarWrapper
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar>{value}</Bar>
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.grey500};
  width: 200px;
  height: 20px;
  border: 1px solid ${COLORS.grey50};
  border-radius: 8px;
  padding: 2px 0;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: 50%;
  height: 100%;
  border-radius: 8px 8px 0 0;
`;

export default ProgressBar;
