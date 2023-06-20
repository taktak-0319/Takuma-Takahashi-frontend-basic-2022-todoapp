import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";

const Input = ({ defaultValue = "", onEditComplete }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.onblur = (e) => onEditComplete(e.target.value);
    inputRef.current.onkeydown = (e) => {
      if (e.key === "Enter") {
        onEditComplete(e.target.value);
      }
    };
  }, []);
  return <StyledInput ref={inputRef}></StyledInput>;
};
export default Input;

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  padding: 0px 4px;
  background-color: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  ${TEXT.S};
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  outline: none;
`;
