import { Question, User } from "./../backend/db/db.types";

export type DataState = {
  questions: Question[];
  users: User[];
  searchValue: string;
  loadingData: boolean;
};

export type Action = {
  type: string;
  payload: object;
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
