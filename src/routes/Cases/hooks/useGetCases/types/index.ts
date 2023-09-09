export interface Case {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  userId: string;
  userName: string;
  userType: string;
  caseType: string;
  date: string;
  dpjpUserId: string;
  dpjpUserName: string;
  isExam: boolean;
  ageGroup: string;
  priority: string;
  location: string;
  patientAge: number;
  patientRecordNumber: string;
  patientGender: string;
  asaTier: number;
  asaIsEmergency: boolean;
  numberOfPatient: any;
  notes: string;
  asaTags: AsaTag[];
  tags: Tag[];
  operationTypes: OperationType[];
  anesthesiaTypes: AnesthesiaType[];
  procedureTypes: ProcedureType[];
  noraProcedureTypes: Nora[];
  supervisors: Supervisor[];
  supervisees: Supervisee[];
  diagnoses: Diagnoses[];
  painServiceTypes: PainServiceTypes[];
  painServiceProcedures: PainServiceProcedures[];
}

export interface AsaTag {
  tagId: string;
  tagName: string;
  caseId: string;
}

export interface Tag {
  tagId: string;
  tagName: string;
  caseId: string;
}

export interface OperationType {
  operationTypeId: string;
  operationTypeName: string;
  operationTypeTier: number;
  caseId: string;
}

export interface AnesthesiaType {
  anesthesiaTypeId: string;
  anesthesiaTypeName: string;
  caseId: string;
}

export interface ProcedureType {
  procedureTypeId: string;
  procedureTypeName: string;
  caseId: string;
}

export interface Supervisor {
  userName: string;
  caseId: string;
  userId: string;
}

export interface Supervisee {
  userName: string;
  caseId: string;
  userId: string;
}

export interface Nora {
  noraProcedureTypeName: string;
  caseId: string;
  noraProcedureTypeId: string;
}

export interface Diagnoses {
  diagnoseId: string;
  diagnoseName: string;
  caseId: string;
}

export interface PainServiceTypes {
  painServiceTypeId: string;
  painServiceTypeName: string;
  caseId: string;
}

export interface PainServiceProcedures {
  painServiceProcedureId: string;
  painServiceProcedureName: string;
  caseId: string;
}
