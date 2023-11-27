import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

interface PayloadType {
  email: string;
}

const useGetOtp = () => {
  const [loading, setLoading] = useState(false);

  const requestOTP = useCallback(async (payload: PayloadType) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/auth/request-otp', payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Berhasil Request OTP',
        };
      }
    } catch (e) {
      setLoading(false);
      console.log('[Gagal Request OTP]', e);
    }
  }, []);

  return {
    requestOTP,
    loading,
  };
};

export default useGetOtp;
