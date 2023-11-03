import axiosClient from '../../../../networks/apiClient';
import { Leave } from './types';
import useSWR from 'swr';

const useGetAllLeave = () => {
  const {
    data: leaves,
    isLoading: loading,
    mutate,
  } = useSWR('/leave', async (): Promise<Leave[]> => {
    const response = await axiosClient.get('/leave');
    return response.data.data;
  });

  return { loading, leaves, mutate };
};

export default useGetAllLeave;
