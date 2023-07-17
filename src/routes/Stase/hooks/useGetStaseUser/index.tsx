import { useEffect, useMemo, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { StaseUser } from "./types";
import { getMonthYearString } from "../../../../helpers";

const useGetStaseUser = () => {
  const [status, setStatus] = useState("idle");
  const [staseData, setStaseData] = useState<StaseUser[]>();

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");

      const response = await axiosClient.get("/station/entry");
      const data = await response.data.data;

      setStaseData(data);
      setStatus("finish");
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
    status,
  };
};

export default useGetStaseUser;
