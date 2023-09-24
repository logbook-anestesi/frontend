import axiosClient from '../../../../networks/apiClient';
import { StaseApproval } from './types';
import useSWR from 'swr';

const useGetStaseApprovalList = () => {
  const {
    data: approvalList,
    isLoading: loading,
    mutate,
  } = useSWR('/station/entry/approval/', async (): Promise<StaseApproval[]> => {
    const response = await axiosClient.get('/station/entry/approval/');
    return response.data.data ?? [];
  });

  return {
    approvalList,
    loading,
    mutate,
  };
};

export default useGetStaseApprovalList;
