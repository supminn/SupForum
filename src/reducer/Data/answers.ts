import { DataActions } from "..";
import { Action } from "../reducer.types";

export type Answer = {
  _id: string;
  questionId: string;
  username: string;
  description: string;
  bestAnswer?: boolean;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

export const answerState: Answer[] = [];

export const answerReducer = (state: Answer[], action: Action): Answer[] => {
  switch (action.type) {
    case DataActions.SET_ANSWERS: {
      return action.payload;
    }
    default:
      return state;
  }
};
