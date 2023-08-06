export interface StaseAPI {
  statusCode: number;
  message: null;
  error: null;
  data: Stase[];
}

export interface Stase {
  id: string;
  created: string;
  leaderName: string;
  lastUpdated: string;
  stationName: string;
  leaderUserId: string;
  leaderStartDate: string;
}
