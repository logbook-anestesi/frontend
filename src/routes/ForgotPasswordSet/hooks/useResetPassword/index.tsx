import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

interface PayloadType {
  email: string;
  password: string;
  confirmationPassword: string;
  otp: string;
}

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const requestResetPassword = useCallback(async (payload: PayloadType) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/auth/reset-password', payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Reset Password',
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Gagal Reset Password]', e);
    }
  }, []);

  return {
    requestResetPassword,
    loading,
  };
};

export default useResetPassword;
