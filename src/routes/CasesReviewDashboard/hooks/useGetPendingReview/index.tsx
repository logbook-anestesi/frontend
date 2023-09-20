import axiosClient from '../../../../networks/apiClient';
import { ReviewItem } from './types';
import useSWR from 'swr';

const useGetPendingReview = () => {
  const {
    data: reviewData,
    isLoading: loading,
    mutate,
  } = useSWR('/cases/approval', async (): Promise<ReviewItem[]> => {
    const response = await axiosClient.get('/cases/approval');
    return response.data.data ?? [];
  });

  return {
    reviewData,
    loading,
    mutate,
    notif: reviewData?.length || 0,
  };
};

export default useGetPendingReview;
