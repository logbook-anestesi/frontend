export interface EditCasePayload {
  date: string;
  userId: string;
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
  diagnoseIds?: string[];
  painServiceTypeIds?: string[];
  painServiceProcedureIds?: string[];
}
