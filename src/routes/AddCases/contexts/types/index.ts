interface Operation {
  category: string;
  operation: string;
}

interface InitialState {
  selectedOperation: Operation[];
  selectedAnesthesia: string[];
  selectedProcedure: string[];
  date: string;
  dpjpUserId: string;
  isExam: boolean;
  caseType: string;
  operationTypeIds: string[];
  anesthesiaTypeIds: string[];
  procedureTypeIds: string[];
  ageGroup: string;
}

interface SetSelectedOperation {
  type: "set_selected_operation";
  data: {
    operation: Operation;
  };
}

interface SetSelectedAnesthesia {
  type: "set_selected_anesthesia";
  data: {
    anesthesia: string;
  };
}

interface SetDate {
  type: "set_date";
  data: {
    date: string;
  };
}

interface SetDPJP {
  type: "set_dpjp";
  data: {
    dpjpId: string;
  };
}

interface SetIsExam {
  type: "set_is_exam";
  data: {
    isExam: boolean;
  };
}

interface SetCaseType {
  type: "set_case_type";
  data: {
    caseType: string;
  };
}

interface SetOperationTypeIds {
  type: "set_operation_type_ids";
  data: {
    operationId: string;
  };
}

interface SetAnesthesiaTypeIds {
  type: "set_anethesia_type_ids";
  data: {
    anesthesiaId: string;
  };
}

interface SetProcedureType {
  type: "set_procedure_type";
  data: {
    procedureType: string;
  };
}

interface SetProcedureTypeIds {
  type: "set_procedure_type_ids";
  data: {
    procedureId: string;
  };
}

interface SetAgeGroup {
  type: "set_age_group";
  data: {
    ageGroup: string;
  };
}

type ACTION_TYPE =
  | SetSelectedOperation
  | SetSelectedAnesthesia
  | SetDate
  | SetDPJP
  | SetIsExam
  | SetCaseType
  | SetOperationTypeIds
  | SetAnesthesiaTypeIds
  | SetProcedureType
  | SetProcedureTypeIds
  | SetAgeGroup;

export type { ACTION_TYPE, InitialState };
