import { Fragment } from "react";
import { useParams } from "react-router";
import { Answer, Question } from "../../backend/db/db.types";
import { useDataContext } from "../../reducer";
import { Comments } from "../Comments/Comments";
import { Card } from "./Card/Card";
import { CardType } from "./Card/card.types";

export const QuestionPage = () => {
  const { questionId } = useParams();
  const {
    state: { questions },
  } = useDataContext();
  const question = questions.find((question) => question._id === questionId)!;
  const questionData: CardType = (({
    _id,
    description,
    votes,
    username,
    createdAt,
    updatedAt,
  }: Question) => ({
    _id,
    description,
    votes,
    username,
    type: "question",
    createdAt,
    updatedAt,
  }))(question);

  const generateAnswerData = ({
    _id,
    description,
    votes,
    username,
    createdAt,
    updatedAt,
  }: Answer): CardType => ({
    _id,
    description,
    votes,
    username,
    type: "answer",
    createdAt,
    updatedAt,
  });

  return (
    <>
      <h3>{question.title}</h3>
      <Card data={questionData} />
      <Comments comments={question.comments} />
      <h3>Answers</h3>
      {question.answers.map((answer: Answer) => (
        <Fragment key={answer._id}>
          <Card data={generateAnswerData(answer)} />
          <Comments comments={answer.comments} />
        </Fragment>
      ))}
    </>
  );
};
