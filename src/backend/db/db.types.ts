export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export type Question = {
  _id: string;
  username: string;
  questionTitle: string;
  questionText: string;
  view: number;
  votes: {
    upvotedBy: string[];
    downvotedBy: string[];
  };
  comments: Comment[];
  answers: Answer[];
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  _id: string;
  username: string;
  commentText: string;
};

export type Answer = {
  _id: string;
  username: string;
  answerText: string;
  votes: {
    upvotedBy: string[];
    downvotedBy: string[];
  };
  comments: Comment[];
};
