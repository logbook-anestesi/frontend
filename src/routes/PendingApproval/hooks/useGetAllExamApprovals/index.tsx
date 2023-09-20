import axiosClient from '../../../../networks/apiClient';
import { ExamApproval } from './types';
import useSWR from 'swr';

const useGetAllExamApprovals = () => {
  const {
    data: examApprovals,
    isLoading: loading,
    mutate,
  } = useSWR('/exam/approval/', async (): Promise<ExamApproval[]> => {
    const response = await axiosClient.get('/exam/approval/');
    return response.data.data;
  });

  return {
    examApprovals,
    loading,
    mutate,
  };
};

export default useGetAllExamApprovals;
