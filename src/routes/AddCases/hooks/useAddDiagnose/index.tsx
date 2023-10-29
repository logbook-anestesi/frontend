import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useAddDiagnoseType = () => {
  const [loading, setLoading] = useState(false);

  const createDiagnoseType = useCallback(async (payload: { name: string }) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/cases/diagnose/', payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Menambahkan Diagnose Type',
          diagnoseTypeId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Error Update Stase]', e);
    }
  }, []);

  return {
    createDiagnoseType,
    loading,
  };
};

export default useAddDiagnoseType;
