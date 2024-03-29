import { createContext, useContext, useReducer } from "react";
import {
  state as dataState,
  reducer as dataReducer,
} from "../reducer/dataReducer";
import { DataContextType } from "./context.types";

const DataContext = createContext<DataContextType>({} as DataContextType);

export const useDataContext = () => useContext(DataContext);

export const DataProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, dataState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
