import { useCallback, useState } from 'react';
import { PayloadAddApprovalExam } from './types';
import axiosClient from '../../../../networks/apiClient';

const useAddApprovalExam = () => {
  const [loading, setLoading] = useState(false);

  const createApprovalExam = useCallback(
    async (payload: PayloadAddApprovalExam) => {
      setLoading(true);

      try {
        const response = await axiosClient.post('/exam/approval', payload);
        const data = response.data;

        setLoading(false);

        if (data?.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Approve Exam',
          };
        }
      } catch (e: any) {
        setLoading(false);
        console.log('[Error Approve Exam]', e);
        return { success: false, message: e?.response?.data?.message };
      }
    },
    [],
  );

  return {
    loading,
    createApprovalExam,
  };
};

export default useAddApprovalExam;
