import { BoardAction, BoardActionTypes, BoardState } from "./boardTypes";

const initialState: BoardState = {
  board: [],
  loading: false,
  error: null,
};

export const boardReducer = (
  state = initialState,
  action: BoardAction
): BoardState => {
  switch (action.type) {
    case BoardActionTypes.FETCH_BOARD_CONTENT:
      return { loading: true, error: null, board: [] };

    case BoardActionTypes.FETCH_BOARD_CONTENT_SUCCESS:
      return {
        loading: false,
        error: null,
        board: action.payload,
      };

    case BoardActionTypes.FETCH_BOARD_CONTENT_ERROR:
      return {
        loading: false,
        error: action.payload,
        board: [],
      };

    case BoardActionTypes.UPDATE_CARD:
      return {
        loading: false,
        error: null,
        board: action.payload,
      };

    case BoardActionTypes.UPDATE_CARD_ERROR:
      return {
        loading: false,
        error: action.payload,
        board: [],
      };

    case BoardActionTypes.ADD_COLUMN:
      return {
        loading: false,
        error: null,
        board: action.payload,
      };

    case BoardActionTypes.ADD_COLUMN_ERROR:
      return {
        loading: false,
        error: action.payload,
        board: [],
      };

    case BoardActionTypes.REMOVE_COLUMN:
      return {
        loading: false,
        error: null,
        board: action.payload,
      };

    case BoardActionTypes.REMOVE_COLUMN_ERROR:
      return {
        loading: false,
        error: action.payload,
        board: [],
      };

    case BoardActionTypes.REMOVE_CARD:
      return {
        loading: false,
        error: null,
        board: action.payload,
      };

    case BoardActionTypes.REMOVE_CARD_ERROR:
      return {
        loading: false,
        error: action.payload,
        board: [],
      };

    case BoardActionTypes.CREATE_CARD:
      return {
        loading: false,
        error: null,
        board: action.payload,
      };

    case BoardActionTypes.CREATE_CARD_ERROR:
      return {
        loading: false,
        error: action.payload,
        board: [],
      };

    default:
      return state;
  }
};
