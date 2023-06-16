import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import Check from "../../../assets/svg/check.svg";

const Checkbox = ({ onClick }) => {
  return (
    <CheckboxButton onClick={onClick}>
      <Img src={Check} />
    </CheckboxButton>
  );
};
export default Checkbox;
const CheckboxButton = styled.button`
  position: absolute;
  background: none;
  border: solid 2px ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  width: 20px;
  height: 20px;
  padding: 0px;
  cursor: pointer;
`;
const Img = styled.img`
  position: relative;
  opacity: 0;
  width: 16px;
  height: 16px;
  &:hover {
    opacity: 1;
  }
`;
