import React, { createContext, useContext, useReducer } from "react";
import type { Dispatch } from "react";
import { ACTION_TYPE } from "./types";
import { reducer } from "./reducer";

const AddCasesContext = createContext({
  selectedOperation: [""],
});

const AddCasesContextDispatch = createContext<Dispatch<ACTION_TYPE>>(() => {});

interface Props {
  children: React.ReactNode;
}

const AddCasesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    selectedOperation: [],
  });

  return (
    <AddCasesContextDispatch.Provider value={dispatch}>
      <AddCasesContext.Provider value={{ ...state }}>
        {children}
      </AddCasesContext.Provider>
    </AddCasesContextDispatch.Provider>
  );
};

export const useAddCasesContext = () => useContext(AddCasesContext);
export const useAddCasesDispatch = () => useContext(AddCasesContextDispatch);

export default AddCasesProvider;
