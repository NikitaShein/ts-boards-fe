import { api } from "../api";
import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes } from "./authTypes";
import { UserDto } from "../api/users/dto/user.dto";

export const signUp = (user: UserDto) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await api.users.signUp(user);
    try {
      dispatch({
        type: AuthActionTypes.SIGN_UP_SUCCESS,
        payload: response.data.token,
      });
    } catch (e) {
      dispatch({
        type: AuthActionTypes.SIGN_UP_ERROR,
        payload:
          "Unexpected error during registration, please check the correctness of the entered data",
      });
    }
  };
};

export const login = (user: UserDto) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await api.users.login(user);
    try {
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: response.data.token,
      });
    } catch (e) {
      dispatch({
        type: AuthActionTypes.LOGIN_ERROR,
        payload:
          "Unexpected error during registration, please check the correctness of the entered data",
      });
    }
  };
};
