import React from "react";
import Flex from "./flex";
import Line from "./line";
import Paragraph from "./paragraph";
import Title from "./title";

type TitleContentProps = {
  paragraph: string;
  title: string;
};

const TitleContent = (props: TitleContentProps) => {
  return (
    <>
      <Flex padding="0px" justify="flex-end">
        <Paragraph fontSize="0.7rem">{props.paragraph}</Paragraph>
      </Flex>
      <Line />
      <Title fontSize="3rem">{props.title}</Title>
    </>
  );
};

export default TitleContent;
