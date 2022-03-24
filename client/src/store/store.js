import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  theme: '',
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>{children}</ThemeContext.Provider>
  );
};

export const ThemeContext = createContext(initialState);
export default Store;
