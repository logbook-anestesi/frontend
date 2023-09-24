import { useCallback, useState } from 'react';
import { PayloadAddApprovalStase } from './types';
import axiosClient from '../../../../networks/apiClient';

const useAddApprovalStaseBulk = () => {
  const [loading, setLoading] = useState(false);

  const createApprovalStaseBulk = useCallback(
    async (payload: PayloadAddApprovalStase) => {
      setLoading(true);

      try {
        const response = await axiosClient.post(
          '/station/entry/approval/bulk',
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
            message: 'Berhasil Approve Stase',
          };
        }
      } catch (e: any) {
        setLoading(false);
        console.log('[Error Approve Stase]', e);
        return { success: false, message: e?.response?.data?.message };
      }
    },
    [],
  );

  return {
    loading,
    createApprovalStaseBulk,
  };
};

export default useAddApprovalStaseBulk;
