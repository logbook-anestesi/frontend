import useSWR from "swr";
import axiosClient from "../../../../networks/apiClient";
import { DetailRiwayatKelulusan } from "./types";

// TODO: mutate mechanism
const useGetDetailKelulusan = (riwayatKelulusanId: string) => {
  const { data: detailRiwayatKelulusan, isLoading: loading } = useSWR(`/scientific/graduation/?id=${riwayatKelulusanId}`, async (): Promise<DetailRiwayatKelulusan> => {
    const response = await axiosClient.get(`/scientific/graduation/?id=${riwayatKelulusanId}`);
    return response.data.data;
  })

  return {
    detailRiwayatKelulusan,
    loading,
  };
};

export default useGetDetailKelulusan;
