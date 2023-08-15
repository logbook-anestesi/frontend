interface InitialState {
  rate: string;
  notes: string;
}

interface SetRates {
  type: "set_rate";
  data: {
    rate: string;
  };
}

interface SetNotes {
  type: "set_notes";
  data: {
    notes: string;
  };
}

type ACTION_TYPE = SetRates | SetNotes;

export type { ACTION_TYPE, InitialState };
