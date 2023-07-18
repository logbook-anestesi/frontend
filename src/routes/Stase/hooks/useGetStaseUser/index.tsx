import { useEffect, useMemo, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { StaseUser } from "./types";
import { getMonthYearString } from "../../../../helpers";

const useGetStaseUser = () => {
  const [loading, setLoading] = useState(false);
  const [staseData, setStaseData] = useState<StaseUser[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/station/entry");
      const data = await response.data.data;

      setStaseData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const currentStase = useMemo(() => {
    return staseData?.find(
      (stase) => stase.periodMmYyyy === getMonthYearString()
    );
  }, [staseData]);

  return {
    staseData,
    currentStase,
    loading,
  };
};

export default useGetStaseUser;
