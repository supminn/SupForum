import { AuthState, Action } from "./reducer.types";

export const state: AuthState = {
  username: "",
  password: "",
  loadingAuth: false,
};

export const reducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
