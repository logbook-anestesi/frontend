import React, { createContext, useContext, useReducer } from "react";
import type { Dispatch } from "react";
import { ACTION_TYPE, InitialState } from "./types";
import { reducer } from "./reducer";

const AddCasesContext = createContext<InitialState>({
  selectedOperation: [],
  selectedAnesthesia: [],
  date: "",
  dpjpUserId: "",
  isExam: false,
  caseType: "OK",
  operationTypeIds: [],
  anesthesiaTypeIds: [],
  selectedProcedure: [],
  procedureTypeIds: [],
  ageGroup: "",
  location: "",
  priority: "",
  patientAge: 0,
  patientRecordNumber: "",
  patientGender: "MALE",
  asaIsEmergency: false,
  asaTier: 0,
});

const AddCasesContextDispatch = createContext<Dispatch<ACTION_TYPE>>(() => {});

interface Props {
  children: React.ReactNode;
}

const AddCasesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    selectedOperation: [],
    selectedAnesthesia: [],
    date: "",
    dpjpUserId: "",
    isExam: false,
    caseType: "OK",
    operationTypeIds: [],
    anesthesiaTypeIds: [],
    selectedProcedure: [],
    procedureTypeIds: [],
    ageGroup: "",
    location: "",
    priority: "",
    patientAge: 0,
    patientRecordNumber: "",
    patientGender: "MALE",
    asaIsEmergency: false,
    asaTier: 0,
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
