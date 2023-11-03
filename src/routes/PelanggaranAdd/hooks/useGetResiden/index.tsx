import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { Residen } from './types';

const useGetResiden = () => {
  const [loading, setLoading] = useState(false);
  const [residenList, setResidenList] = useState<Residen[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get('/users/?role=RESIDEN');
      const data = await response.data.data;

      setLoading(false);
      setResidenList(data);
    };

    fetchData();
  }, []);

  return {
    residenList,
    loading,
  };
};

export default useGetResiden;
