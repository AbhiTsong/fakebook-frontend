import React from "react";
import styled from "styled-components";

const TooltipContainer = styled.span`
  position: relative;
  z-index: 10;

  &:hover > .tip {
    display: block;
  }

  & > .tip {
    display: none;
    position: absolute;

    background: #1f2531;
    opacity: 0.9;
    border-radius: 5px;

    color: #ffffff;
    padding: 12px 8px;
    width: 100%;
    min-width: 100px;
  }

  & > .tip::after {
    content: "";
    position: absolute;
    opacity: 0.9;
    top: -10px;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`;

export const ToolTip = ({ children, tip }) => {
  return (
    <TooltipContainer>
      {children}
      <span className="tip">{tip}</span>
    </TooltipContainer>
  );
};
