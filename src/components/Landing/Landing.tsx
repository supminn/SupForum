import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
export const Landing = () => {
  return (
    <>
      <div>
        <h1>Landing</h1>
        <Link to="/questions">
          <Button>Questions</Button>
        </Link>
        <br />{" "}
        <Link to="/users">
          <Button>Users</Button>
        </Link>
      </div>
    </>
  );
};
