import { useParams } from "react-router";
import { Answer, Question } from "../../backend/db/db.types";
import { useDataContext } from "../../reducer";
import { Comments } from "../Comments/Comments";
import { Card } from "./Card/Card";

export const QuestionPage = () => {
  const { questionId } = useParams();
  const {
    state: { questions },
  } = useDataContext();
  const question = questions.find((question) => question._id === questionId)!;
  return (
    <>
      <h3>{question.title}</h3>
      <Card data={question} />
      <Comments comments={question.comments} />
      {question.answers.map((answer: Answer) => (
        <>
          <Card key={answer._id} data={answer} />
          <Comments comments={answer.comments} />
        </>
      ))}
    </>
  );
};
