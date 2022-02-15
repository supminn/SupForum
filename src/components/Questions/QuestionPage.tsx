import { Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../reducer";
import { Answer } from "../../reducer/Data/answers";
import {
  getAnswers,
  getQuestionComments,
  getQuestionVotes,
  getAnswerComments,
  getAnswerVotes,
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

  useEffect(() => {
    const answerIds = answers.map((answer: Answer) => answer._id);
    getAnswerComments(questionId!, answerIds, dispatch);
    getAnswerVotes(questionId!, answerIds, dispatch);
  }, [answers, questionId]);

  return (
    <>
      <h3>{question.title}</h3>
      <Card type="question" id={question._id} />
      <Comments type="question" id={question._id} />
      {answers.map((answer: Answer) => (
        <Fragment key={answer._id}>
          <h4>Answer</h4>
          <Card type="answer" id={answer._id} />
          <Comments type="answer" id={answer._id} />
        </Fragment>
      ))}
    </>
  );
};
