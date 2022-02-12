import { Action, AuthState } from "./../reducer/reducer.types";
import { DataState } from "../reducer/reducer.types";

export type DataContextType = {
  state: DataState;
  dispatch: (action: Action) => void;
};

export type AuthContextType = {
  state: AuthState;
  dispatch: (action: Action) => void;
};
