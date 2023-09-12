'use client'
import axiosClient from "../../../../networks/apiClient";
import { RiwayatKelulusan } from "./types";
import useSWR from "swr";

const useGetRiwayatKelulusan = () => {
  const { data: riwayatKelulusan, isLoading: loading, mutate } = useSWR('/scientific/graduation', async (): Promise<RiwayatKelulusan[]> => {
    const response = await axiosClient.get("/scientific/graduation");
    return response.data.data ?? [];
  })

  return {
    riwayatKelulusan,
    loading,
    mutate
  };
};

export default useGetRiwayatKelulusan;
