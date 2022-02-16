import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDataContext } from "../../reducer";
import { User } from "../../reducer/Data/users";
import { getUsers } from "../../services/apiService";

export const Users = () => {
  const navigate = useNavigate();
  const {
    state: { users },
    dispatch,
  } = useDataContext();

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  return (
    <>
      <h3>Users</h3>
      {users.map((user: User) => (
        <div key={user._id} onClick={() => navigate(`/users/${user._id}`)}>
          <span>Image place holder</span>
          <div>
            <h4>
              {user.firstName} {user.lastName}
            </h4>
            <small>{user.username}</small>
            <span>user's place</span>
          </div>
        </div>
      ))}
    </>
  );
};
