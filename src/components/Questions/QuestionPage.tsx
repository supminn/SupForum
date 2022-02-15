import { Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../reducer";
import { Answer } from "../../reducer/Data/answers";
import {
  getAnswers,
  getQuestionComments,
  getQuestionVotes,
} from "../../services/apiService";
import { Comments } from "../Comments/Comments";
import { Card } from "./Card/Card";

export const QuestionPage = () => {
  const { questionId } = useParams();
  const {
    state: { questions, answers },
    dispatch,
  } = useDataContext();
  const question = questions.find((question) => question._id === questionId)!;

  useEffect(() => {
    getAnswers(questionId!, dispatch);
    getQuestionComments(questionId!, dispatch);
    getQuestionVotes(questionId!, dispatch);
  }, []);

  return (
    <>
      <h3>{question.title}</h3>
      <Card type="question" id={question._id} />
      <Comments type="question" id={question._id} />
      {answers.map((answer: Answer) => (
        <AnswerComponent key={answer._id} answer={answer} />
      ))}
    </>
  );
};

const AnswerComponent = ({ answer }: { answer: Answer }) => {
  return (
    <Fragment>
      <h3>Answer</h3>
      <Card type="answer" id={answer._id} />
      <Comments type="answer" id={answer._id} />
    </Fragment>
  );
};
