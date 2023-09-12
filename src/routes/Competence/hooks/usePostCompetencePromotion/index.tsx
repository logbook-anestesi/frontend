import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const usePostCompetencePromotion = () => {
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    async (payload: {
      createBy: string;
      userId: string;
      promoteTo: string;
    }) => {
      setLoading(true);

      try {
        const response = await axiosClient.post(
          '/competence/promotion',
          payload,
        );
        const data = response.data;

        setLoading(false);

        if (data.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return {
            success: true,
            message: 'Berhasil Kirim Request Kenaikan Kompetensi',
          };
        }
      } catch (e) {
        setLoading(false);
        console.log('[Error Kirim Request Kenaikan Kompetensi]', e);
      }
    },
    [],
  );

  return { postData, loading };
};

export default usePostCompetencePromotion;
