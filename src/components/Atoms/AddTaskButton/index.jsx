import React from "react";
import styled from "styled-components";
import PLUS from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <Rectangle />
      <Task>
        <Img src={PLUS} />
        <AddTaskText>タスクを追加</AddTaskText>
      </Task>
    </StyledAddTaskButton>
  );
};
export default AddTaskButton;

const StyledAddTaskButton = styled.button`
  position: relative;
  width: 126px;
  height: 24px;
  background-color: transparent;
  border: none;
  padding: 0px;
  cursor: pointer;
`;
const Rectangle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.GREEN};
  border-radius: 9999px;
  opacity: 0;
  transition: 0.2s ease;
  &:hover {
    opacity: 0.2;
  }
`;
const Task = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 2px 6px;
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
`;
const AddTaskText = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S};
  white-space: nowrap;
`;
