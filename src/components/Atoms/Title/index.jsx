import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;
const StyledText = styled.div`
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.ROBOTO};
  ${TEXT.M}
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.L}
  } ;
`;
