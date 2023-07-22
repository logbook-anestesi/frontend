interface InitialState {
  selectedOperation: string[];
}

interface SetSelectedOperation {
  type: "set_selected_operation";
  data: {
    operation: string;
  };
}

type ACTION_TYPE = SetSelectedOperation;

export type { ACTION_TYPE, InitialState };
