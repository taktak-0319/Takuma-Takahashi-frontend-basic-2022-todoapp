import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";

const Alert = ({ alertMessage, visible }) => {
  return <StyledAlert visible={visible}>{alertMessage}</StyledAlert>;
};
export default Alert;
const StyledAlert = styled.div`
  position: absolute;
  left: 50%;
  width: 100%;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  border-radius: 4px;
  max-width: 400px;
  padding: 10px 20px;
  transform: translate(-50%, 0);
  transition: all 0.5s ease;
  top: ${(props) => (props.visible ? "40px" : "0px")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  ${TEXT.S}
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    top: ${(props) => (props.visible ? "80px" : "0px")};
  } ;
`;
