import axiosClient from "../../../../networks/apiClient";
import { RiwayatKelulusan } from "./types";
import useSWR from "swr";

// TODO: mutate mechanism
const useGetRiwayatKelulusan = () => {
  const { data: riwayatKelulusan, isLoading: loading } = useSWR('/scientific/graduation', async (): Promise<RiwayatKelulusan[]> => {
    const response = await axiosClient.get("/scientific/graduation");
    return response.data.data ?? [];
  })

  return {
    riwayatKelulusan,
    loading,
  };
};

export default useGetRiwayatKelulusan;
