'use client';
import useSWR from 'swr';
import axiosClient from '../../../../networks/apiClient';
import { Exam } from './types';

const useGetAllExam = () => {
  const {
    data: examList,
    isLoading: loading,
    mutate,
  } = useSWR('/exam', async (): Promise<Exam[]> => {
    const response = await axiosClient.get('/exam');
    return response.data.data ?? [];
  });

  return {
    examList,
    loading,
    mutate,
  };
};

export default useGetAllExam;
