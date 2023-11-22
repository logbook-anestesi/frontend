import { useCallback, useState } from 'react';
import { PayloadAddApproval } from './types';
import axiosClient from '../../../../networks/apiClient';

const useAddApprovalDiscussionHistory = () => {
  const [loading, setLoading] = useState(false);

  const createApprovalDiscussionHistory = useCallback(
    async (payload: PayloadAddApproval) => {
      setLoading(true);

      try {
        const response = await axiosClient.post(
          '/scientific/discussion-history/approval',
          payload,
        );
        const data = response.data;

        setLoading(false);

        if (data?.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Approve Discussion History',
          };
        }
      } catch (e: any) {
        setLoading(false);
        console.log('[Error Approve Discussion History]', e);
        return { success: false, message: e?.response?.data?.message };
      }
    },
    [],
  );

  return {
    loading,
    createApprovalDiscussionHistory,
  };
};

export default useAddApprovalDiscussionHistory;
