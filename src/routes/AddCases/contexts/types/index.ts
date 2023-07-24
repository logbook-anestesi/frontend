interface Operation {
  category: string;
  operation: string;
}
interface InitialState {
  selectedOperation: Operation[];
  selectedAnesthesia: string[];
  date: string;
  dpjpUserId: string;
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

interface SetDPJP {
  type: "set_dpjp";
  data: {
    dpjpId: string;
  };
}

type ACTION_TYPE =
  | SetSelectedOperation
  | SetSelectedAnesthesia
  | SetDate
  | SetDPJP;

export type { ACTION_TYPE, InitialState };
