import { DataState, Action } from "./reducer.types";
import { DataActions } from ".";
export const state: DataState = {
  questions: [],
  users: [],
  searchValue: "",
  loadingData: false,
};

export const reducer = (state: DataState, action: Action) => {
  switch (action.type) {
    case DataActions.SET_QUESTIONS: {
      return {
        ...state,
        questions: action.payload,
      };
    }
    case DataActions.SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case DataActions.SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case DataActions.SET_LOADING_DATA: {
      return {
        ...state,
        loadingData: action.payload,
      };
    }
    case DataActions.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
