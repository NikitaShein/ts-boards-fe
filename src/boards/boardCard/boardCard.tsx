import React, { FC } from "react";
import { BoardDto } from "../../api/boards/dto/board.dto";
import Line from "../../components/line";
import Title from "../../components/title";
import { Card } from "../../components/card";
import BorderCardLink from "./BorderCardLink";

interface BoardsProps {
  board: BoardDto;
  id: number;
}

const BoardCard: FC<BoardsProps> = ({ board, id }) => {
  return (
    <BorderCardLink to={`/boards/${id}`}>
      <Card>
        <Title fontSize="1.5rem">{board.name}</Title>
        <Line />
      </Card>
    </BorderCardLink>
  );
};

export default BoardCard;
