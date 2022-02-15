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
    case DataActions.SET_QUESTION_VOTES: {
      return [action.payload];
    }
    case DataActions.SET_ANSWER_VOTES: {
      return state
        .filter((vote: VoteState) => vote.type === "question")
        .concat(action.payload);
    }
    case DataActions.UPDATE_VOTES: {
      // FIXME: based on API response
      const voteData = state.find(
        (vote: VoteState) =>
          vote._id === action.payload._id && vote.type === action.payload.type
      )!;
      let upvotedBy: string[] = [...voteData.upvotedBy],
        downvotedBy: string[] = [...voteData.downvotedBy];
      if (action.payload.vote) {
        downvotedBy = voteData?.downvotedBy.filter(
          (data: string) => data !== action.payload.username
        );
        if (!upvotedBy.includes(action.payload.username)) {
          upvotedBy = voteData.upvotedBy.concat(action.payload.username);
        }
      } else {
        upvotedBy = voteData?.upvotedBy.filter(
          (data: string) => data !== action.payload.username
        );
        if (!downvotedBy.includes(action.payload.username)) {
          downvotedBy = voteData.downvotedBy.concat(action.payload.username);
        }
      }
      return state.map((vote: VoteState) =>
        vote._id === voteData._id ? { ...vote, upvotedBy, downvotedBy } : vote
      );
    }
    default:
      return state;
  }
};
