import { useEffect, useState } from "react";
import { CasesForm } from "./types";
import axiosClient from "../../../../networks/apiClient";

const useGetCasesForm = () => {
  const [loading, setLoading] = useState(false);
  const [casesForm, setCasesForm] = useState<CasesForm>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/cases/form/");
      const data = await response.data.data;

      setLoading(false);
      setCasesForm(data);
    };

    fetchData();
  }, []);

  return { loading, casesForm };
};

export default useGetCasesForm;
