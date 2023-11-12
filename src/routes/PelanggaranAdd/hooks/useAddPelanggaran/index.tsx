import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

interface PayloadType {
  residenUserId: string;
  severity: string;
  title: string;
  description: string;
  violationDate: string;
}

const useAddPelanggaran = () => {
  const [loading, setLoading] = useState(false);

  const createPelanggaran = useCallback(async (payload: PayloadType) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/violation-report', payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Menambahkan Pelanggaran',
          anesthesiaId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Error Menambahkan Pelanggaran]', e);
    }
  }, []);

  return {
    createPelanggaran,
    loading,
  };
};

export default useAddPelanggaran;
