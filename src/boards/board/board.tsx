import React, { createRef, FC, useEffect, useRef, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BoardDto } from "../../api/boards/dto/board.dto";
import { CardDto } from "../../api/boards/dto/card.dto";
import { ColumnDto } from "../../api/boards/dto/column.dto";
import { Card } from "../../components/card";
import { Container } from "../../components/container";
import Flex from "../../components/flex";
import Title from "../../components/title";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import {
  fetchBoardWithContent,
  removeCard,
  removeColumn,
  updateCard,
} from "./boardActions";
import ColumnWrapper from "../../components/columnWrapper";
import AddColumn from "../../components/addColumn";
import ModalWindow from "../../components/modal";
import TrashIcon from "../../components/icons/trash";
import AddIcon from "../../components/icons/add";
import TitleContent from "../../components/titleContent";

const Board: FC = () => {
  const { id } = useParams();
  const { board, loading, error } = useTypeSelector((state) => state.board);
  const dispatch = useDispatch();
  const boardId = Number(id);

  const [isVisibleAddColumnForm, setIsVisibleAddColumnForm] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleButton, setIsVisibleButton] = useState(true);
  const [columnId, setColumnId] = useState(null);
  const [newCard, setNewCard] = useState({});

  const addColRef = useRef();

  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    dispatch(fetchBoardWithContent(boardId));
  }, []);

  useEffect(() => {
    if (null !== ref.current) {
      const scrollWidth = ref.current.scrollWidth;
      ref.current.scrollTo(scrollWidth, 0);
    }
  });

  const changeCardInput = (event) => {
    setNewCard((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
        column_id: columnId,
      };
    });
  };

  const onDragEnd = (result: DropResult, columns: ColumnDto[]) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const cardId = Number(result.draggableId);
      const column = columns.filter(
        (column) => column.id === Number(source.droppableId)
      );

      const cards = column[0].cards;
      const card = cards.find((c: CardDto) => c.id === cardId);
      const updatedCard = {
        ...card,
        position: destination.index,
        column_id: destination.droppableId,
      };

      dispatch(updateCard(boardId, cardId, updatedCard));
    } else {
      const cardId = Number(result.draggableId);
      const column = columns.filter(
        (column) => column.id === Number(source.droppableId)
      );
      const cards = column[0].cards;
      const card = cards.find((c: CardDto) => c.id === cardId);
      const updatedCard = {
        ...card,
        position: destination.index,
        column_id: source.droppableId,
      };

      dispatch(updateCard(boardId, cardId, updatedCard));
    }
  };

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

  const column = (column: ColumnDto, index: number) => {
    return (
      <div
        key={index}
        style={{
          width: "20%",
          marginRight: "15px",
          display: "inline-block",
          verticalAlign: "top",
        }}
      >
        <Droppable droppableId={column.id.toString()}>
          {(provided, snapshot) => {
            return (
              <Card
                width="100%"
                marginBottom="15px"
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <Flex
                  align="center"
                  justify="space-between"
                  marginBottom="10px"
                >
                  <Title upperCase={true}>{column.name}</Title>
                  <TrashIcon
                    $isHover="true"
                    onClick={() => dispatch(removeColumn(column.id, boardId))}
                  />
                </Flex>

                <Flex flexDirection="column">{renderCard(column)}</Flex>
                {provided.placeholder}
              </Card>
            );
          }}
        </Droppable>
      </div>
    );
  };

  const card = (card: CardDto, index: number) => {
    return (
      <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
        {(provided, snapshot) => {
          return (
            <Card
              height="auto"
              width="100%"
              border="1px solid #D4D4D4"
              marginBottom="10px"
              hover={true}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                userSelect: "none",
                backgroundColor: snapshot.isDragging ? "#ffc700" : "#2e3032",
                ...provided.draggableProps.style,
              }}
            >
              <Flex align="center" justify="space-between">
                <Title>{card.name}</Title>
                <TrashIcon
                  $isHover="true"
                  onClick={() => dispatch(removeCard(card.id, boardId))}
                />
              </Flex>
            </Card>
          );
        }}
      </Draggable>
    );
  };

  const renderColumns = (board: BoardDto) => {
    return (
      <ColumnWrapper ref={ref}>
        {board.columns.map((columnDto: ColumnDto, index) => {
          return column(columnDto, index);
        })}
        <AddColumn
          addColRef={addColRef}
          isVisibleAddColumnForm={isVisibleAddColumnForm}
          setIsVisibleAddColumnForm={setIsVisibleAddColumnForm}
          setIsVisibleButton={setIsVisibleButton}
        />
        <AddIcon
          $isVisibleButton={isVisibleButton}
          fontSize="30px"
          $isHover="true"
          onClick={() => {
            setIsVisibleAddColumnForm(!isVisibleAddColumnForm);
            setIsVisibleButton(false);
          }}
        />
      </ColumnWrapper>
    );
  };

  const renderCard = (column: ColumnDto) => {
    return (
      <>
        {column.cards.map((cardDto: CardDto, index) => {
          return card(cardDto, index);
        })}
        <AddIcon
          $isVisibleButton={isVisibleButton}
          $isHover="true"
          onClick={() => {
            setIsVisibleModal(true);
            setIsVisibleButton(false);
            setColumnId(column.id);
          }}
        />
      </>
    );
  };

  const renderContent = (boardContent: BoardDto) => {
    const columns = boardContent.columns;
    return (
      <React.Fragment key={boardContent.id}>
        <TitleContent
          paragraph={"0" + boardContent.id}
          title={boardContent.name}
        />
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
          {renderColumns(boardContent)}
        </DragDropContext>
      </React.Fragment>
    );
  };

  return (
    <Container>
      {board.length ? (
        board.map((boardContent: BoardDto) => renderContent(boardContent))
      ) : (
        <Title>Your workspace is currently empty...</Title>
      )}
      {isVisibleModal ? (
        <ModalWindow
          changeCardInput={changeCardInput}
          setIsVisibleModal={setIsVisibleModal}
          setIsVisibleButton={setIsVisibleButton}
          card={newCard}
          boardId={boardId}
        />
      ) : null}
    </Container>
  );
};

export default Board;
