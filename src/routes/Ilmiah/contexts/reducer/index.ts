import { ACTION_TYPE, InitialState } from "../types";

const initialState: InitialState = {
  pengajuanKelulusan: {
    id: "",
    approvals: [],
  },
};

function reducer(state: InitialState, action: ACTION_TYPE): InitialState {
  switch (action.type) {
    case "set_pengajuan_kelulusan": {
      return {
        ...state,
        pengajuanKelulusan: {
          id: action.data.id,
          approvals: action.data.approvals,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export { initialState, reducer };
