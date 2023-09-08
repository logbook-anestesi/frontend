import { ACTION_TYPE, InitialState } from "../types";

const initialState: InitialState = {
  selectedOperation: [],
  selectedAnesthesia: [],
  selectedASATags: [],
  selectedSupervisor: [],
  selectedDiagnose: [],
  date: new Date().toJSON(),
  dpjpUserId: "",
  isExam: false,
  caseType: "OK",
  operationTypeIds: [],
  anesthesiaTypeIds: [],
  selectedProcedure: [],
  procedureTypeIds: [],
  selectedTypePainService: [],
  selectedProcedurePainService: [],
  supervisorIds: [],
  diagnoseIds: [],
  asaTagIds: [],
  typePainServiceIds: [],
  selectedNoraProcedure: [],
  noraProcedureTypeIds: [],
  procedurePainServiceIds: [],
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
  isShowLocationLainnya: false,
  numberOfPatient: 0,
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
    case "set_diagnose": {
      return {
        ...state,
        selectedDiagnose: [
          ...state.selectedDiagnose,
          {
            title: action.data.diagnoseName,
            id: action.data.diagnoseId,
          },
        ],
      };
    }
    case "set_diagnose_ids": {
      return {
        ...state,
        diagnoseIds: [...state.diagnoseIds, action.data.diagnoseId],
      };
    }
    case "remove_diagnose": {
      return {
        ...state,
        selectedDiagnose: state.selectedDiagnose.filter(
          (diagnose) => diagnose.id !== action.data.id
        ),
        diagnoseIds: state.diagnoseIds.filter((id) => id !== action.data.id),
      };
    }
    case "set_show_location_lainnya": {
      return {
        ...state,
        isShowLocationLainnya: action.data.isShow,
      };
    }
    case "set_number_patient": {
      return {
        ...state,
        numberOfPatient: action.data.numberPatient,
      };
    }
    case "set_type_pain_service": {
      return {
        ...state,
        selectedTypePainService: [
          ...state.selectedTypePainService,
          {
            title: action.data.typePainName,
            id: action.data.typePainId,
          },
        ],
      };
    }
    case "set_type_pain_ids": {
      return {
        ...state,
        typePainServiceIds: [
          ...state.typePainServiceIds,
          action.data.typePainId,
        ],
      };
    }
    case "remove_type_pain_service": {
      return {
        ...state,
        selectedTypePainService: state.selectedTypePainService.filter(
          (typePain) => typePain.id !== action.data.id
        ),
        typePainServiceIds: state.typePainServiceIds.filter(
          (id) => id !== action.data.id
        ),
      };
    }
    case "set_procedure_pain_service": {
      return {
        ...state,
        selectedProcedurePainService: [
          ...state.selectedProcedurePainService,
          {
            title: action.data.procedurePainName,
            id: action.data.procedurePainId,
          },
        ],
      };
    }
    case "set_procedure_pain_ids": {
      return {
        ...state,
        procedurePainServiceIds: [
          ...state.procedurePainServiceIds,
          action.data.procedurePainId,
        ],
      };
    }
    case "remove_procedure_pain_service": {
      return {
        ...state,
        selectedProcedurePainService: state.selectedProcedurePainService.filter(
          (procedurePain) => procedurePain.id !== action.data.id
        ),
        procedurePainServiceIds: state.procedurePainServiceIds.filter(
          (id) => id !== action.data.id
        ),
      };
    }
  }
}

export { initialState, reducer };
