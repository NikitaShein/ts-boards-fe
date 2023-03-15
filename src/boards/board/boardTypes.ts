import { BoardDto } from "../../api/boards/dto/board.dto";

export enum BoardActionTypes {
  FETCH_BOARD_CONTENT = "FETCH_BOARD_CONTENT",
  FETCH_BOARD_CONTENT_ERROR = "FETCH_BOARD_CONTENT_ERROR",
  FETCH_BOARD_CONTENT_SUCCESS = "FETCH_BOARD_CONTENT_SUCCESS",
  UPDATE_CARD_ERROR = "UPDATE_CARD_ERROR",
  UPDATE_CARD = "UPDATE_CARD",
  ADD_COLUMN = "ADD_COLUMN",
  ADD_COLUMN_ERROR = "ADD_COLUMN_ERROR",
  REMOVE_COLUMN = "REMOVE_COLUMN",
  REMOVE_COLUMN_ERROR = "REMOVE_COLUMN_ERROR",
  REMOVE_CARD = "REMOVE_CARD",
  REMOVE_CARD_ERROR = "REMOVE_CARD_ERROR",
  CREATE_CARD = "CREATE_CARD",
  CREATE_CARD_ERROR = "CREATE_CARD_ERROR",
}

interface FetchBoardAction {
  type: BoardActionTypes.FETCH_BOARD_CONTENT;
}

interface FetchBoardSuccessAction {
  type: BoardActionTypes.FETCH_BOARD_CONTENT_SUCCESS;
  payload: BoardDto[];
}

interface FetchBoardErrorAction {
  type: BoardActionTypes.FETCH_BOARD_CONTENT_ERROR;
  payload: string;
}

interface UpdateCardAction {
  type: BoardActionTypes.UPDATE_CARD;
  payload: BoardDto[];
}

interface UpdateCardErrorAction {
  type: BoardActionTypes.UPDATE_CARD_ERROR;
  payload: string;
}

interface AddColumnAction {
  type: BoardActionTypes.ADD_COLUMN;
  payload: BoardDto[];
}

interface AddColumnErrorAction {
  type: BoardActionTypes.ADD_COLUMN_ERROR;
  payload: string;
}

interface RemoveColumnAction {
  type: BoardActionTypes.REMOVE_COLUMN;
  payload: BoardDto[];
}

interface RemoveColumnErrorAction {
  type: BoardActionTypes.REMOVE_COLUMN_ERROR;
  payload: string;
}

interface RemoveCardAction {
  type: BoardActionTypes.REMOVE_CARD;
  payload: BoardDto[];
}

interface RemoveCardErrorAction {
  type: BoardActionTypes.REMOVE_CARD_ERROR;
  payload: string;
}

interface CreateCardAction {
  type: BoardActionTypes.CREATE_CARD;
  payload: BoardDto[];
}

interface CreateCardErrorAction {
  type: BoardActionTypes.CREATE_CARD_ERROR;
  payload: string;
}

export interface BoardState {
  board: BoardDto[];
  loading: boolean;
  error: null | string;
}

export type BoardAction =
  | FetchBoardAction
  | FetchBoardSuccessAction
  | FetchBoardErrorAction
  | UpdateCardAction
  | UpdateCardErrorAction
  | AddColumnAction
  | AddColumnErrorAction
  | RemoveColumnAction
  | RemoveColumnErrorAction
  | RemoveCardAction
  | RemoveCardErrorAction
  | CreateCardAction
  | CreateCardErrorAction;
