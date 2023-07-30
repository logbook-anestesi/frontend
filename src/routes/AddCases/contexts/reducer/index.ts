import { ACTION_TYPE, InitialState } from "../types";

const initialState: InitialState = {
  selectedOperation: [],
  selectedAnesthesia: [],
  selectedASATags: [],
  selectedSupervisor: [],
  date: "",
  dpjpUserId: "",
  isExam: false,
  caseType: "OK",
  operationTypeIds: [],
  anesthesiaTypeIds: [],
  selectedProcedure: [],
  procedureTypeIds: [],
  asaTagsIds: [],
  ageGroup: "",
  location: "",
  priority: "",
  patientAge: 0,
  patientRecordNumber: "",
  patientGender: "MALE",
  asaIsEmergency: false,
  asaTier: 0,
};

function reducer(state: InitialState, action: ACTION_TYPE): InitialState {
  switch (action.type) {
    case "set_selected_operation": {
      return {
        ...state,
        selectedOperation: [...state.selectedOperation, action.data.operation],
      };
    }
    case "set_selected_anesthesia": {
      return {
        ...state,
        selectedAnesthesia: [
          ...state.selectedAnesthesia,
          action.data.anesthesia,
        ],
      };
    }
    case "set_date": {
      return {
        ...state,
        date: action.data.date,
      };
    }
    case "set_dpjp": {
      return {
        ...state,
        dpjpUserId: action.data.dpjpId,
      };
    }
    case "set_is_exam": {
      return {
        ...state,
        isExam: action.data.isExam,
      };
    }
    case "set_case_type": {
      return {
        ...state,
        caseType: action.data.caseType,
      };
    }
    case "set_operation_type_ids": {
      return {
        ...state,
        operationTypeIds: [...state.operationTypeIds, action.data.operationId],
      };
    }
    case "set_anethesia_type_ids": {
      return {
        ...state,
        anesthesiaTypeIds: [
          ...state.anesthesiaTypeIds,
          action.data.anesthesiaId,
        ],
      };
    }
    case "set_procedure_type": {
      return {
        ...state,
        selectedProcedure: [
          ...state.selectedProcedure,
          action.data.procedureType,
        ],
      };
    }
    case "set_procedure_type_ids": {
      return {
        ...state,
        procedureTypeIds: [...state.procedureTypeIds, action.data.procedureId],
      };
    }
    case "set_age_group": {
      return {
        ...state,
        ageGroup: action.data.ageGroup,
      };
    }
    case "set_location": {
      return {
        ...state,
        location: action.data.location,
      };
    }
    case "set_priority": {
      return {
        ...state,
        priority: action.data.priority,
      };
    }
    case "set_patient_age": {
      return {
        ...state,
        patientAge: action.data.age,
      };
    }
    case "set_patient_rm": {
      return {
        ...state,
        patientRecordNumber: action.data.rm,
      };
    }
    case "set_patient_gender": {
      return {
        ...state,
        patientGender: action.data.gender,
      };
    }
    case "set_emergency": {
      return {
        ...state,
        asaIsEmergency: action.data.isEmergency,
      };
    }
    case "set_tier": {
      return {
        ...state,
        asaTier: action.data.tier,
      };
    }
    case "set_asa_tags": {
      return {
        ...state,
        selectedASATags: [...state.selectedASATags, action.data.tag],
      };
    }
    case "set_asa_tags_type_ids": {
      return {
        ...state,
        asaTagsIds: [...state.asaTagsIds, action.data.tagId],
      };
    }
    case "set_supervisor": {
      return {
        ...state,
        selectedSupervisor: [
          ...state.selectedSupervisor,
          action.data.supervisor,
        ],
      };
    }
  }
}

export { initialState, reducer };
