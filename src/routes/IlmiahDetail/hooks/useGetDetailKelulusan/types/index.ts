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
  discussionHistories: Diskusi[];
}

export interface ScientificLog {
  created: string;
  changes: string;
}

export interface Approval {
  id: string;
  name: string;
  role: string;
  status: string;
}

export interface Diskusi {
  id: string;
  title: string;
  description: string;
  status: string;
  approvalUserName: string;
  userId: string;
  scientificGraduationId: string;
  discussionDate: string;
  scientificLogs: ScientificLog[];
}

export interface ScientificLog {
  created: string;
  changes: string;
}
