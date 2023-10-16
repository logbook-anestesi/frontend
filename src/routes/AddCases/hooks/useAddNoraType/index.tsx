import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useAddNoraType = () => {
  const [loading, setLoading] = useState(false);

  const createNoraType = useCallback(async (payload: { name: string }) => {
    setLoading(true);

    try {
      const response = await axiosClient.post(
        '/cases/nora-procedure-type/',
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
          message: 'Berhasil Menambahkan Nora Type',
          noraTypeId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Error Update Stase]', e);
    }
  }, []);

  return {
    createNoraType,
    loading,
  };
};

export default useAddNoraType;
