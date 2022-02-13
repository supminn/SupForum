import { DataActions, useDataContext } from "../../../reducer";

export const Card = ({
  type,
  id,
}: {
  type: "question" | "answer";
  id: string;
}) => {
  const {
    state: { votes, questions, answers },
    dispatch,
  } = useDataContext();
  const votesData = votes.find(
    (vote) => vote.type === type && vote._id === id
  )!;
  const voteCount = votesData?.upvotedBy.length - votesData?.downvotedBy.length;
  const { username, description, createdAt, updatedAt } =
    type === "question"
      ? questions.find((question) => question._id === id)!
      : answers.find((answer) => answer._id === id)!;

  const updateVotes = (vote: boolean) => {
    // TODO: update dataReducer, call APIs
    const dispatchType =
      type === "question"
        ? DataActions.UPDATE_QUESTION_VOTES
        : DataActions.UPDATE_ANSWER_VOTES;
    const payload = { _id: votesData, username, vote, type };
    console.log("Vote payload", payload);
    dispatch({
      type: dispatchType,
      payload,
    });
  };

  return (
    <>
      <aside>
        <button onClick={() => updateVotes(true)}>Upvote</button>
        <span>Votes: {voteCount}</span>
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
