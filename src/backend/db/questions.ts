import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { QuestionDb } from "./db.types";

export const questions: Array<QuestionDb> = [
  {
    _id: uuid(),
    username: "user1",
    title: "What is the best way to learn React?",
    description:
      "I have been trying to get started with React. I am not sure on the best way to learning React. I have tried a lot of tutorials and books but I still don't know how to get started with React. I am looking for someone who can help me.",
    views: 2,
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "user2",
        content: "Internet is a confusing place. I know this feeling!",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "user3",
        content:
          "Same question. Even I want to start learning React. Do we need to know JavaScript first?",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    answers: [
      {
        _id: uuid(),
        username: "user2",
        description:
          "The easiest way to get started with learning React is the official documentation",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "user5",
            content: "Thanks for the answer!",
            createdAt: formatDate(),
            updatedAt: formatDate(),
          },
        ],
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "user18",
    title: "Is typescript really difficult?",
    description:
      "I am thinking of updating my react project to support typescript. In this way I would be able to learn this new language. However, I read that it's very difficult to convert an existing project into typescript. There would be too many errors. Is this true?",
    views: 0,
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [],
    answers: [
      {
        _id: uuid(),
        username: "user12",
        description:
          "If you are a beginner, then it is not adviced to update the existing application to support typescript. If you are an experienced developer, then it is adviced to convert the existing application to typescript. You can learn more about this in the official documentation.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "user5",
            content:
              "I would like to disagree here. It's not difficult. We just need to understand the error descriptions and fix it accordingly. Creating a fresh new project would be even more time consuming",
            createdAt: formatDate(),
            updatedAt: formatDate(),
          },
          {
            _id: uuid(),
            username: "user1",
            content: "Thanks for the answer. Comment#2",
            createdAt: formatDate(),
            updatedAt: formatDate(),
          },
        ],
        bestAnswer: true,
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "user2",
        description:
          "It's a matter of personal choice. You can decide with either of the approaches",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [],
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
