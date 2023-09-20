import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { ExamApproval } from './types';

const useGetAllExamApprovals = () => {
  const [loading, setLoading] = useState(false);
  const [examApprovals, setExamApprovals] = useState<ExamApproval[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get('/exam/approval/');
      const data = await response.data.data;

      setLoading(false);
      setExamApprovals(data);
    };

    fetchData();
  }, []);

  return {
    examApprovals,
    loading,
  };
};

export default useGetAllExamApprovals;
