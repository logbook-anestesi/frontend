export interface CasesForm {
  asaTags: Tag[];
  tags: Tag[];
  operationTypes: OperationType[];
  anesthesiaTypes: AnesthesiaType[];
  procedureTypes: ProcedureType[];
  noraProcedureTypes: NoraProcedureType[];
  diagnoses: Diagnose[];
  painServiceTypes: PainServiceType[];
  painServiceProcedures: PainServiceProcedure[];
}

export interface Tag {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
}

export interface OperationType {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
  tier: number;
  children: OperationCategory[];
}

export interface OperationCategory {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
  tier: number;
}

export interface AnesthesiaType {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
}

export interface ProcedureType {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
}

export interface NoraProcedureType {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
}

export interface Diagnose {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
}

export interface PainServiceType {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
}

export interface PainServiceProcedure {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  name: string;
}
