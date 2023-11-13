'use client';
import axiosClient from '../../../../networks/apiClient';
import { Case } from './types';
import useSWR from 'swr';

const useGetCases = () => {
  const {
    data: caseList,
    isLoading: loading,
    mutate,
  } = useSWR(`/cases`, async (): Promise<Case[]> => {
    const response = await axiosClient.get('/cases');
    return response.data.data ?? [];
  });

  const getCaseById = (tagType: string, keywordId: string) => {
    const { data: caseList, isLoading: loading } = useSWR(
      `/cases/?${tagType}/${keywordId}`,
      async (): Promise<Case[]> => {
        const response = await axiosClient.get(
          `/cases/?${tagType}/${keywordId}`,
        );
        return response.data.data ?? [];
      },
    );

    return {
      caseList,
      loading,
    };
  };

  return {
    caseList,
    loading,
    mutate,
    getCaseById,
  };
};

export default useGetCases;
