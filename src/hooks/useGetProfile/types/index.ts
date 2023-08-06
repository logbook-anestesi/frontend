export interface Profile {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  email: string;
  name: string;
  phoneNumber: string;
  imageUrl: any;
  npm: string;
  role: string;
  joinYear: number;
  joinTerm: number;
  stationName: string;
}

export interface DecodedJwt {
  exp: number;
  iat: number;
  id: string;
  role: string;
}
