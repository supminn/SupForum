import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <div>
        <h1>Landing</h1>
        <Link to="/questions">Questions</Link>
        <br /> <Link to="/users">Users</Link>
      </div>
    </>
  );
};
