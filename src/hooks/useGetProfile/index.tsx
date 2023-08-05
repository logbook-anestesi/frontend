import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import axiosClient from "../../networks/apiClient";
import { Profile } from "./types";
import { DecodedJwt } from "./types";

const useGetProfile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    const fetchData = async (userId: string) => {
      setLoading(true);

      const response = await axiosClient.get(`/users/${userId}`);
      const data = await response.data.data;

      setLoading(false);
      setProfile(data);
    };

    const jwtToken = Cookies.get("jwt_token");
    const decodedToken = jwt_decode<DecodedJwt>(jwtToken || "");

    fetchData(decodedToken?.id);
  }, []);

  return {
    profile,
    loading,
  };
};

export default useGetProfile;
