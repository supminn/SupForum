import { DataActions } from "..";
import { Action } from "../reducer.types";

export type VoteState = {
  _id: string;
  type: "question" | "answer";
  upvotedBy: string[];
  downvotedBy: string[];
};

export const voteState: VoteState[] = [];

export const voteReducer = (
  state: VoteState[],
  action: Action
): VoteState[] => {
  switch (action.type) {
    case DataActions.SET_VOTES: {
      return action.payload;
    }
    default:
      return state;
  }
};
