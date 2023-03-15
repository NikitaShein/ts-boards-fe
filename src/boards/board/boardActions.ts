import { api } from "../../api";
import { Dispatch } from "redux";
import { BoardAction, BoardActionTypes } from "./boardTypes";
import { CardDto } from "../../api/boards/dto/card.dto";
import { ColumnDto } from "../../api/boards/dto/column.dto";

export const fetchBoardWithContent = (id: number) => {
  return async (dispatch: Dispatch<BoardAction>) => {
    try {
      dispatch({ type: BoardActionTypes.FETCH_BOARD_CONTENT });
      const response = await api.boards.getBoardWithContent(id);
      dispatch({
        type: BoardActionTypes.FETCH_BOARD_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BoardActionTypes.FETCH_BOARD_CONTENT_ERROR,
        payload: "An error occurred while loading boards",
      });
    }
  };
};

export const updateCard = (
  board_id: number,
  card_id: number,
  card: CardDto
) => {
  return async (dispatch: Dispatch<BoardAction>) => {
    try {
      await api.boards.updateCard(card_id, card);
      const response = await api.boards.getBoardWithContent(board_id);
      dispatch({
        type: BoardActionTypes.UPDATE_CARD,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BoardActionTypes.UPDATE_CARD_ERROR,
        payload: "An error occurred while updating card",
      });
    }
  };
};

export const addColumn = (board_id: number, column: ColumnDto) => {
  return async (dispatch: Dispatch<BoardAction>) => {
    try {
      await api.boards.addColumn(column, board_id);
      const response = await api.boards.getBoardWithContent(board_id);
      dispatch({
        type: BoardActionTypes.ADD_COLUMN,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BoardActionTypes.ADD_COLUMN_ERROR,
        payload: "An error occurred while adding column",
      });
    }
  };
};

export const removeColumn = (column_id: number, board_id: number) => {
  return async (dispatch: Dispatch<BoardAction>) => {
    try {
      await api.boards.removeColumn(column_id);
      const response = await api.boards.getBoardWithContent(board_id);
      dispatch({
        type: BoardActionTypes.REMOVE_COLUMN,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BoardActionTypes.REMOVE_COLUMN_ERROR,
        payload: "An error occurred while removing column",
      });
    }
  };
};

export const removeCard = (card_id: number, board_id: number) => {
  return async (dispatch: Dispatch<BoardAction>) => {
    try {
      await api.boards.removeCard(card_id);
      const response = await api.boards.getBoardWithContent(board_id);
      dispatch({
        type: BoardActionTypes.REMOVE_CARD,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BoardActionTypes.REMOVE_CARD_ERROR,
        payload: "An error occurred while removing card",
      });
    }
  };
};

export const createCard = (card: CardDto, board_id: number) => {
  return async (dispatch: Dispatch<BoardAction>) => {
    try {
      await api.boards.createCard(board_id, card);
      const response = await api.boards.getBoardWithContent(board_id);
      dispatch({
        type: BoardActionTypes.CREATE_CARD,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BoardActionTypes.CREATE_CARD_ERROR,
        payload: "An error occurred while creating card",
      });
    }
  };
};
