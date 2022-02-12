import { Question } from "../../backend/db/db.types";
import { useDataContext } from "../../reducer";
import { MiniCard } from "./Card/MiniCard";

export const Questions = () => {
  const {
    state: { questions },
  } = useDataContext();
  return (
    <>
      {questions.map((question: Question) => (
        <MiniCard key={question._id} question={question} />
      ))}
    </>
  );
};
