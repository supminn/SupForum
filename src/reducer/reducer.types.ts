import { VoteState } from "./Data/votes";
import { Comment } from "./Data/comments";
import { User } from "./Data/users";
import { Answer } from "./Data/answers";
import { Question } from "./Data/questions";

export type DataState = {
  searchValue: string;
  loadingData: boolean;
  error: string;
  questions: Question[];
  answers: Answer[];
  users: User[];
  votes: VoteState[];
  comments: Comment[];
};

export type Action = {
  type: string;
  payload: any; // FIXME: discrimitated union
};

export type AuthState = {
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
  loadingAuth: boolean;
  login?: {
    token: string;
    _id: string;
  };
};
