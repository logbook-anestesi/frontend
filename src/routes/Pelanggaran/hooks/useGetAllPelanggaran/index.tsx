import axiosClient from '../../../../networks/apiClient';
import { Pelanggaran } from './types';
import useSWR from 'swr';

const useGetAllPelanggaran = (userId: string) => {
  const {
    data: pelanggaranList,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/violation-report/${userId}`,
    async (): Promise<Pelanggaran[]> => {
      const response = await axiosClient.get(`/violation-report/${userId}`);
      return response.data.data;
    },
  );

  return {
    pelanggaranList,
    loading,
    mutate,
  };
};

export default useGetAllPelanggaran;
