import { Action } from "./../reducer.types";

export type Comment = {
  _id: string;
  type?: "question" | "answer";
  username: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export const commentState: Comment[] = [];

export const commentReducer = (state: Comment[], action: Action): Comment[] => {
  switch (action.type) {
    default:
      return state;
  }
};
