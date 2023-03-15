import React, { FC } from "react";
import Boards from "../boards";
import { Container } from "../../components/container";
import TitleContent from "../../components/titleContent";

const BoardsContainer: FC = () => {
  return (
    <Container>
      <TitleContent paragraph="03" title="Your Boards" />
      <Boards />
    </Container>
  );
};

export default BoardsContainer;
