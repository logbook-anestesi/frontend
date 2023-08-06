import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { CompetenceUser } from "./types";

const useGetCompetenceUser = () => {
  const [loading, setLoading] = useState(false);
  const [rawCompetenceData, setCompetenceData] = useState<CompetenceUser[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/competence/all");
      const data = await response.data.data;

      setCompetenceData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const competenceData = rawCompetenceData?.map((competence) => ({
    ...competence, 
    lastUpdated: (competence.created === competence.lastUpdated) ? undefined : competence.lastUpdated
  }));

  return {
    competenceData,
    loading,
  };
};

export default useGetCompetenceUser;
