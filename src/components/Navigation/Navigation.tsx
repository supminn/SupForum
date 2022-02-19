import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Link to="/">
        <i className="fa-regular fa-face-awesome"></i>
        <span>SupForum</span>
      </Link>
      <section>
        <Link to="/login">Login</Link>
        <Link to="/singup">Signup</Link>
      </section>
    </>
  );
};
