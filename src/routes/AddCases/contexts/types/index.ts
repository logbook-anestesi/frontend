interface Operation {
  category: string;
  operation: string;
}
interface InitialState {
  selectedOperation: Operation[];
}

interface SetSelectedOperation {
  type: "set_selected_operation";
  data: {
    operation: Operation;
  };
}

type ACTION_TYPE = SetSelectedOperation;

export type { ACTION_TYPE, InitialState };
