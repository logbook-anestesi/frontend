import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useAddSubCategoryOp = () => {
  const [loading, setLoading] = useState(false);

  const createSubcategoryOperation = useCallback(
    async (payload: { name: string; tier: number; parentId: string }) => {
      setLoading(true);

      try {
        const response = await axiosClient.post(
          '/cases/operation-type/',
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
            message: 'Berhasil Menambahkan Sub Category Operation',
            subCategoryOperationId: data.data.id,
          };
        }
      } catch (e) {
        setLoading(false);
        console.log('[Error Menbahkan Sub Category Operation]', e);
      }
    },
    [],
  );

  return {
    createSubcategoryOperation,
    loading,
  };
};

export default useAddSubCategoryOp;
