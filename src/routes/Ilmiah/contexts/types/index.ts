interface InitialState {
  pengajuanKelulusan: {
    id: string;
    approvals: string[];
    type: string;
  };
}

interface SetPengajuanKelulusanData {
  type: 'set_pengajuan_kelulusan';
  data: {
    id: string;
    approvals: string[];
    type: string;
  };
}

type ACTION_TYPE = SetPengajuanKelulusanData;

export type { ACTION_TYPE, InitialState };
