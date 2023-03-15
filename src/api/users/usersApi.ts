import axios from "axios";
import { UserDto } from "./dto/user.dto";

const url = process.env.REACT_APP_TS_BOARDS_API;

export class UsersApi {
  public async login(user: UserDto) {
    return await axios.post(`${url}/users/login`, { ...user });
  }

  public async signUp(user: UserDto) {
    return await axios.post(`${url}/users/signup`, { ...user });
  }
}
