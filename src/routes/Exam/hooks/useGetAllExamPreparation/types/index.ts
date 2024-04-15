export interface ExamPreparation {
  id: string;
  createdDate: string;
  type: string;
  procedure: string;
  reason: string;
  userName: string;
  assessorName: string;
  approvalLocation: any;
  approvalDifficulty: any;
  approvalSupervision: any;
  approvalStatus: string;
  preparationDate: string;
  assessorUserId: string;
  userId: string;
  selfEvaluation: string;
  isGoingWell: boolean;
  selfReflection: string;
  approvalConfirmDate: any;
  approvalGlobalRating: any;
  approvalFeedbackGiven: any;
  operationTypes: any[];
  additionalTags: any[];
}
