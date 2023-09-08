export interface CreateCasePayload {
  caseType?: string;
  date?: string;
  dpjpUserId?: string;
  isExam?: boolean;
  ageGroup?: string;
  priority?: string;
  location?: string;
  patientAge?: number;
  patientRecordNumber?: string;
  patientGender?: string;
  asaTier?: number;
  asaIsEmergency?: boolean;
  notes?: string;
  asaTagIds?: string[];
  tagIds?: string[];
  operationTypeIds?: string[];
  anesthesiaTypeIds?: string[];
  procedureTypeIds?: string[];
  noraProcedureTypeIds?: string[];
  supervisorIds?: string[];
  diagnoseIds?: string[];
  numberOfPatient?: number;
  painServiceTypeIds?: string[];
  painServiceProcedureIds?: string[];
}
