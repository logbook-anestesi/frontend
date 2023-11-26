import useSWR from 'swr';
import { DetailRiwayatKelulusan } from './types';
import axiosClient from '../../../../networks/apiClient';

const useGetDetailKelulusan = (riwayatKelulusanId: string) => {
  const {
    data: detailRiwayatKelulusan,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/scientific/graduation/?id=${riwayatKelulusanId}`,
    async (): Promise<DetailRiwayatKelulusan> => {
      const response = await axiosClient.get(
        `/scientific/graduation/?id=${riwayatKelulusanId}`,
      );
      return response.data.data;
    },
  );

  return { loading, detailRiwayatKelulusan, mutate };
};

export default useGetDetailKelulusan;
