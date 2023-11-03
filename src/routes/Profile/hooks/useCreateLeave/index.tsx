import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import useGetAllLeave from '../useGetAllLeave';

interface PayloadType {
  startDate: string;
  endDate: string;
  description: string;
}

const useCreateLeave = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useGetAllLeave();

  const createLeave = useCallback(
    async (payload: PayloadType) => {
      setLoading(true);

      try {
        const response = await axiosClient.post('/leave', payload);
        const data = response.data;

        mutate();
        setLoading(false);

        if (data.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Create Leave',
            anesthesiaId: data.data.id,
          };
        }
      } catch (e) {
        mutate();
        setLoading(false);
        console.log('[Error Create Leave]', e);
      }
    },
    [mutate],
  );

  return {
    createLeave,
    loading,
  };
};

export default useCreateLeave;
