import { AuthState, AuthAction, AuthActionTypes } from "./authTypes";

const initialState: AuthState = {
  token: "",
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return { token: action.payload, error: null };

    case AuthActionTypes.LOGIN_ERROR:
      return {
        token: "",
        error: action.payload,
      };

    case AuthActionTypes.SIGN_UP_SUCCESS:
      return { token: action.payload, error: null };

    case AuthActionTypes.SIGN_UP_ERROR:
      return {
        token: "",
        error: action.payload,
      };

    default:
      return state;
  }
};
