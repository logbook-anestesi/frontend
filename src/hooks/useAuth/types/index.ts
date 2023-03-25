interface RegisterDataInterface {
  email: string;
  name: string;
  password: string;
}

interface LoginDataInterface {
  email: string;
  password: string;
}

interface RegisterResponse {
  data: {
    email: string;
    name: string;
  };
  error: string[];
  status: number;
}

interface LoginResponse {
  status: number;
  error: string[];
  data: {
    token: string;
  };
}

export type {
  RegisterDataInterface,
  LoginDataInterface,
  LoginResponse,
  RegisterResponse,
};
