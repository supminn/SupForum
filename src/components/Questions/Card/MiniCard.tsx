import { Question } from "../../../reducer/Data/questions";

export const MiniCard = ({
  question,
  onClick,
}: {
  question: Question;
  onClick: () => void;
}) => {
  const { votes, bestAnswer, views, answers, title, description } = question;
  return (
    <div onClick={onClick}>
      <aside>
        <p>{votes} votes</p>
        <p style={bestAnswer ? { backgroundColor: "green" } : {}}>
          {answers} answers
        </p>
        <p>{views} views</p>
      </aside>
      <section>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    </div>
  );
};
