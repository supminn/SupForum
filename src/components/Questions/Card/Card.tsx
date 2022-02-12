import { DataActions, useDataContext } from "../../../reducer";
import { CardType } from "./card.types";

export const Card = ({ data }: { data: CardType }) => {
  const { _id, username, description, votes, type, createdAt, updatedAt } =
    data;
  const voteCount = votes.upvotedBy.length - votes.downvotedBy.length;
  const { dispatch } = useDataContext();

  const updateVotes = (vote: boolean) => {
    // TODO: update dataReducer, call APIs
    const dispatchType =
      type === "question"
        ? DataActions.UPDATE_QUESTION_VOTES
        : DataActions.UPDATE_ANSWER_VOTES;
    dispatch({ type: dispatchType, payload: { _id, username, vote } });
  };

  return (
    <>
      <aside>
        <button onClick={() => updateVotes(true)}>Upvote</button>
        <span>{voteCount}</span>
        <button onClick={() => updateVotes(false)}>Downvote</button>
      </aside>
      <section>{description}</section>
      <footer>
        <p>
          Edited:{updatedAt} {type === "question" ? "Asked" : "Answered"}:
          {createdAt}
        </p>
        <p>{username}</p>
      </footer>
    </>
  );
};
