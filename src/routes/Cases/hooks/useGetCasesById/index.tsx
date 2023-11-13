// const useGetCasesById = () => {
//   const [triggerFetch, setTriggerFetch] = useState(false);
//   const [tagType, setTagType] = useState('');
//   const [keywordId, setKeywordId] = useState('');

//   const {
//     data: caseList,
//     isLoading: loading,
//     mutate,
//   } = useSWR(
//     triggerFetch ? `/cases/?${tagType}/${keywordId}` : null,
//     async (): Promise<Case[]> => {
//       const response = await axiosClient.get(`/cases/?${tagType}=${keywordId}`);
//       return response.data.data ?? [];
//     },
//   );

//   const handleFetch = (tagType: string, keywordId: string) => {
//     setTagType(tagType);
//     setKeywordId(keywordId);

//     setTriggerFetch(true);
//   };

//   return {
//     caseList,
//     loading,
//     mutate,
//     handleFetch,
//   };
// };

// export default useGetCasesById;

import { useCallback, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';

const useGetCasesById = () => {
  const [loading, setLoading] = useState(false);

  const getCasesById = useCallback(
    async (payload: { tagType: string; keywordId: string }) => {
      setLoading(true);

      try {
        const response = await axiosClient.get(
          `/cases/?${payload.tagType}=${payload.keywordId}`,
        );
        const data = response.data;

        setLoading(false);

        if (data.error) {
          return { success: false, data: [] };
        }

        if (!data.error) {
          return {
            success: true,
            data: data?.data,
          };
        }
      } catch (e) {
        setLoading(false);
        console.log('[Error Get Case By Id]', e);
      }
    },
    [],
  );

  return {
    getCasesById,
    loading,
  };
};

export default useGetCasesById;
