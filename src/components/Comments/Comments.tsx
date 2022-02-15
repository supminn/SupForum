import { useDataContext } from "../../reducer";
import { Comment } from "../../reducer/Data/comments";

export const Comments = ({
  type,
  id,
}: {
  type: "question" | "answer";
  id: string;
}) => {
  const {
    state: { comments },
  } = useDataContext();
  const data = comments.filter(
    (comment) => comment.type === type && comment.refId === id
  );

  return (
    <>
      <h4>Comment</h4>
      {data.map((comment: Comment) => (
        <p key={comment._id}>{comment.content}</p>
      ))}
    </>
  );
};
