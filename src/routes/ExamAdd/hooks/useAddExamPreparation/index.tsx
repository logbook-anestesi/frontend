import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { PayloadExamPreparation } from './types';

const useAddExamPreparation = () => {
  const [loading, setLoading] = useState(false);

  const createExamPreparation = useCallback(
    async (payload: PayloadExamPreparation) => {
      setLoading(true);

      try {
        const response = await axiosClient.post('/exam-preparation', payload);
        const data = response.data;

        setLoading(false);

        if (data.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Create Exam Preparation',
            anesthesiaId: data.data.id,
          };
        }
      } catch (e) {
        setLoading(false);
        console.log('[Error Create Exam Preparation]', e);
      }
    },
    [],
  );

  return {
    createExamPreparation,
    loading,
  };
};

export default useAddExamPreparation;
