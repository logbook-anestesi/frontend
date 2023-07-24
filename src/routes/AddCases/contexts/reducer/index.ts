import { ACTION_TYPE, InitialState } from "../types";

const initialState: InitialState = {
  selectedOperation: [],
  selectedAnesthesia: [],
  date: "",
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
  }
}

export { initialState, reducer };
