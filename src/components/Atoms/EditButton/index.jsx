import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = ({ onClick }) => {
  return (
    <StyledEditButton onClick={onClick}>
      <Circle />
      <Img src={pencil} />
    </StyledEditButton>
  );
};
export default EditButton;

const StyledEditButton = styled.button`
  position: relative;
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const Circle = styled.div`
  position: absolute;
  background-color: ${COLOR.LIGHT_GRAY};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  transition: 0.2s ease;
  opacity: 0;
  &:hover {
    opacity: 0.2;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px;
`;
