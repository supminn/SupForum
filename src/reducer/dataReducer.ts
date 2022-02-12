import { DataState, Action } from "./reducer.types";

export const state: DataState = {
  questions: [],
  users: [],
  searchValue: "",
  loadingData: false,
};

export const reducer = (state: DataState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
