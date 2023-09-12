import React, { createContext, useContext, useReducer } from 'react';
import type { Dispatch } from 'react';
import { ACTION_TYPE, InitialState } from './types';
import { initialState, reducer } from './reducer';

const AddCasesContext = createContext<InitialState>({
  selectedOperation: [],
  selectedAnesthesia: [],
  selectedASATags: [],
  selectedSupervisor: [],
  selectedNoraProcedure: [],
  selectedDiagnose: [],
  selectedTypePainService: [],
  selectedProcedurePainService: [],
  date: new Date().toJSON(),
  dpjpUserId: '',
  isExam: false,
  caseType: 'OK',
  operationTypeIds: [],
  anesthesiaTypeIds: [],
  selectedProcedure: [],
  procedureTypeIds: [],
  supervisorIds: [],
  diagnoseIds: [],
  typePainServiceIds: [],
  asaTagIds: [],
  noraProcedureTypeIds: [],
  procedurePainServiceIds: [],
  ageGroup: '',
  location: '',
  priority: '',
  patientAge: 0,
  patientRecordNumber: '',
  patientGender: 'MALE',
  asaIsEmergency: false,
  asaTier: 0,
  notes: '',
  additionalTags: [],
  tagIds: [],
  isShowLocationLainnya: false,
  numberOfPatient: 0,
});

const AddCasesContextDispatch = createContext<Dispatch<ACTION_TYPE>>(() => {});

interface Props {
  children: React.ReactNode;
}

const AddCasesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
