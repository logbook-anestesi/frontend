import axiosClient from '../../../../networks/apiClient';
import { ScientificGraduation } from './types';
import useSWR from 'swr';

const useGetScientificGraduationApprovals = () => {
  const {
    data: reviewData,
    isLoading: loading,
    mutate,
  } = useSWR(
    '/scientific/graduation/approval',
    async (): Promise<ScientificGraduation[]> => {
      const response = await axiosClient.get('/scientific/graduation/approval');
      return response.data.data;
    },
  );

  return {
    reviewData,
    loading,
    mutate,
    notif: reviewData?.length || 0,
  };
};

export default useGetScientificGraduationApprovals;
