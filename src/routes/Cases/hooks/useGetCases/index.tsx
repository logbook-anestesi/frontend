import { useEffect, useState } from "react";
import { Case } from "../../types";
import axiosClient from "../../../../networks/apiClient";

const useGetCases = () => {
  const [loading, setLoading] = useState(false);
  const [casesData, setCasesData] = useState<Case[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/cases");
      const data = await response.data.data;

      setCasesData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    loading,
    casesData,
  };
};

export default useGetCases;
