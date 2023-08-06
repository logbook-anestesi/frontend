interface Operation {
  category: string;
  operation: string;
}

interface Procedure {
  title: string;
  id: string;
}

interface InitialState {
  selectedOperation: Operation[];
  selectedAnesthesia: string[];
  selectedProcedure: Procedure[];
  selectedNoraProcedure: string[];
  selectedASATags: string[];
  selectedSupervisor: string[];
  date: string;
  dpjpUserId: string;
  isExam: boolean;
  caseType: string;
  operationTypeIds: string[];
  anesthesiaTypeIds: string[];
  procedureTypeIds: string[];
  supervisorIds: string[];
  asaTagIds: string[];
  noraProcedureTypeIds: string[];
  ageGroup: string;
  location: string;
  priority: string;
  patientAge: number;
  patientRecordNumber: string;
  patientGender: string;
  asaTier: number;
  asaIsEmergency: boolean;
  notes: string;
  additionalTags: string[];
  tagIds: string[];
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
    procedureId: string;
  };
}

interface SetNoraProcedureType {
  type: "set_nora_procedure_type";
  data: {
    noraProcedureType: string;
  };
}

interface SetProcedureTypeIds {
  type: "set_procedure_type_ids";
  data: {
    procedureId: string;
  };
}

interface SetNoraProcedureTypeIds {
  type: "set_nora_procedure_type_ids";
  data: {
    noraProcedureId: string;
  };
}

interface SetAgeGroup {
  type: "set_age_group";
  data: {
    ageGroup: string;
  };
}

interface SetLocation {
  type: "set_location";
  data: {
    location: string;
  };
}

interface SetPriority {
  type: "set_priority";
  data: {
    priority: string;
  };
}

interface SetPatientAge {
  type: "set_patient_age";
  data: {
    age: number;
  };
}

interface SetPatientRecordNumber {
  type: "set_patient_rm";
  data: {
    rm: string;
  };
}

interface SetPatientGender {
  type: "set_patient_gender";
  data: {
    gender: string;
  };
}

interface SetTier {
  type: "set_tier";
  data: {
    tier: number;
  };
}

interface SetAsIsEmergency {
  type: "set_emergency";
  data: {
    isEmergency: boolean;
  };
}

interface SetASATags {
  type: "set_asa_tags";
  data: {
    tag: string;
  };
}

interface SetASATagsId {
  type: "set_asa_tags_type_ids";
  data: {
    tagId: string;
  };
}

interface SetSupervisor {
  type: "set_supervisor";
  data: {
    supervisor: string;
  };
}

interface SetSupervisorIds {
  type: "set_supervisor_ids";
  data: {
    supervisorId: string;
  };
}

interface SetNote {
  type: "set_note";
  data: {
    note: string;
  };
}

interface SetAdditionalTags {
  type: "set_additional_tags";
  data: {
    tag: string;
  };
}

interface SetAdditionalTagIds {
  type: "set_additional_tag_ids";
  data: {
    tagId: string;
  };
}

interface ResetState {
  type: "reset_state";
  data: {};
}

interface RemoveProcedureType {
  type: "remove_procedure_type";
  data: {
    id: string;
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
  | SetNoraProcedureType
  | SetNoraProcedureTypeIds
  | SetAgeGroup
  | SetLocation
  | SetPriority
  | SetPatientAge
  | SetPatientRecordNumber
  | SetPatientGender
  | SetTier
  | SetAsIsEmergency
  | SetASATags
  | SetASATagsId
  | SetSupervisor
  | SetSupervisorIds
  | SetNote
  | SetAdditionalTags
  | SetAdditionalTagIds
  | ResetState
  | RemoveProcedureType;

export type { ACTION_TYPE, InitialState };
