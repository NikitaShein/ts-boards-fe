import { api } from "../api";
import { Dispatch } from "redux";
import { BoardsAction, BoardsActionTypes } from "./boardsTypes";

export const fetchBoards = () => {
  return async (dispatch: Dispatch<BoardsAction>) => {
    try {
      dispatch({ type: BoardsActionTypes.FETCH_BOARDS });
      const response = await api.boards.getBoards();
      dispatch({
        type: BoardsActionTypes.FETCH_BOARDS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BoardsActionTypes.FETCH_BOARDS_ERROR,
        payload: "An error occurred while loading boards",
      });
    }
  };
};
