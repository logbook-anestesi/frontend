import { useCallback, useState } from 'react';
import useGetCases from '../../../Cases/hooks/useGetCases';
import axiosClient from '../../../../networks/apiClient';
import { EditCasePayload } from '../types';

const useEditCase = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useGetCases();

  const editCase = useCallback(
    async (payload: EditCasePayload, caseId: string) => {
      setLoading(true);

      try {
        const response = await axiosClient.put(`/cases/${caseId}/`);
        const data = response.data;

        mutate();
        setLoading(false);

        if (data.error) {
          return {
            success: false,
            message: data?.message[0],
          };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Edit Case',
          };
        }
      } catch (e: any) {
        mutate();
        setLoading(false);

        console.error('[Error Edit Case]', e);
        return { success: false, message: e?.response?.data?.message };
      }
    },
    [mutate],
  );

  return {
    loading,
    editCase,
  };
};

export default useEditCase;
