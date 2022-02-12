import { createContext, useContext, useReducer } from "react";
import {
  state as authState,
  reducer as authReducer,
} from "../reducer/authReducer";
import { AuthContextType } from "./context.types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
