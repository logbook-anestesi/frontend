import axiosClient from '../../../../networks/apiClient';
import { StaseApproval } from './types';
import useSWR from 'swr';

const useGetStaseApprovalList = () => {
  const {
    data: approvalList,
    isLoading: loading,
    mutate,
  } = useSWR(
    '/station/entry/approval/pending',
    async (): Promise<StaseApproval[]> => {
      const response = await axiosClient.get('/station/entry/approval/pending');
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
