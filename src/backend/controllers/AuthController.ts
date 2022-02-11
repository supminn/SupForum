import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate } from "../utils/authUtils";
import bcrypt from "bcryptjs";
// const jwt = require("jsonwebtoken");

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, username, password}
 * */

export const signupHandler = function (schema: any, request: any) {
  const { username, password, ...rest } = JSON.parse(request.requestBody);
  try {
    // check if username already exists
    const foundUser = schema.users.findBy({ username: username });
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ["Unprocessable Entity. Username Already Exists."],
        }
      );
    }
    const _id = uuid();
    const encryptedPassword = bcrypt.hashSync(password, 5);
    const newUser = {
      _id,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      username,
      password: encryptedPassword,
      ...rest,
    };
    const createdUser = schema.users.create(newUser);
    // const encodedToken = jwt.sign(
    //   { _id, username },
    //   process.env.REACT_APP_JWT_SECRET
    // );
    const encodedToken = { _id, username };
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {username, password}
 * */

export const loginHandler = function (schema: any, request: any) {
  const { username, password } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ username: username });
    if (!foundUser) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    if (bcrypt.compareSync(password, foundUser.password)) {
      // const encodedToken = jwt.sign(
      //   { _id: foundUser._id, username },
      //   process.env.REACT_APP_JWT_SECRET
      // );
      const encodedToken = { _id: foundUser._id, username };
      return new Response(200, {}, { foundUser, encodedToken });
    }
    return new Response(
      401,
      {},
      {
        errors: [
          "The credentials you entered are invalid. Unauthorized access error.",
        ],
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
