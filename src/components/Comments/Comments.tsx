import { Comment } from "../../reducer/Data/comments";

export const Comments = ({ comments }: { comments: Comment[] }) => {
  return (
    <>
      <h3>Comments</h3>
      {comments.map((comment: Comment) => (
        <p key={comment._id}>{comment.content}</p>
      ))}
    </>
  );
};
