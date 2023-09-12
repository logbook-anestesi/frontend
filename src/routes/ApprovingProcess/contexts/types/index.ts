interface InitialState {
  rate: string;
  notes: string;
}

interface SetRates {
  type: 'set_rate';
  data: {
    rate: string;
  };
}

interface SetNotes {
  type: 'set_notes';
  data: {
    notes: string;
  };
}

interface ResetState {
  type: 'reset';
}

type ACTION_TYPE = SetRates | SetNotes | ResetState;

export type { ACTION_TYPE, InitialState };
