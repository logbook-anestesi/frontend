export interface PayloadAddApproval {
  caseId?: string;
  status?: string;
  rate?: string;
  notes?: string;
  caseEditRequest?: CaseEditRequest;
}

export interface CaseEditRequest {
  date?: string;
  userId?: string;
  isExam?: boolean;
  ageGroup?: string;
  priority?: string;
  location?: string;
  patientAge?: number;
  patientRecordNumber?: string;
  patientGender?: string;
  asaTier?: number;
  asaIsEmergency?: boolean;
  numberOfPatient?: number;
  notes?: string;
  asaTagIds?: string[];
  tagIds?: string[];
  operationTypeIds?: string[];
  anesthesiaTypeIds?: string[];
  procedureTypeIds?: string[];
  noraProcedureTypeIds?: string[];
  superviseeIds?: string[];
}
