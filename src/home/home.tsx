import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Div } from "../components/div";
import Flex from "../components/flex";
import Title from "../components/title";

const Home: FC = () => {
  return (
    <Div height="100%">
      <Flex justify="center" flexDirection="column" flexGrow="2">
        <Title color="black" fontSize="3rem">
          <Link to="/boards">Your Boards</Link>
        </Title>
      </Flex>
    </Div>
  );
};

export default Home;
