import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { Leave } from './types';

const useGetAllLeave = () => {
  const [loading, setLoading] = useState(false);
  const [leaves, setLeaves] = useState<Leave[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get('/leave');
      const data = await response.data.data;

      setLeaves(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    leaves,
    loading,
  };
};

export default useGetAllLeave;
