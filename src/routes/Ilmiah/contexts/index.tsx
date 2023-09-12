import { Dispatch, createContext, useContext, useReducer } from 'react';
import { ACTION_TYPE, InitialState } from './types';
import { initialState, reducer } from './reducer';

const IlmiahContext = createContext<InitialState>({
  pengajuanKelulusan: {
    id: '',
    approvals: [],
    type: '',
  },
});

const IlmiahContextDispatch = createContext<Dispatch<ACTION_TYPE>>(() => {});

interface Props {
  children: React.ReactNode;
}

const IlmiahProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <IlmiahContextDispatch.Provider value={dispatch}>
      <IlmiahContext.Provider value={{ ...state }}>
        {children}
      </IlmiahContext.Provider>
    </IlmiahContextDispatch.Provider>
  );
};

export const useIlmiahContext = () => useContext(IlmiahContext);
export const useIlmiahDispatch = () => useContext(IlmiahContextDispatch);

export default IlmiahProvider;
