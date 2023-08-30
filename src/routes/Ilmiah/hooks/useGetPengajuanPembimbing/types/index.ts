export interface PengajuanPembimbing {
  id: string;
  userId: string;
  type: string;
  title: string;
  scientificStatus: string;
  scientificLogs: ScientificLog[];
  approvals: Approval[];
}

export interface ScientificLog {
  created: string;
  changes: string;
}

export interface Approval {
  id: string;
  name: string;
  role: string;
}
