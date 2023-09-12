import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { CreateCasePayload } from './types';
import useGetCases from '../../../Cases/hooks/useGetCases';

const useAddCases = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useGetCases();

  const createCases = useCallback(
    async (payload: CreateCasePayload) => {
      setLoading(true);

      try {
        const response = await axiosClient.post('/cases/', payload);
        const data = response.data;

        mutate();
        setLoading(false);

        if (data.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Create Stase',
          };
        }
      } catch (e: any) {
        mutate();
        setLoading(false);
        const errorMessage =
          e?.response?.data?.message?.[0] || 'An error occurred.';

        console.log('[Error Update Stase]', e);

        return { success: false, message: errorMessage };
      }
    },
    [mutate],
  );

  return {
    createCases,
    loading,
  };
};

export default useAddCases;
