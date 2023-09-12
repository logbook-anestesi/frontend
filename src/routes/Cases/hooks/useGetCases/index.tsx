'use client'
import axiosClient from "../../../../networks/apiClient";
import { Case } from "./types";
import useSWR from "swr";

const useGetCases = () => {
  const { data: caseList, isLoading: loading, mutate } = useSWR(`/cases`, async (): Promise<Case[]> => {
    const response = await axiosClient.get("/cases");
    return response.data.data ?? [];
  })

  return {
    caseList,
    loading,
    mutate
  };
};

export default useGetCases;
