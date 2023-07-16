export interface StaseAPI {
  statusCode: number;
  message: null;
  error: null;
  data: Stase[];
}

export interface Stase {
  id: string;
  created: Date;
  createBy: string;
  lastUpdated: Date;
  lastUpdateBy: string;
  stationName: string;
  leaderUserName: string;
  leaderStartDate: Date;
}
