import { DataActions } from "..";
import { Action } from "../reducer.types";

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export const userState: User[] = [];

export const userReducer = (state: User[], action: Action): User[] => {
  switch (action.type) {
    case DataActions.SET_USERS: {
      return action.payload;
    }
    default:
      return state;
  }
};
