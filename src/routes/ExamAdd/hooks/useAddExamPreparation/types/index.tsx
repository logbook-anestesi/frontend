export interface PayloadExamPreparation {
  type: string;
  preparationDate: string;
  assessorUserId: string;
  procedure?: string;
  selfEvaluation: string;
  isGoingWell: boolean;
  reason: string;
  selfReflection: string;
  operationTypeIds?: string[];
  additionalTagIds?: string[];
}
