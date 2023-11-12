import axiosClient from '../../../../networks/apiClient';
import useSWR from 'swr';
import { UnreadNotificationCounterResiden } from './types';

const usetGetCounterNotificationResiden = () => {
  const {
    data: notificationCounterResiden,
    isLoading: loading,
    mutate,
  } = useSWR(
    '/common-products/home-notification/residen',
    async (): Promise<UnreadNotificationCounterResiden> => {
      const response = await axiosClient.get(
        '/common-products/home-notification/residen',
      );

      return response.data.data;
    },
  );

  return { loading, notificationCounterResiden, mutate };
};

export default usetGetCounterNotificationResiden;
