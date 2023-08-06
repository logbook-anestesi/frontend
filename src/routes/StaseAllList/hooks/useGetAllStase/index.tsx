import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Stase } from "./types";

const useGetAllStase = () => {
  const [loading, setLoading] = useState(false);
  const [staseList, setStaseList] = useState<Stase[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/station");
      const data = await response.data.data;

      setStaseList(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    staseList,
    loading,
  };
};

export default useGetAllStase;
