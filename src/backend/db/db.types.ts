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
  title: string;
  description: string;
  views: number;
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
  createdAt: string;
  updatedAt: string;
};

export type Answer = {
  _id: string;
  username: string;
  description: string;
  votes: {
    upvotedBy: string[];
    downvotedBy: string[];
  };
  comments: Comment[];
  bestAnswer?: boolean;
  createdAt: string;
  updatedAt: string;
};
