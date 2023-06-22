import React, { useState } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";
import COLOR from "../../../variables/color.js";
import AddTaskButton from "../../../components/Atoms/AddTaskButton";
import Task from "../../../components/Molecules/Task";
import Title from "../../../components/Atoms/Title";
import TodoCard from "../../../components/Organisms/TodoCard";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};
export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
    gap: 20px;
  } ;
`;
