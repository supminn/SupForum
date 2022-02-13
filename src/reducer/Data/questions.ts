import { DataActions } from "..";
import { Action } from "../reducer.types";

export type Question = {
  _id: string;
  username: string;
  title: string;
  description: string;
  views: number;
  votes?: number;
  answers?: number;
  createdAt: string;
  updatedAt: string;
};

export const questionState: Question[] = [];

export const questionReducer = (
  state: Question[],
  action: Action
): Question[] => {
  switch (action.type) {
    case DataActions.SET_QUESTIONS: {
      return action.payload;
    }
    default:
      return state;
  }
};
