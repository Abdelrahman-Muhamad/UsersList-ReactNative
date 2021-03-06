import { createContext, useReducer } from "react";
// import { usersReducer } from "../reducers/usersReducer";
import rootReducer from '../reducers'
export const usersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    users: {
      list: [],
      details: null,
    }
  });
  return (
    <usersContext.Provider value={{ state, dispatch }}>
      {children}
    </usersContext.Provider>
  );
};
