import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useAddTags = () => {
  const [loading, setLoading] = useState(false);

  const createTag = useCallback(async (payload: { name: string }) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/cases/tag/', payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Update Stase',
          tagId: data?.data?.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Error Update Stase]', e);
    }
  }, []);

  return {
    createTag,
    loading,
  };
};

export default useAddTags;
