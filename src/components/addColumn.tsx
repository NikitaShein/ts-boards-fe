import React, { useState } from "react";
import { Card } from "./card";
import Title from "./title";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addColumn } from "../boards/board/boardActions";
import { ColumnDto } from "../api/boards/dto/column.dto";
import CloseIcon from "./icons/close";
import FetchIcon from "./icons/fetch";

const AddColumn = (props) => {
  const isVisible = props.isVisibleAddColumnForm ? "inline-block" : "none";

  const [column, setColumn] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardId = Number(id);

  const onColumnInputChange = (event) => {
    setColumn((prev) => {
      return {
        ...column,
        name: event.target.value,
      };
    });
  };

  const cleanForm = (event) => {
    event.target.value = "";
  };

  const addNewColumn = (id: number, body: ColumnDto) => {
    props.setIsVisibleAddColumnForm(false);
    dispatch(addColumn(id, body));
    setColumn({});
  };

  return (
    <Card
      width="20%"
      marginRight="15px"
      display={isVisible}
      verticalAlign="top"
    >
      <Title marginBottom="10px">ADD NEW COLUMN</Title>
      <input
        autoFocus
        onChange={(e) => onColumnInputChange(e)}
        onBlur={(e) => cleanForm(e)}
      ></input>
      <div style={{ textAlign: "right" }}>
        <FetchIcon
          $isHover="true"
          fontSize="2em"
          onClick={() => {
            addNewColumn(boardId, column);
            props.setIsVisibleButton(true);
          }}
        />
        <CloseIcon
          $isHover="true"
          fontSize="2em"
          onClick={() => {
            props.setIsVisibleAddColumnForm(false);
            props.setIsVisibleButton(true);
          }}
        />
      </div>
    </Card>
  );
};

export default AddColumn;
