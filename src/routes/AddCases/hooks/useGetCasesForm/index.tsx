import { CasesForm } from "./types";
import axiosClient from "../../../../networks/apiClient";
import useSWR from "swr";

export const useGetCasesForm = () => {
  const { data: casesForm, isLoading: loading } = useSWR('/cases/form/', async (): Promise<CasesForm> => {
    const response = await axiosClient.get('/cases/form/');
    return response.data.data ?? [];
  })

  return { loading, casesForm };
};
