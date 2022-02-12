import { QuestionPage } from ".";
import { Question } from "../../backend/db/db.types";
import { useDataContext } from "../../reducer";

export const Questions = () => {
  const {
    state: { questions },
  } = useDataContext();
  return (
    <>
      {questions.map((question: Question) => (
        <QuestionPage key={question._id} question={question} />
      ))}
    </>
  );
};
