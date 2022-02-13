import { Action } from "../reducer.types";

export type VoteState = {
  _id: string;
  type: "question" | "answer";
  upvotedBy: string[];
  downvotedBy: string[];
};

export const voteState: VoteState = {
  _id: "",
  type: "question",
  upvotedBy: [],
  downvotedBy: [],
};

export const voteReducer = (state: VoteState, action: Action): VoteState => {
  switch (action.type) {
    default:
      return state;
  }
};
