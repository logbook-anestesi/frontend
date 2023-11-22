import axiosClient from '../../../../networks/apiClient';
import { DiscussionHistory } from './types';
import useSWR from 'swr';

const useGetAllDiscussionHistory = () => {
  const {
    data: discussionHistory,
    isLoading: loading,
    mutate,
  } = useSWR(
    'scientific/discussion-history/approval',
    async (): Promise<DiscussionHistory[]> => {
      const response = await axiosClient.get(
        'scientific/discussion-history/approval',
      );
      return response.data.data;
    },
  );

  return {
    discussionHistory,
    loading,
    mutate,
    notif: discussionHistory?.length || 0,
  };
};

export default useGetAllDiscussionHistory;
