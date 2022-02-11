import { Question, User } from "./../backend/db/db.types";

export type DataState = {
  questions: Question[];
  users: User[];
  searchValue: string;
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
};
