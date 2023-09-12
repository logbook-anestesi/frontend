import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { Supervisor } from './types';

const useGetSupervisor = () => {
  const [loading, setLoading] = useState(false);
  const [supervisors, setSupervisors] = useState<Supervisor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get('/users/?role=RESIDEN');
      const data = await response.data.data;

      setLoading(false);
      setSupervisors(data);
    };

    fetchData();
  }, []);

  return {
    supervisors,
    loading,
  };
};

export default useGetSupervisor;
