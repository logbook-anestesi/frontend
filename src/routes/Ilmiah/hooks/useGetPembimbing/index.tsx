import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Pembimbing } from "./types";

const useGetPembimbing = () => {
  const [loading, setLoading] = useState(false);
  const [pembimbingList, setPembimbingList] = useState<Pembimbing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/users/?role=KONSULEN");
      const data = await response.data.data;

      setLoading(false);
      setPembimbingList(data);
    };

    fetchData();
  }, []);

  return {
    pembimbingList,
    loading,
  };
};

export default useGetPembimbing;
