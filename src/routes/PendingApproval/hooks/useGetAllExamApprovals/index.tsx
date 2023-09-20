import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import useGetPengajuanPembimbing from '../../../Ilmiah/hooks/useGetPengajuanPembimbing';
import { ExamApproval } from './types';

const useGetAllExamApprovals = () => {
  const [loading, setLoading] = useState(false);
  const [examApprovals, setExamApprovals] = useState<ExamApproval[]>([]);
  const { mutate } = useGetPengajuanPembimbing();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get('/exam/approval/');
      const data = await response.data.data;

      mutate();
      setLoading(false);
      setExamApprovals(data);
    };

    fetchData();
  }, [mutate]);

  return {
    examApprovals,
    loading,
  };
};

export default useGetAllExamApprovals;
