import { useDataContext } from "../../reducer";
import { Comment } from "../../reducer/Data/comments";

export const Comments = ({ type }: { type: "question" | "answer" }) => {
  const {
    state: { comments },
  } = useDataContext();
  const data = comments.filter((comment) => comment.type === type);
  return (
    <>
      <h3>Comments</h3>
      {data.map((comment: Comment) => (
        <p key={comment._id}>{comment.content}</p>
      ))}
    </>
  );
};
