import { Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../reducer";
import { Answer } from "../../reducer/Data/answers";
import { Question } from "../../reducer/Data/questions";
import { getAnswers, getComments, getVotes } from "../../services/apiService";
import { Comments } from "../Comments/Comments";
import { Card } from "./Card/Card";
// import { CardType } from "./Card/card.types";

export const QuestionPage = () => {
  const { questionId } = useParams();
  const {
    state: { questions, answers },
    dispatch,
  } = useDataContext();
  const question = questions.find((question) => question._id === questionId)!;

  useEffect(() => {
    getAnswers(questionId!, dispatch);
    getComments(questionId!, dispatch);
    getVotes(questionId!, dispatch);
  }, []);

  return (
    <>
      <h3>{question.title}</h3>
      <Card type="question" id={question._id} />
      <Comments type="question" />
      <h3>Answers</h3>
      {answers.map((answer: Answer) => (
        <Fragment key={answer._id}>
          <Card type="answer" id={answer._id} />
          <Comments type="answer" />
        </Fragment>
      ))}
    </>
  );
};

/*
 const questionData: CardType = (({
    _id,
    description,
    username,
    createdAt,
    updatedAt,
  }: Question) => ({
    _id,
    description,
    username,
    type: "question",
    createdAt,
    updatedAt,
  }))(question);

  const generateAnswerData = ({
    _id,
    description,
    username,
    createdAt,
    updatedAt,
  }: Answer): CardType => ({
    _id,
    description,
    username,
    type: "answer",
    createdAt,
    updatedAt,
  });
  */
