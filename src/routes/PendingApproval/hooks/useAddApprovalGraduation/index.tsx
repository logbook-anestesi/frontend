import { useCallback, useState } from 'react';
import { PayloadAddApproval } from './types';
import axiosClient from '../../../../networks/apiClient';

const useAddApprovalGraduation = () => {
  const [loading, setLoading] = useState(false);

  const createApprovalGraduation = useCallback(
    async (payload: PayloadAddApproval) => {
      setLoading(true);

      try {
        const response = await axiosClient.post(
          '/scientific/graduation/approval',
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
            message: 'Berhasil Approve Ilmiah Graduation',
          };
        }
      } catch (e: any) {
        setLoading(false);
        console.log('[Error Approve Ilmiah Graduation]', e);
        return { success: false, message: e?.response?.data?.message };
      }
    },
    [],
  );

  return {
    loading,
    createApprovalGraduation,
  };
};

export default useAddApprovalGraduation;
