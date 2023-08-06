import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Case } from "../../../Cases/hooks/useGetCases/types";

const useGetDetailCases = (caseId: string) => {
  const [loading, setLoading] = useState(false);
  const [caseData, setCaseData] = useState<Case>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get(`/cases/?id=${caseId}`);
      const data = await response.data.data;

      setLoading(false);
      setCaseData(data);
    };

    fetchData();
  }, [caseId]);

  return {
    caseData,
    loading,
  };
};

export default useGetDetailCases;
