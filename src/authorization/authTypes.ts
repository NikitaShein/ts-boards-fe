import { UserDto } from "../api/users/dto/user.dto";

export enum AuthActionTypes {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_ERROR = "SIGN_UP_ERROR",
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: string;
}

interface LoginErrorAction {
  type: AuthActionTypes.LOGIN_ERROR;
  payload: string;
}

interface SignUpSuccessAction {
  type: AuthActionTypes.SIGN_UP_SUCCESS;
  payload: string;
}

interface SignUpErrorAction {
  type: AuthActionTypes.SIGN_UP_ERROR;
  payload: string;
}

export interface AuthState {
  token: string;
  error: null | string;
}

export type AuthAction =
  | LoginSuccessAction
  | LoginErrorAction
  | SignUpSuccessAction
  | SignUpErrorAction;
