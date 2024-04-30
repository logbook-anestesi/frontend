import { useCallback, useState } from 'react';
import { PayloadApproveExamPrep } from './types';
import axiosClient from '../../../../networks/apiClient';

const useApproveExamPrep = () => {
  const [loading, setLoading] = useState(false);

  const createApprovalExamPrep = useCallback(
    async (payload: PayloadApproveExamPrep) => {
      setLoading(true);

      try {
        const response = await axiosClient.post(
          '/exam-preparation/approve',
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
            message: 'Berhasil Approve Exam Preparation',
          };
        }
      } catch (e: any) {
        setLoading(false);
        console.log('[Error Approve Exam Preparation]', e);
        return { success: false, message: e?.response?.data?.message };
      }
    },
    [],
  );

  return {
    loading,
    createApprovalExamPrep,
  };
};

export default useApproveExamPrep;
