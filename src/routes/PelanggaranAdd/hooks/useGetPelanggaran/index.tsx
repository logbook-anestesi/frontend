import axiosClient from '../../../../networks/apiClient';
import useSWR from 'swr';

const useGetReport = () => {
  const {
    data: caseList,
    isLoading: loading,
    mutate,
  } = useSWR(`/violation-report`, async (): Promise<any> => {
    const response = await axiosClient.get('/violation-report');
    return response.data.data ?? [];
  });

  return {
    caseList,
    loading,
    mutate,
  };
};

export default useGetReport;
