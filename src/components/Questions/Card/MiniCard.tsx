import { Question } from "../../../backend/db/db.types";

export const MiniCard = ({
  question,
  onClick,
}: {
  question: Question;
  onClick: () => void;
}) => {
  const votes =
    question.votes.upvotedBy.length + question.votes.downvotedBy.length;
  const answers = question.answers.length;
  const colorAnswer = question.answers.find((answer) => answer.bestAnswer);
  const views = question.views;
  return (
    <div onClick={onClick}>
      <aside>
        <p>{votes} votes</p>
        <p style={colorAnswer ? { backgroundColor: "green" } : {}}>
          {answers} answers
        </p>
        <p>{views} views</p>
      </aside>
      <section>
        <h3>{question.title}</h3>
        <p>{question.description}</p>
      </section>
    </div>
  );
};
