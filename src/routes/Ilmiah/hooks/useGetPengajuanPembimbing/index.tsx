import useSWR from "swr";
import axiosClient from "../../../../networks/apiClient";
import { PengajuanPembimbing } from "./types";

// TODO: mutate mechanism
const useGetPengajuanPembimbing = () => {
  const { data: pengajuanList, isLoading: loading } = useSWR('/scientific', async (): Promise<PengajuanPembimbing[]> => {
    const response = await axiosClient.get("/scientific");
    return response.data.data ?? [];
  })

  return {
    pengajuanList,
    loading,
  };
};

export default useGetPengajuanPembimbing;
