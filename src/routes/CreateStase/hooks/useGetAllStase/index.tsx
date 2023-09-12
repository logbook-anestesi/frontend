'use client'
import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Stase } from "./types";
import useSWR from "swr";

const useGetAllStase = () => {
  const { data: listStase, isLoading } = useSWR('/station', async (): Promise<Stase[]> => {
    const response = await axiosClient.get("/station");
    return response.data.data ?? [];
  })

  const [status, setStatus] = useState("idle");

  // TODO: check need useeffect or not
  useEffect(() => {
    if (isLoading) {
      setStatus("loading");
    } else {
      setStatus("finish");
    }
  }, [isLoading]);

  return {
    listStase: listStase ? listStase : [],
    status,
  };
};

export default useGetAllStase;
