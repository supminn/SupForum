import { useEffect } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../reducer";
import { User } from "../../reducer/Data/users";
import { getUserData } from "../../services/apiService";

export const UserProfile = () => {
  const {
    state: { users },
    dispatch,
  } = useDataContext();
  const { userId } = useParams();

  useEffect(() => {
    getUserData(userId!, dispatch);
  });

  const user = users.find((user: User) => user._id === userId);

  return (
    <>
      <h3>UserProfile</h3>
      <div>
        <p>
          {user?.username} is the handle for {user?.firstName} {user?.lastName}.
          They reside in user.country
        </p>
      </div>
    </>
  );
};
