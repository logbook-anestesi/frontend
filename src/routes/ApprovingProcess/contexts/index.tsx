import React, { createContext, useContext, useReducer } from 'react';
import type { Dispatch } from 'react';
import { ACTION_TYPE, InitialState } from './types';
import { reducer } from './reducer';

const ApprovingProcessContext = createContext<InitialState>({
  notes: '',
  rate: '',
});

const ApprovingProcessDispatch = createContext<Dispatch<ACTION_TYPE>>(() => {});

interface Props {
  children: React.ReactNode;
}

const ApprovingProcessProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    notes: '',
    rate: '',
  });

  return (
    <ApprovingProcessDispatch.Provider value={dispatch}>
      <ApprovingProcessContext.Provider value={{ ...state }}>
        {children}
      </ApprovingProcessContext.Provider>
    </ApprovingProcessDispatch.Provider>
  );
};

export const useApprovingProcess = () => useContext(ApprovingProcessContext);
export const useApprovingProcessDispatch = () =>
  useContext(ApprovingProcessDispatch);

export default ApprovingProcessProvider;
