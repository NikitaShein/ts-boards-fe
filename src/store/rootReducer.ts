import { combineReducers } from "redux";
import { authReducer } from "../authorization/authReducer";
import { boardReducer } from "../boards/board/boardReducer";
import { boardsReducer } from "../boards/boardsReducer";

export const rootReducer = combineReducers({
  boards: boardsReducer,
  board: boardReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
