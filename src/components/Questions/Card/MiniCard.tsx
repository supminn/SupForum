import { Question } from "../../../backend/db/db.types";

export const MiniCard = ({
  question,
  onClick,
}: {
  question: Question;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick}>
      <h3>{question.title}</h3>
      <p>{question.description}</p>
    </div>
  );
};
