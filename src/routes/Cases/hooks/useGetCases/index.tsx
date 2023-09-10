import axiosClient from "../../../../networks/apiClient";
import { Case } from "./types";
import useSWR from "swr";

// TODO: mutate mechanism
const useGetCases = () => {
  const { data: caseList, isLoading: loading } = useSWR(`/cases`, async (): Promise<Case[]> => {
    const response = await axiosClient.get("/cases");
    return response.data.data;
  })

  return {
    caseList,
    loading,
  };
};

export default useGetCases;
