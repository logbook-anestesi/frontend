import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useAddPainType = () => {
  const [loading, setLoading] = useState(false);

  const createPainType = useCallback(async (payload: { name: string }) => {
    setLoading(true);

    try {
      const response = await axiosClient.post(
        '/cases/pain-service-type/',
        payload,
      );
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Menambahkan Pain Type',
          painTypeId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Error Update Stase]', e);
    }
  }, []);

  return {
    createPainType,
    loading,
  };
};

export default useAddPainType;
