interface Operation {
  category: string;
  operation: string;
  id: string;
}

interface Procedure {
  title: string;
  id: string;
}

interface Anesthesia {
  title: string;
  id: string;
}

interface ASATags {
  title: string;
  id: string;
}

interface Supervisor {
  name: string;
  id: string;
}

interface Nora {
  title: string;
  id: string;
}

interface Diagnose {
  title: string;
  id: string;
}

interface PainServiceType {
  title: string;
  id: string;
}

interface PainServiceProcedure {
  title: string;
  id: string;
}

interface InitialState {
  selectedOperation: Operation[];
  selectedAnesthesia: Anesthesia[];
  selectedProcedure: Procedure[];
  selectedNoraProcedure: Nora[];
  selectedASATags: ASATags[];
  selectedSupervisor: Supervisor[];
  selectedDiagnose: Diagnose[];
  selectedTypePainService: PainServiceType[];
  selectedProcedurePainService: PainServiceProcedure[];
  date: string;
  dpjpUserId: string;
  dpjpUserName: string;
  isExam: boolean;
  caseType: string;
  operationTypeIds: string[];
  anesthesiaTypeIds: string[];
  procedureTypeIds: string[];
  supervisorIds: string[];
  diagnoseIds: string[];
  typePainServiceIds: string[];
  procedurePainServiceIds: string[];
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
  numberOfPatient: number;
  rate: string;
  rateNotes: string;
}

interface SetSelectedOperation {
  type: 'set_selected_operation';
  data: {
    category: string;
    operation: string;
    id: string;
  };
}

interface SetSelectedAnesthesia {
  type: 'set_selected_anesthesia';
  data: {
    title: string;
    id: string;
  };
}

interface SetDate {
  type: 'set_date';
  data: {
    date: string;
  };
}

interface SetDPJP {
  type: 'set_dpjp';
  data: {
    dpjpId: string;
    dpjpName?: string;
  };
}

interface SetIsExam {
  type: 'set_is_exam';
  data: {
    isExam: boolean;
  };
}

interface SetCaseType {
  type: 'set_case_type';
  data: {
    caseType: string;
  };
}

interface SetOperationTypeIds {
  type: 'set_operation_type_ids';
  data: {
    operationId: string;
  };
}

interface SetAnesthesiaTypeIds {
  type: 'set_anethesia_type_ids';
  data: {
    anesthesiaId: string;
  };
}

interface SetProcedureType {
  type: 'set_procedure_type';
  data: {
    procedureType: string;
    procedureId: string;
  };
}

interface SetNoraProcedureType {
  type: 'set_nora_procedure_type';
  data: {
    noraProcedureType: string;
    id: string;
  };
}

interface SetProcedureTypeIds {
  type: 'set_procedure_type_ids';
  data: {
    procedureId: string;
  };
}

interface SetNoraProcedureTypeIds {
  type: 'set_nora_procedure_type_ids';
  data: {
    noraProcedureId: string;
  };
}

interface SetAgeGroup {
  type: 'set_age_group';
  data: {
    ageGroup: string;
  };
}

interface SetLocation {
  type: 'set_location';
  data: {
    location: string;
  };
}

interface SetPriority {
  type: 'set_priority';
  data: {
    priority: string;
  };
}

interface SetPatientAge {
  type: 'set_patient_age';
  data: {
    age: number;
  };
}

interface SetPatientRecordNumber {
  type: 'set_patient_rm';
  data: {
    rm: string;
  };
}

interface SetPatientGender {
  type: 'set_patient_gender';
  data: {
    gender: string;
  };
}

interface SetTier {
  type: 'set_tier';
  data: {
    tier: number;
  };
}

interface SetAsIsEmergency {
  type: 'set_emergency';
  data: {
    isEmergency: boolean;
  };
}

interface SetASATags {
  type: 'set_asa_tags';
  data: {
    tag: string;
    id: string;
  };
}

interface SetASATagsId {
  type: 'set_asa_tags_type_ids';
  data: {
    tagId: string;
  };
}

interface SetSupervisor {
  type: 'set_supervisor';
  data: {
    supervisor: string;
    id: string;
  };
}

interface SetSupervisorIds {
  type: 'set_supervisor_ids';
  data: {
    supervisorId: string;
  };
}

interface SetNote {
  type: 'set_note';
  data: {
    note: string;
  };
}

interface SetAdditionalTags {
  type: 'set_additional_tags';
  data: {
    tag: string;
  };
}

interface SetAdditionalTagIds {
  type: 'set_additional_tag_ids';
  data: {
    tagId: string;
  };
}

interface ResetState {
  type: 'reset_state';
  data: Record<any, any>;
}

interface RemoveProcedureType {
  type: 'remove_procedure_type';
  data: {
    id: string;
  };
}

interface RemoveOperationType {
  type: 'remove_operation_type';
  data: {
    id: string;
  };
}

interface RemoveAnesthesiaType {
  type: 'remove_anesthesia_type';
  data: {
    id: string;
  };
}

interface RemoveAsaTags {
  type: 'remove_asa_tags';
  data: {
    id: string;
  };
}

interface RemoveSupervisor {
  type: 'remove_supervisor';
  data: {
    id: string;
  };
}

interface RemoveNoraProcedure {
  type: 'remove_nora_procedure';
  data: {
    id: string;
  };
}

interface SetAllASATags {
  type: 'set_asa_tags_all';
  data: {
    asaTags: ASATags[];
    tagIds: string[];
  };
}

interface SetDPJPAll {
  type: 'set_dpjp_all';
  data: {
    dpjpId: string;
    dpjpUsername: string;
  };
}

interface SetAllNoraProcedure {
  type: 'set_nora_procedure_type_all';
  data: {
    nora: Nora[];
    noraIds: string[];
  };
}

interface SetAllNoraProcedure {
  type: 'set_nora_procedure_type_all';
  data: {
    nora: Nora[];
    noraIds: string[];
  };
}

interface SetAllSelectedOperation {
  type: 'set_selected_operation_all';
  data: {
    operations: Operation[];
    operationIds: string[];
  };
}

interface SetAllAnesthesiaType {
  type: 'set_anesthesia_type_all';
  data: {
    anesthesia: Anesthesia[];
    anesthesiaIds: string[];
  };
}

interface SetAllAdditionalTag {
  type: 'set_additional_tags_all';
  data: {
    additionalTags: string[];
    additionalTagIds: string[];
  };
}

interface SetAllSupervisor {
  type: 'set_supervisor_all';
  data: {
    supervisors: Supervisor[];
    supervisorIds: string[];
  };
}

interface SetAllProcedureType {
  type: 'set_procedure_type_all';
  data: {
    procedures: Procedure[];
    procedureIds: string[];
  };
}

interface SetAllDiagnose {
  type: 'set_diagnose_type_all';
  data: {
    diagnoses: Diagnose[];
    diagnoseIds: string[];
  };
}

interface SetDiagnose {
  type: 'set_diagnose';
  data: {
    diagnoseName: string;
    diagnoseId: string;
  };
}

interface SetDiagnoseIds {
  type: 'set_diagnose_ids';
  data: {
    diagnoseId: string;
  };
}

interface RemoveDiagnose {
  type: 'remove_diagnose';
  data: {
    id: string;
  };
}

interface SetNumberOfPatient {
  type: 'set_number_patient';
  data: {
    numberOfPatient: number;
  };
}

interface SetAllTypePainService {
  type: 'set_type_pain_service_all';
  data: {
    painServiceTypes: PainServiceType[];
    painServiceTypeIds: string[];
  };
}

interface SetAllProcedurePainService {
  type: 'set_procedure_pain_service_all';
  data: {
    painServiceProcedures: PainServiceProcedure[];
    painServiceProcedureIds: string[];
  };
}

interface SetTypePainService {
  type: 'set_type_pain_service';
  data: {
    typePainName: string;
    typePainId: string;
  };
}

interface SetTypePainServiceIds {
  type: 'set_type_pain_ids';
  data: {
    typePainId: string;
  };
}

interface RemoveTypePainService {
  type: 'remove_type_pain_service';
  data: {
    id: string;
  };
}

interface SetProcedurePainService {
  type: 'set_procedure_pain_service';
  data: {
    procedurePainName: string;
    procedurePainId: string;
  };
}

interface SetProcedurePainServiceIds {
  type: 'set_procedure_pain_ids';
  data: {
    procedurePainId: string;
  };
}

interface RemoveProcedurePainService {
  type: 'remove_procedure_pain_service';
  data: {
    id: string;
  };
}

interface SetRate {
  type: 'set_rate';
  data: {
    rate: string;
  };
}

interface SetRateNotes {
  type: 'set_rate_notes';
  data: {
    rateNotes: string;
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
  | RemoveProcedureType
  | RemoveOperationType
  | RemoveAnesthesiaType
  | RemoveAsaTags
  | RemoveSupervisor
  | RemoveNoraProcedure
  | SetAllASATags
  | SetDPJPAll
  | SetAllNoraProcedure
  | SetAllSelectedOperation
  | SetAllAnesthesiaType
  | SetAllAdditionalTag
  | SetAllSupervisor
  | SetAllProcedureType
  | SetDiagnose
  | SetDiagnoseIds
  | RemoveDiagnose
  | SetAllDiagnose
  | SetNumberOfPatient
  | SetAllTypePainService
  | SetAllProcedurePainService
  | SetTypePainService
  | SetTypePainServiceIds
  | RemoveTypePainService
  | SetProcedurePainService
  | SetProcedurePainServiceIds
  | RemoveProcedurePainService
  | SetRate
  | SetRateNotes;

export type { ACTION_TYPE, InitialState };
