import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import useGetCases from '../../../Cases/hooks/useGetCases';

const useApproveAll = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useGetCases();

  const approveAll = useCallback(
    async (status: string) => {
      setLoading(true);

      try {
        const response = await axiosClient.post('/cases/approval/bulk', {
          status: status,
        });
        const data = response.data;

        mutate();
        setLoading(false);

        if (data?.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Approve Case',
          };
        }
      } catch (e: any) {
        mutate();
        setLoading(false);
        console.log('[Error Approve Case]', e);
        return { success: false, message: e?.response?.data?.message };
      }
    },
    [mutate],
  );

  return {
    loading,
    approveAll,
  };
};

export default useApproveAll;
