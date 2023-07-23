import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";

interface Operation {
  category: string;
  operation: string;
}
interface InitialState {
  selectedOperation: Operation[];
  selectedAnesthesia: AnesthesiaType[];
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
    anesthesia: AnesthesiaType;
  };
}

type ACTION_TYPE = SetSelectedOperation | SetSelectedAnesthesia;

export type { ACTION_TYPE, InitialState };
