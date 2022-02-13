import { Comment } from "../../reducer/Data/comments";

export type QuestionDb = {
  _id: string;
  username: string;
  title: string;
  description: string;
  views: number;
  votes: {
    upvotedBy: string[];
    downvotedBy: string[];
  };
  comments: Comment[];
  answers: AnswerDb[];
  createdAt: string;
  updatedAt: string;
};

export type AnswerDb = {
  _id: string;
  username: string;
  description: string;
  votes: {
    upvotedBy: string[];
    downvotedBy: string[];
  };
  comments: Comment[];
  bestAnswer?: boolean;
  createdAt: string;
  updatedAt: string;
};
