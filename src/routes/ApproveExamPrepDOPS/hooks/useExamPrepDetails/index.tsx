import useSWR from 'swr';
import { ExamPrepDetails } from './types';
import axiosClient from '../../../../networks/apiClient';

const useGetExamPrepDetails = (examId: string) => {
  const { data: detailExam, isLoading: loading } = useSWR(
    `/exam-preparation/${examId}`,
    async (): Promise<ExamPrepDetails> => {
      const response = await axiosClient.get(`/exam-preparation/${examId}`);
      return response.data.data;
    },
  );

  return { loading, detailExam };
};

export default useGetExamPrepDetails;
