export type CardType = {
  type: "question" | "answer";
  _id: string;
  username: string;
  description: string;
  votes: {
    upvotedBy: string[];
    downvotedBy: string[];
  };
  createdAt: string;
  updatedAt: string;
};
