import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { Question } from "./db.types";

export const questions: Array<Question> = [
  {
    _id: uuid(),
    username: "user1",
    questionTitle: "What is the best way to learn React?",
    questionText:
      "I have been trying to get started with React. I am not sure on the best way to learning React. I have tried a lot of tutorials and books but I still don't know how to get started with React. I am looking for someone who can help me.",
    view: 2,
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "user2",
        commentText: "Internet is a confusing place. I know this feeling!",
      },
      {
        _id: uuid(),
        username: "user3",
        commentText:
          "Same question. Even I want to start learning React. Do we need to know JavaScript first?",
      },
    ],
    answers: [
      {
        _id: uuid(),
        username: "user2",
        answerText:
          "The easiest way to get started with learning React is the official documentation",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "user5",
            commentText: "Thanks for the answer!",
          },
        ],
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "user18",
    questionTitle: "Is typescript really difficult?",
    questionText:
      "I am thinking of updating my react project to support typescript. In this way I would be able to learn this new language. However, I read that it's very difficult to convert an existing project into typescript. There would be too many errors. Is this true?",
    view: 0,
    votes: {
      upvotedBy: [],
      downvotedBy: [],
    },
    comments: [],
    answers: [
      {
        _id: uuid(),
        username: "user12",
        answerText:
          "If you are a beginner, then it is not adviced to update the existing application to support typescript. If you are an experienced developer, then it is adviced to convert the existing application to typescript. You can learn more about this in the official documentation.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [
          {
            _id: uuid(),
            username: "user5",
            commentText:
              "I would like to disagree here. It's not difficult. We just need to understand the error descriptions and fix it accordingly. Creating a fresh new project would be even more time consuming",
          },
        ],
      },
      {
        _id: uuid(),
        username: "user2",
        answerText:
          "It's a matter of personal choice. You can decide with either of the approaches",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        comments: [],
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
