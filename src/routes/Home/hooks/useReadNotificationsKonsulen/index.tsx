import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { UnreadNotificationCounter } from './types';

const usetGetCounterNotificationKonsulen = () => {
  const [loading, setLoading] = useState(false);
  const [notificationCounter, setNotificationCounter] =
    useState<UnreadNotificationCounter>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get(
        '/common-products/home-notification/konsulen',
      );
      const data = await response.data.data;

      setNotificationCounter(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    notificationCounter,
    loading,
  };
};

export default usetGetCounterNotificationKonsulen;
