import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useReadNotifications = () => {
  const [loading, setLoading] = useState(false);

  const readNotification = useCallback(async (notificationId: string) => {
    setLoading(true);

    try {
      const response = await axiosClient.post(
        `/notification/read/${notificationId}`,
      );
      const data = response.data;

      setLoading(false);

      if (data?.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: 'Success Read Notification',
        };
      }
    } catch (e: any) {
      setLoading(false);
      console.log('[Error Approve Case]', e);
      return { success: false, message: e?.response?.data?.message };
    }
  }, []);

  return {
    loading,
    readNotification,
  };
};

export default useReadNotifications;
