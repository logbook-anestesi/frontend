import { ACTION_TYPE, InitialState } from "../types";

const initialState: InitialState = {
  notes: "",
  rate: "",
};

function reducer(state: InitialState, action: ACTION_TYPE): InitialState {
  switch (action.type) {
    case "set_notes": {
      return {
        ...state,
        notes: action.data.notes,
      };
    }
    case "set_rate": {
      return {
        ...state,
        rate: action.data.rate,
      };
    }
    case "reset": {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}

export { initialState, reducer };
