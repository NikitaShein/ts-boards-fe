import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createCard } from "../boards/board/boardActions";
import Flex from "./flex";
import CloseIcon from "./icons/close";
import FetchIcon from "./icons/fetch";
import Title from "./title";

type ModalProps = {
  height?: string;
  width?: string;
  backgroundColor?: string;
  position?: string;
  top?: string;
  left?: string;
};

const Modal = styled.div<ModalProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.712);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ModalContentProps = {
  height?: string;
  width?: string;
  backgroundColor?: string;
  position?: string;
  top?: string;
  left?: string;
};

const ModalContent = styled.div<ModalContentProps>`
  padding: 20px;
  border-radius: 3px;
  background-color: #25282a;
  height: 50%;
  width: 80%;
`;

const ModalWindow = (props) => {
  const dispatch = useDispatch();

  return (
    <Modal
      onClick={() => {
        props.setIsVisibleModal(false);
        props.setIsVisibleButton(true);
      }}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title fontSize="1.5em">ADD NEW CARD</Title>
        <Flex flexDirection="column" justify="space-between" align="flex-start">
          <Title color="#25282a">Enter card name</Title>
          <label htmlFor="name"></label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Select name"
            onChange={props.changeCardInput}
          />
          <Title color="#25282a">Enter card text</Title>
          <label htmlFor="text"></label>
          <textarea
            id="text"
            name="text"
            placeholder="Select text"
            onChange={props.changeCardInput}
          />
        </Flex>
        <div style={{ textAlign: "right" }}>
          <FetchIcon
            $isHover="true"
            fontSize="2em"
            onClick={() => {
              dispatch(createCard(props.card, props.boardId));
              props.setIsVisibleModal(false);
              props.setIsVisibleButton(true);
            }}
          />
          <CloseIcon
            $isHover="true"
            fontSize="2em"
            onClick={() => {
              props.setIsVisibleModal(false);
              props.setIsVisibleButton(true);
            }}
          />
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
