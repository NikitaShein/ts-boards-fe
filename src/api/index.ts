import { BoardsApi } from "./boards/boardsApi";
import { UsersApi } from "./users/usersApi";

export const api = {
  boards: new BoardsApi(),
  users: new UsersApi(),
};
