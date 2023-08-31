export interface DetailRiwayatKelulusan {
  id: string;
  scientificGraduationStatus: string;
  scientificId: string;
  scientificType: string;
  scientificTitle: string;
  userId: string;
  scientificDocumentLink: string;
  scientificLogs: ScientificLog[];
  approvals: Approval[];
  discussionHistories: any;
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
