import axios from "axios";
import { useEffect } from "react";
import { useDataContext } from "../../reducer";
import { MiniCard } from "./Card/MiniCard";
import { DataActions } from "../../reducer";
import { useNavigate } from "react-router";
import { Question } from "../../reducer/Data/questions";
import { getQuestions } from "../../services/apiService";

export const Questions = () => {
  const navigate = useNavigate();
  const {
    state: { questions },
    dispatch,
  } = useDataContext();

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  return (
    <>
      {questions.map((question: Question) => (
        <MiniCard
          key={question._id}
          question={question}
          onClick={() => navigate(`/questions/${question._id}`)}
        />
      ))}
    </>
  );
};
