import axiosClient from '../../../../networks/apiClient';
import { ReviewItem } from './types';
import useSWR from 'swr';

const useGetScientificApprovals = () => {
  const {
    data: reviewData,
    isLoading: loading,
    mutate,
  } = useSWR('/scientific/approval/', async (): Promise<ReviewItem[]> => {
    const response = await axiosClient.get('/scientific/approval/');
    return response.data.data;
  });

  return {
    reviewData,
    loading,
    mutate,
    notif: reviewData?.length || 0,
  };
};

export default useGetScientificApprovals;
