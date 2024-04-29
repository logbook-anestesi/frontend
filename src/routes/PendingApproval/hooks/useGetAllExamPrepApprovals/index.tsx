import axiosClient from '../../../../networks/apiClient';
import { ExamPrepApproval } from './types';
import useSWR from 'swr';

const useGetAllExamApprovals = () => {
  const {
    data: examApprovals,
    isLoading: loading,
    mutate,
  } = useSWR('/exam/approval/', async (): Promise<ExamPrepApproval[]> => {
    const response = await axiosClient.get('/exam-preparation');
    return response.data.data;
  });

  return {
    examApprovals,
    loading,
    mutate,
    notif: examApprovals?.length || 0,
  };
};

export default useGetAllExamApprovals;
