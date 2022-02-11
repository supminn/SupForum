import { createContext, useContext, useReducer } from "react";
import {
  state as authState,
  reducer as authReducer,
} from "../reducer/authReducer";

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
