import { BoardsAction, BoardsActionTypes, BoardsState } from "./boardsTypes";

const initialState: BoardsState = {
  boards: [],
  loading: false,
  error: null,
};

export const boardsReducer = (
  state = initialState,
  action: BoardsAction
): BoardsState => {
  switch (action.type) {
    case BoardsActionTypes.FETCH_BOARDS:
      return { loading: true, error: null, boards: [] };
    case BoardsActionTypes.FETCH_BOARDS_SUCCESS:
      return { loading: false, error: null, boards: action.payload };
    case BoardsActionTypes.FETCH_BOARDS_ERROR:
      return { loading: false, error: action.payload, boards: [] };
    default:
      return state;
  }
};
