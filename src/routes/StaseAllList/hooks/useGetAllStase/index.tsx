import axiosClient from "../../../../networks/apiClient";
import { Stase } from "./types";
import useSWR from "swr";

// TODO: mutate mechanism
const useGetAllStase = () => {
  const { data: staseList, isLoading: loading } = useSWR('/station', async (): Promise<Stase[]> => {
    const response = await axiosClient.get("/station");
    return response.data.data ?? [];
  })

  return {
    staseList,
    loading,
  };
};

export default useGetAllStase;
