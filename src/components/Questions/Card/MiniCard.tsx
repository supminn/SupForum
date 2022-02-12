import { Question } from "../../../backend/db/db.types";

export const MiniCard = ({ question }: { question: Question }) => {
  return (
    <>
      <h3>{question.title}</h3>
      <p>{question.description}</p>
    </>
  );
};
