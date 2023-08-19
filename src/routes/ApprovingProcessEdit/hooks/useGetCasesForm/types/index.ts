export interface CasesForm {
  tags: Tag[];
  operationTypes: OperationType[];
  anesthesiaTypes: AnesthesiaType[];
  procedureTypes: ProcedureType[];
  noraProcedureTypes: NoraProcedureType[];
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
