import useSWR from 'swr';
import { DetailIlmiahPending } from './types';
import axiosClient from '../../../../networks/apiClient';

const useGetDetailIlmiah = (pendingIlmiahId: string) => {
  const {
    data: detailIlmiahPending,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/scientific?id=${pendingIlmiahId}`,
    async (): Promise<DetailIlmiahPending> => {
      const response = await axiosClient.get(
        `/scientific?id=${pendingIlmiahId}`,
      );
      return response.data.data;
    },
  );

  return { loading, detailIlmiahPending, mutate };
};

export default useGetDetailIlmiah;
