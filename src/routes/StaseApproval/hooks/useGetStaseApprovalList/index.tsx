import axiosClient from '../../../../networks/apiClient';
import { StaseApproval } from './types';
import useSWR from 'swr';

const useGetStaseApprovalList = () => {
  const {
    data: approvalList,
    isLoading: loading,
    mutate,
  } = useSWR(
    '/station/entry/c9f88426-f18d-4a36-907c-06c1652ed2b0',
    async (): Promise<StaseApproval[]> => {
      const response = await axiosClient.get(
        '/station/entry/c9f88426-f18d-4a36-907c-06c1652ed2b0',
      );
      return response.data.data ?? [];
    },
  );

  return {
    approvalList,
    loading,
    mutate,
    notif: approvalList?.length || 0,
  };
};

export default useGetStaseApprovalList;
