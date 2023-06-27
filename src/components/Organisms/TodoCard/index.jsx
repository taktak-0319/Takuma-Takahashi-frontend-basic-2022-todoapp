import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import AddTaskButton from "../../../components/Atoms/AddTaskButton";
import Task from "../../../components/Molecules/Task";
import BREAKPOINT from "../../../variables/breakpoint.js";

const TodoCard = () => {
  const [taskList, setTaskList] = useState(() => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);
  const onAddTaskButtonClick = () => {
    const newtask = { name: "", initializing: true };
    setTaskList(taskList.concat(newtask));
  };
  const onTaskComplete = (index) => {
    const completedtask = [...taskList];
    completedtask.splice(index, 1);
    setTaskList(completedtask);
  };
  const onTaskNameChange = (value, index) => {
    {
      const changedtask = [...taskList];
      changedtask.splice(index, 1);
      value === ""
        ? setTaskList(changedtask)
        : setTaskList(
            taskList.map((task, removeindex, taskList) => {
              return removeindex === index
                ? { name: value, initializing: false }
                : task;
            })
          );
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => {
          return (
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskNameChange={(value) => onTaskNameChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          );
        })}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 500px;
  }
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
`;
