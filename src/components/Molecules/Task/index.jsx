import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import Checkbox from "../../../components/Atoms/Checkbox";
import EditButton from "../../../components/Atoms/EditButton";
import Input from "../../../components/Atoms/Input";

const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <StyledInputWrapper>
          <Input onEditComplete={onEditComplete} defaultValue={taskName} />
        </StyledInputWrapper>
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName> {taskName} </StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};
export default Task;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.LIGHT_GRAY};
  height: 24px;
  width: 100%;
  padding: 2px 6px 2px 6px;
  margin-top: 10px;
  gap: 10px;
`;

const StyledCheckboxWrapper = styled.div`
  height: 20px;
  width: 20px;
`;

const StyledInputWrapper = styled.div`
  height: 20px;
  width: 100%;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  gap: 10px;
`;

const StyledTaskName = styled.div`
  height: 20px;
  width: 100%;
  ${TEXT.S}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
