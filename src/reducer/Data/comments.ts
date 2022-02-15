import { DataActions } from "..";
import { Action } from "./../reducer.types";

export type Comment = {
  _id: string;
  refId?: string; //FIXME: refId is required field
  type?: "question" | "answer";
  username: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export const commentState: Comment[] = [];

export const commentReducer = (state: Comment[], action: Action): Comment[] => {
  switch (action.type) {
    case DataActions.SET_QUESTION_COMMENTS:
      return action.payload;
    case DataActions.SET_ANSWER_COMMENTS:
      return state
        .filter((comment: Comment) => comment.type === "question")
        .concat(action.payload);
    default:
      return state;
  }
};
