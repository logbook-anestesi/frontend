import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Case } from "./types";

const useGetCases = () => {
  const [loading, setLoading] = useState(false);
  const [caseList, setCaseList] = useState<Case[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/cases");
      const data = await response.data.data;

      setLoading(false);
      setCaseList(data);
    };

    fetchData();
  }, []);

  return {
    caseList,
    loading,
  };
};

export default useGetCases;
