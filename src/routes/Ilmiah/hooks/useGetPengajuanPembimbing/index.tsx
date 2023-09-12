'use client'
import useSWR from "swr";
import axiosClient from "../../../../networks/apiClient";
import { PengajuanPembimbing } from "./types";

const useGetPengajuanPembimbing = () => {
  const { data: pengajuanList, isLoading: loading, mutate } = useSWR('/scientific', async (): Promise<PengajuanPembimbing[]> => {
    const response = await axiosClient.get("/scientific");
    return response.data.data ?? [];
  })

  return {
    pengajuanList,
    loading,
    mutate
  };
};

export default useGetPengajuanPembimbing;
