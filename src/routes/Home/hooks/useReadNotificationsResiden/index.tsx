import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { UnreadNotificationCounterResiden } from './types';

const usetGetCounterNotificationResiden = () => {
  const [loading, setLoading] = useState(false);
  const [notificationCounterResiden, setNotificationCounterResiden] =
    useState<UnreadNotificationCounterResiden>({
      totalPendingApproval: 0,
      isCurrentMonthStationEntryExist: false,
    });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get(
        '/common-products/home-notification/residen',
      );
      const data = await response.data.data;

      setNotificationCounterResiden(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    notificationCounterResiden,
    loading,
  };
};

export default usetGetCounterNotificationResiden;
