import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Stase } from "./types";
import useSWR from "swr";

// TODO: mutate mechanism
const useGetAllStase = () => {
  const { data: listStase, isLoading } = useSWR('/station', async (): Promise<Stase[]> => {
    const response = await axiosClient.get("/station");
    return response.data.data;
  })

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (isLoading) {
      setStatus("loading");
    } else {
      setStatus("finish");
    }
  }, [isLoading]);

  return {
    listStase,
    status,
  };
};

export default useGetAllStase;
