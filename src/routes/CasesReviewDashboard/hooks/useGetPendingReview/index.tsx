import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { ReviewItem } from './types';

const useGetPendingReview = () => {
  const [loading, setLoading] = useState(false);
  const [reviewData, setReviewData] = useState<ReviewItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get('/cases/approval/');
      const data = await response.data.data;

      setLoading(false);
      setReviewData(data);
    };

    fetchData();
  }, []);

  return {
    reviewData,
    loading,
  };
};

export default useGetPendingReview;
