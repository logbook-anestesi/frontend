import { useEffect, useState } from 'react';
import axiosClient from '../../../../networks/apiClient';
import { CompetenceUser } from './types';

const useGetCompetenceUser = () => {
  const [loading, setLoading] = useState(false);
  const [rawCompetenceData, setCompetenceData] = useState<CompetenceUser[]>([]);
  const [isAllowedToMakeNewRequest, setIsAllowedToMakeNewRequest] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get('/competence/all');
      const responseData = await response.data.data;
      const data = responseData.competences;
      const allowedToMakeNewRequest = responseData.isAllowedToMakeNewRequest;

      setCompetenceData(data);
      setLoading(false);
      setIsAllowedToMakeNewRequest(allowedToMakeNewRequest);
    };

    fetchData();
  }, []);

  const competenceData = rawCompetenceData?.map((competence) => ({
    ...competence,
    lastUpdated:
      competence.created === competence.lastUpdated
        ? undefined
        : competence.lastUpdated,
  }));

  return {
    competenceData,
    loading,
    isAllowedToMakeNewRequest,
  };
};
export default useGetCompetenceUser;
