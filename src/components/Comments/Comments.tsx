import { Comment } from "../../backend/db/db.types";

export const Comments = ({ comments }: { comments: Comment[] }) => {
  return (
    <>
      {comments.map((comment: Comment) => (
        <p>{comment.content}</p>
      ))}
    </>
  );
};
