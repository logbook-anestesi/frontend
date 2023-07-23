interface Operation {
  category: string;
  operation: string;
}
interface InitialState {
  selectedOperation: Operation[];
  selectedAnesthesia: string[];
}

interface SetSelectedOperation {
  type: "set_selected_operation";
  data: {
    operation: Operation;
  };
}

interface SetSelectedAnesthesia {
  type: "set_selected_anesthesia";
  data: {
    anesthesia: string;
  };
}

type ACTION_TYPE = SetSelectedOperation | SetSelectedAnesthesia;

export type { ACTION_TYPE, InitialState };
