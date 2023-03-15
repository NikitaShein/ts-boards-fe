import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import BoardCard from "./boardCard/boardCard";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchBoards } from "./boardsActions";
import Flex from "../components/flex";
import { BoardDto } from "../api/boards/dto/board.dto";
import Title from "../components/title";

const Boards: FC = () => {
  const { boards, loading, error } = useTypeSelector((state) => state.boards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoards());
  }, []);

  if (loading) {
    return (
      <Flex justify="center">
        <Title fontSize="3rem">LOADING...</Title>
      </Flex>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Flex>
      {boards.length ? (
        boards.map((board: BoardDto) => (
          <BoardCard board={board} id={board.id} key={board.id} />
        ))
      ) : (
        <h1>Your workspace is currently empty...</h1>
      )}
    </Flex>
  );
};

export default Boards;
