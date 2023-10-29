import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

interface PayloadType {
  type?: string;
  examinerId?: string;
  isTheory?: boolean;
}

const useAddExam = () => {
  const [loading, setLoading] = useState(false);

  const createExam = useCallback(async (payload: PayloadType) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/exam', payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Create Exam',
          anesthesiaId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Error Create Exam]', e);
    }
  }, []);

  return {
    createExam,
    loading,
  };
};

export default useAddExam;
