interface Operation {
  category: string;
  operation: string;
}
interface InitialState {
  selectedOperation: Operation[];
  selectedAnesthesia: string[];
  date: string;
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

interface SetDate {
  type: "set_date";
  data: {
    date: string;
  };
}

type ACTION_TYPE = SetSelectedOperation | SetSelectedAnesthesia | SetDate;

export type { ACTION_TYPE, InitialState };
