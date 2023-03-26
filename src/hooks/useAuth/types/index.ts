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

interface UserDataInterface {
  email: string;
  id: string;
  image_url: string;
  name: string;
  phone_number: string;
}

interface AuthStateInterface {
  isAuthenticated: boolean;
}

export type {
  RegisterDataInterface,
  LoginDataInterface,
  LoginResponse,
  RegisterResponse,
  UserDataInterface,
  AuthStateInterface,
};
