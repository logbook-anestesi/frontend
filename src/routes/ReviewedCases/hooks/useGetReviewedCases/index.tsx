import useSWR from 'swr';
import { Case } from '../../../Cases/hooks/useGetCases/types';
import axiosClient from '../../../../networks/apiClient';

const useGetReviewedCases = () => {
  const { data: listReviewedCases, isLoading: loading } = useSWR(
    '/cases/approval?status=APPROVED',
    async (): Promise<Case[]> => {
      const response = await axiosClient.get('/cases/approval?status=APPROVED');
      return response?.data?.data || [];
    },
  );

  return { loading, listReviewedCases };
};

export default useGetReviewedCases;
