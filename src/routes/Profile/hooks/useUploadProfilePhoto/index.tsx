import { useCallback, useState } from 'react';
import { PayloadUploadPhoto } from './types';
import axiosClient from '../../../../networks/apiClient';

const useUploadProfilePhoto = () => {
  const [loading, setLoading] = useState(false);

  const uploadPhoto = useCallback(async (payload: PayloadUploadPhoto) => {
    setLoading(true);

    try {
      const response = await axiosClient.post(
        '/auth/update-profile-photo',
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
          message: 'Succes Upload Photo',
        };
      }
    } catch (e: any) {
      setLoading(false);
      console.log('[Error Upload Photo]', e);
      return { success: false, message: e?.response?.data?.message };
    }
  }, []);

  return {
    loading,
    uploadPhoto,
  };
};

export default useUploadProfilePhoto;
