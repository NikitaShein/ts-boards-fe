import React, { FC } from "react";
import styled from "styled-components";
import BoardsContainer from "./boards/boardsContainer/boardsContainer";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Board from "./boards/board/board";
import SignUp from "./authorization/signUp";
import Login from "./authorization/login";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffc700;
`;

const App: FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/boards"} element={<BoardsContainer />} />
        <Route path={"/boards/:id"} element={<Board />} />
        <Route path={"/users/signup"} element={<SignUp />} />
        <Route path={"/users/login"} element={<Login />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
