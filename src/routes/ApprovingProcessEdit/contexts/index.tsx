import React, { createContext, useContext, useReducer } from 'react';
import type { Dispatch } from 'react';
import { ACTION_TYPE, InitialState } from './types';
import { initialState, reducer } from './reducer';

const ApprovalEditContext = createContext<InitialState>({
  selectedOperation: [],
  selectedAnesthesia: [],
  selectedASATags: [],
  selectedSupervisor: [],
  selectedNoraProcedure: [],
  selectedDiagnose: [],
  selectedProcedurePainService: [],
  selectedTypePainService: [],
  date: new Date().toJSON(),
  dpjpUserId: '',
  isExam: false,
  caseType: 'OK',
  operationTypeIds: [],
  anesthesiaTypeIds: [],
  selectedProcedure: [],
  procedureTypeIds: [],
  supervisorIds: [],
  asaTagIds: [],
  diagnoseIds: [],
  procedurePainServiceIds: [],
  typePainServiceIds: [],
  noraProcedureTypeIds: [],
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
  dpjpUserName: '',
  numberOfPatient: 0,
  rate: '',
  rateNotes: '',
});

const ApprovalEditContextDispatch = createContext<Dispatch<ACTION_TYPE>>(
  () => {},
);

interface Props {
  children: React.ReactNode;
}

const ApprovalEditProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ApprovalEditContextDispatch.Provider value={dispatch}>
      <ApprovalEditContext.Provider value={{ ...state }}>
        {children}
      </ApprovalEditContext.Provider>
    </ApprovalEditContextDispatch.Provider>
  );
};

export const useApprovalEditContext = () => useContext(ApprovalEditContext);
export const useApprovalEditDispatch = () =>
  useContext(ApprovalEditContextDispatch);

export default ApprovalEditProvider;
