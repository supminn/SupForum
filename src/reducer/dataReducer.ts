import { questionReducer, questionState } from "./Data/questions";
import { answerState, answerReducer } from "./Data/answers";
import { commentReducer, commentState } from "./Data/comments";
import { DataState, Action } from "./reducer.types";
import { DataActions } from ".";
import { voteReducer, voteState } from "./Data/votes";
import { userReducer, userState } from "./Data/users";

export const state: DataState = {
  searchValue: "",
  loadingData: false,
  error: "",
  questions: questionState,
  answers: answerState,
  users: userState,
  votes: voteState,
  comments: commentState,
};

export const reducer = (state: DataState, action: Action): DataState => {
  state = {
    ...state,
    questions: questionReducer(state.questions, action),
    answers: answerReducer(state.answers, action),
    users: userReducer(state.users, action),
    votes: voteReducer(state.votes, action),
    comments: commentReducer(state.comments, action),
  };
  switch (action.type) {
    case DataActions.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
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
    default:
      return state;
  }
};
