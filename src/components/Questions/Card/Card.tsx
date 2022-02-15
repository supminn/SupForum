import { useDataContext } from "../../../reducer";
import { updateVoteHandler } from "../../../services/apiService";

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

  const updateVotes = async (vote: boolean) => {
    // TODO: replace username with loggedIn user's username
    await updateVoteHandler(type, id, username, vote, dispatch);
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
