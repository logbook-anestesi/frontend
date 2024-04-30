export interface PayloadApproveExamPrep {
  examPreparationId: string;
  procedure: string;
  operationTypeIds?: string[];
  location: string;
  difficulty?: string;
  supervision: string;
  globalRating: string;
  feedbackGiven: boolean;
}
