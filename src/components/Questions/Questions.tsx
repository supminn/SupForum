import axios from "axios";
import { useEffect } from "react";
import { Question } from "../../backend/db/db.types";
import { useDataContext } from "../../reducer";
import { MiniCard } from "./Card/MiniCard";
import { DataActions } from "../../reducer";

export const Questions = () => {
  const {
    state: { questions },
    dispatch,
  } = useDataContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/questions");
        dispatch({
          type: DataActions.SET_QUESTIONS,
          payload: response.data.questions,
        });
      } catch (error: any) {
        dispatch({
          type: DataActions.SET_ERROR,
          payload: error?.response.data,
        });
      }
    })();
  });

  return (
    <>
      {questions.map((question: Question) => (
        <MiniCard key={question._id} question={question} />
      ))}
    </>
  );
};
