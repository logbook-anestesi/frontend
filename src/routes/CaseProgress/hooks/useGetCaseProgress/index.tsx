'use client';
import axiosClient from '../../../../networks/apiClient';
import useSWR from 'swr';
import { CaseProgressElement } from './types';

const useGetCases = () => {
  const {
    data: caseProgressList,
    isLoading: loading,
    mutate,
  } = useSWR(`/cases/progress`, async (): Promise<CaseProgressElement[]> => {
    const response = await axiosClient.get('/cases/progress');
    return response.data.data ?? [];
  });

  return {
    caseProgressList,
    loading,
    mutate,
  };
};

export default useGetCases;
