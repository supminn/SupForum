import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
import { User } from "../../reducer/Data/users";

export const users: Array<User> = [
  {
    _id: uuid(),
    firstName: "User",
    lastName: "Name",
    username: "user1",
    password: bcyrpt.hashSync("password1"),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Expert",
    lastName: "Opinion",
    username: "experty",
    password: bcyrpt.hashSync("that'sMyWay"),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Specty",
    lastName: "Spectator",
    username: "binocular",
    password: bcyrpt.hashSync("opticals11"),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
