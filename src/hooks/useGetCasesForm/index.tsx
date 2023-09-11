import axiosClient from "../../networks/apiClient";
import { CasesForm } from "./types";
import useSWR from "swr";

const useGetCasesForm = () => {
  const { data: casesForm, isLoading: loading, mutate } = useSWR('/cases/form/', async (): Promise<CasesForm> => {
    const response = await axiosClient.get('/cases/form/');
    return response.data.data;
  })

  return { loading, casesForm, mutate };
};

export default useGetCasesForm;
