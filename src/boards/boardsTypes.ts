import { BoardDto } from "../api/boards/dto/board.dto";

export enum BoardsActionTypes {
  FETCH_BOARDS = "FETCH_BOARDS",
  FETCH_BOARDS_ERROR = "FETCH_BOARDS_ERROR",
  FETCH_BOARDS_SUCCESS = "FETCH_BOARDS_SUCCESS",
  FETCH_BOARD_CONTENT = "FETCH_BOARD_CONTENT ",
  FETCH_BOARD_CONTENT_ERROR = "FETCH_BOARD_CONTENT_ERROR",
  FETCH_BOARD_CONTENT_SUCCESS = "FETCH_BOARD_CONTENT_SUCCESS",
}

interface FetchBoardsAction {
  type: BoardsActionTypes.FETCH_BOARDS;
}

interface FetchBoardsSuccessAction {
  type: BoardsActionTypes.FETCH_BOARDS_SUCCESS;
  payload: BoardDto[];
}

interface FetchBoardsErrorAction {
  type: BoardsActionTypes.FETCH_BOARDS_ERROR;
  payload: string;
}

export interface BoardsState {
  boards: BoardDto[];
  loading: boolean;
  error: null | string;
}

export type BoardsAction =
  | FetchBoardsAction
  | FetchBoardsSuccessAction
  | FetchBoardsErrorAction;
