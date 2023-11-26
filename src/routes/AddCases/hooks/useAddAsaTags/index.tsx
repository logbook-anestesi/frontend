import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useAddAsaTags = () => {
  const [loading, setLoading] = useState(false);

  const createAsaTag = useCallback(async (payload: { name: string }) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/cases/asa-tag/', payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Create Asa Tag',
          tagId: data?.data?.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Error Create Asa Tag]', e);
    }
  }, []);

  return {
    createAsaTag,
    loading,
  };
};

export default useAddAsaTags;
