import { QuestionDb } from "./../backend/db/db.types";
import axios from "axios";
import { AnswerDb } from "../backend/db/db.types";
import { DataActions } from "../reducer";
import { Comment } from "../reducer/Data/comments";
import { Action } from "../reducer/reducer.types";

type Dispatch = (action: Action) => void;

export const getQuestions = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get("/api/questions");
    const questions = response.data.questions;
    const questionsData = questions.map((data: QuestionDb) => ({
      _id: data._id,
      username: data.username,
      title: data.title,
      description: data.description,
      views: data.views,
      votes: data.votes.upvotedBy.length - data.votes.downvotedBy.length,
      answers: data.answers.length,
      bestAnswer: data.answers.some((answer: AnswerDb) => answer.bestAnswer),
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }));
    dispatch({
      type: DataActions.SET_QUESTIONS,
      payload: questionsData,
    });
  } catch (error: any) {
    dispatch({
      type: DataActions.SET_ERROR,
      payload: { ...error?.response.data, from: "getQuestions" },
    });
  }
};

export const getAnswers = async (questionId: string, dispatch: Dispatch) => {
  try {
    const response = await axios.get(`/api/answers/${questionId}`);
    const answers = response.data.answers.map((answer: AnswerDb) => ({
      _id: answer._id,
      username: answer.username,
      description: answer.description,
      votes: answer.votes.upvotedBy.length - answer.votes.downvotedBy.length,
      questionId,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt,
    }));

    dispatch({
      type: DataActions.SET_ANSWERS,
      payload: answers,
    });
  } catch (error: any) {
    dispatch({
      type: DataActions.SET_ERROR,
      payload: { ...error?.response.data, from: "getAnswers" },
    });
  }
};

export const getQuestionComments = async (
  questionId: string,
  dispatch: Dispatch
) => {
  try {
    const response = await axios.get(`/api/comments/${questionId}`);
    const comments = response.data.comments.map((comment: Comment) => ({
      ...comment,
      type: "question",
      refId: questionId,
    }));
    dispatch({
      type: DataActions.SET_QUESTION_COMMENTS,
      payload: comments,
    });
  } catch (error: any) {
    dispatch({
      type: DataActions.SET_ERROR,
      payload: { ...error?.response.data, from: "getQuestionComments" },
    });
  }
};

export const getQuestionVotes = async (
  questionId: string,
  dispatch: Dispatch
) => {
  try {
    const response = await axios.get(`/api/votes/${questionId}`);
    const votes = {
      ...response.data.votes,
      type: "question",
      _id: questionId,
    };
    dispatch({
      type: DataActions.SET_QUESTION_VOTES,
      payload: votes,
    });
  } catch (error: any) {
    dispatch({
      type: DataActions.SET_ERROR,
      payload: { ...error?.response.data, from: "getQuestionVotes" },
    });
  }
};

const loginCheck = async () => {
  const logResponse = await axios.post("/api/auth/login", {
    username: "user1",
    password: "password1",
  });
  return logResponse.data.encodedToken;
};
export const updateVoteHandler = async (
  type: "question" | "answer",
  id: string,
  username: string,
  vote: boolean,
  dispatch: Dispatch
) => {
  try {
    // FIXME: Create a single endpoint for updating votes
    /*
    const response = await axios({
      url: `/api/votes/${id}`,
      method: "post",
      data: payload,
      headers: {
        Authorization: token,
      },
    });
    */
    dispatch({
      type: DataActions.UPDATE_VOTES,
      payload: { _id: id, username, vote, type },
    });
  } catch (error: any) {
    dispatch({
      type: DataActions.SET_ERROR,
      payload: { ...error?.response.data, from: "updateVoteHandler" },
    });
  }
};
