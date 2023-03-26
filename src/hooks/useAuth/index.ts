import { message } from "antd";
import Cookies from "js-cookie";
import { useCallback, useMemo, useState } from "react";
import jwtDecode from "jwt-decode";
import axiosClient from "../../networks/apiClient";
import {
  AuthStateInterface,
  LoginDataInterface,
  LoginResponse,
  RegisterDataInterface,
  RegisterResponse,
  UserDataInterface,
} from "./types";
import { useAuthDispatch } from "../../contexts/AuthContext";

const useAuth = () => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse>();
  const [registerResponses, setRegisterResponses] =
    useState<RegisterResponse>();

  const authDispatch = useAuthDispatch();

  const [authState, setAuthState] = useState<AuthStateInterface>({
    isAuthenticated: !!Cookies.get("jwt_token"),
  });

  const registerAccount = useCallback(
    async ({ email, name, password }: RegisterDataInterface) => {
      try {
        const registerData = {
          email: email,
          name: name,
          password: password,
        };

        const response = await axiosClient.post("/auth/register", registerData);
        setRegisterResponses(response.data);
      } catch (err) {
        console.log("[Register Account]", err);
      }
    },
    []
  );

  const loginAccount = useCallback(
    async ({ email, password }: LoginDataInterface) => {
      try {
        const loginData = {
          email: email,
          password: password,
        };

        const responseLogin = await axiosClient.post("/auth/login", loginData);

        if (responseLogin.data.error === null) {
          const token = responseLogin.data.data.token;
          Cookies.set("jwt_token", token);

          const data_user = jwtDecode(token) as { [key: string]: any };

          console.log("[User Data]", data_user);

          authDispatch({
            type: "set_user_data",
            data: {
              email: data_user.email,
              id: data_user.id,
              image_url: data_user.image_url,
              name: data_user.name,
              phone_number: data_user.phone_number,
            },
          });

          setAuthState({ isAuthenticated: true });
        }

        setLoginResponse(responseLogin.data);
      } catch (err) {
        console.log("[Login Account]", err);
      }
    },
    [authDispatch]
  );

  const logoutAccount = useCallback(() => {
    Cookies.remove("jwt_token");
    message.success("Logout Success");

    setAuthState({ isAuthenticated: false });
  }, []);

  const accountData = useMemo<UserDataInterface>(() => {
    const jwtToken = Cookies.get("jwt_token") || "";

    if (jwtToken) {
      const data_user = jwtDecode(jwtToken) as { [key: string]: any };
      const { email, id, phone_number, name, image_url } = data_user;
      return { email, id, image_url, name, phone_number };
    }

    return {} as UserDataInterface;
  }, []);

  return {
    isAuthenticated: authState.isAuthenticated,
    registerAccount,
    loginAccount,
    logoutAccount,
    registerResponses,
    loginResponse,
    accountData,
  };
};

export default useAuth;
