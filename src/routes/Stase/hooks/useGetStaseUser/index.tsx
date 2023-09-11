import { useMemo } from "react";
import axiosClient from "../../../../networks/apiClient";
import { StaseUser } from "./types";
import { getMonthYearString } from "../../../../helpers";
import useSWR from "swr";

// TODO: mutate mechanism
const useGetStaseUser = () => {
  const { data: staseData, isLoading: loading } = useSWR('/station/entry', async (): Promise<StaseUser[]> => {
    const response = await axiosClient.get("/station/entry");
    return response.data.data ?? [];
  })

  // TODO: check need useeffect or not
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
