// @ts-nocheck
import { Response } from "miragejs";
// const jwt = require("jsonwebtoken");
import dayjs from "dayjs";

export const requiresAuth = function (this: any, request: any) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = encodedToken;
  // const decodedToken = jwt.verify(
  //   encodedToken,
  //   process.env.REACT_APP_JWT_SECRET as string
  // );
  if (decodedToken) {
    const user = this.db.users.findBy({ username: decodedToken.username });
    if (user) {
      const { _id, username } = user;
      return { _id, username };
    }
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
