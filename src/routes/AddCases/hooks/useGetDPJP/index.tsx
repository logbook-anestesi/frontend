import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { DPJP } from "./types";

const useGetDPJP = () => {
  const [loading, setLoading] = useState(false);
  const [dpjpList, setDpjpList] = useState<DPJP[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/users");
      const data = await response.data.data;

      setLoading(false);
      setDpjpList(data);
    };

    fetchData();
  }, []);

  return {
    dpjpList,
    loading,
  };
};

export default useGetDPJP;
