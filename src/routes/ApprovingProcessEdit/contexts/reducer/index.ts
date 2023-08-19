import { ACTION_TYPE, InitialState } from "../types";

const initialState: InitialState = {
  selectedOperation: [],
  selectedAnesthesia: [],
  selectedASATags: [],
  selectedSupervisor: [],
  date: new Date().toJSON(),
  dpjpUserId: "",
  isExam: false,
  caseType: "OK",
  operationTypeIds: [],
  anesthesiaTypeIds: [],
  selectedProcedure: [],
  procedureTypeIds: [],
  supervisorIds: [],
  asaTagIds: [],
  selectedNoraProcedure: [],
  noraProcedureTypeIds: [],
  ageGroup: "",
  location: "",
  priority: "",
  patientAge: 0,
  patientRecordNumber: "",
  patientGender: "MALE",
  asaIsEmergency: false,
  asaTier: 0,
  notes: "",
  additionalTags: [],
  tagIds: [],
  dpjpUserName: "",
};

function reducer(state: InitialState, action: ACTION_TYPE): InitialState {
  switch (action.type) {
    case "set_selected_operation": {
      return {
        ...state,
        selectedOperation: [
          ...state.selectedOperation,
          {
            category: action.data.category,
            id: action.data.id,
            operation: action.data.operation,
          },
        ],
      };
    }
    case "set_selected_anesthesia": {
      return {
        ...state,
        selectedAnesthesia: [
          ...state.selectedAnesthesia,
          {
            title: action.data.title,
            id: action.data.id,
          },
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
        dpjpUserName: action.data.dpjpName || "",
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
          {
            title: action.data.procedureType,
            id: action.data.procedureId,
          },
        ],
      };
    }
    case "set_procedure_type_ids": {
      return {
        ...state,
        procedureTypeIds: [...state.procedureTypeIds, action.data.procedureId],
      };
    }

    case "set_nora_procedure_type": {
      return {
        ...state,
        selectedNoraProcedure: [
          ...state.selectedNoraProcedure,
          {
            id: action.data.id,
            title: action.data.noraProcedureType,
          },
        ],
      };
    }
    case "set_nora_procedure_type_ids": {
      return {
        ...state,
        noraProcedureTypeIds: [
          ...state.noraProcedureTypeIds,
          action.data.noraProcedureId,
        ],
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
        selectedASATags: [
          ...state.selectedASATags,
          {
            id: action.data.id,
            title: action.data.tag,
          },
        ],
      };
    }
    case "set_asa_tags_type_ids": {
      return {
        ...state,
        asaTagIds: [...state.asaTagIds, action.data.tagId],
      };
    }
    case "set_supervisor": {
      return {
        ...state,
        selectedSupervisor: [
          ...state.selectedSupervisor,
          {
            name: action.data.supervisor,
            id: action.data.id,
          },
        ],
      };
    }
    case "set_supervisor_ids": {
      return {
        ...state,
        supervisorIds: [...state.supervisorIds, action.data.supervisorId],
      };
    }
    case "set_note": {
      return {
        ...state,
        notes: action.data.note,
      };
    }
    case "set_additional_tags": {
      return {
        ...state,
        additionalTags: [...state.additionalTags, action.data.tag],
      };
    }
    case "set_additional_tag_ids": {
      return {
        ...state,
        tagIds: [...state.tagIds, action.data.tagId],
      };
    }
    case "reset_state": {
      return {
        ...initialState,
      };
    }
    case "remove_procedure_type": {
      return {
        ...state,
        selectedProcedure: state.selectedProcedure.filter(
          (procedure) => procedure.id !== action.data.id
        ),
        procedureTypeIds: state.procedureTypeIds.filter(
          (id) => id !== action.data.id
        ),
      };
    }
    case "remove_operation_type": {
      return {
        ...state,
        selectedOperation: state.selectedOperation.filter(
          (operation) => operation.id !== action.data.id
        ),
        operationTypeIds: state.operationTypeIds.filter(
          (id) => id !== action.data.id
        ),
      };
    }
    case "remove_anesthesia_type": {
      return {
        ...state,
        selectedAnesthesia: state.selectedAnesthesia.filter(
          (anesthesia) => anesthesia.id !== action.data.id
        ),
        anesthesiaTypeIds: state.anesthesiaTypeIds.filter(
          (id) => id !== action.data.id
        ),
      };
    }
    case "remove_asa_tags": {
      return {
        ...state,
        selectedASATags: state.selectedASATags.filter(
          (asaTags) => asaTags.id !== action.data.id
        ),
        asaTagIds: state.asaTagIds.filter((id) => id !== action.data.id),
      };
    }
    case "remove_supervisor": {
      return {
        ...state,
        selectedSupervisor: state.selectedSupervisor.filter(
          (supervisor) => supervisor.id !== action.data.id
        ),
        supervisorIds: state.supervisorIds.filter(
          (id) => id !== action.data.id
        ),
      };
    }
    case "remove_nora_procedure": {
      return {
        ...state,
        selectedNoraProcedure: state.selectedNoraProcedure.filter(
          (noraProcedure) => noraProcedure.id !== action.data.id
        ),
        noraProcedureTypeIds: state.noraProcedureTypeIds.filter(
          (id) => id !== action.data.id
        ),
      };
    }
    case "set_asa_tags_all": {
      return {
        ...state,
        selectedASATags: action.data.asaTags,
        asaTagIds: action.data.tagIds,
      };
    }
    case "set_dpjp_all": {
      return {
        ...state,
        dpjpUserId: action.data.dpjpId,
        dpjpUserName: action.data.dpjpUsername,
      };
    }
    case "set_nora_procedure_type_all": {
      return {
        ...state,
        selectedNoraProcedure: action.data.nora,
        noraProcedureTypeIds: action.data.noraIds,
      };
    }
    case "set_selected_operation_all": {
      return {
        ...state,
        selectedOperation: action.data.operations,
        operationTypeIds: action.data.operationIds,
      };
    }
    case "set_anesthesia_type_all": {
      return {
        ...state,
        selectedAnesthesia: action.data.anesthesia,
        anesthesiaTypeIds: action.data.anesthesiaIds,
      };
    }
    case "set_additional_tags_all": {
      return {
        ...state,
        tagIds: action.data.additionalTags,
        additionalTags: action.data.additionalTagIds,
      };
    }
    case "set_supervisor_all": {
      return {
        ...state,
        selectedSupervisor: action.data.supervisors,
        supervisorIds: action.data.supervisorIds,
      };
    }
  }
}

export { initialState, reducer };
