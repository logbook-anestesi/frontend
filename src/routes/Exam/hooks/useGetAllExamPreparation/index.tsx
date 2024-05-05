'use client';
import useSWR from 'swr';
import axiosClient from '../../../../networks/apiClient';
import { ExamPreparation } from './types';

const useGetAllExamPreparation = () => {
  const {
    data: examPrepList,
    isLoading: loading,
    mutate,
  } = useSWR(
    '/exam-preparation?status=PENDING',
    async (): Promise<ExamPreparation[]> => {
      const response = await axiosClient.get(
        '/exam-preparation?status=PENDING',
      );
      return response.data.data ?? [];
    },
  );

  return {
    examPrepList,
    loading,
    mutate,
  };
};

export default useGetAllExamPreparation;
