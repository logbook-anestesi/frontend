import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Stase } from "./types";

const useGetAllStase = () => {
  const [status, setStatus] = useState("idle");
  const [listStase, setListStase] = useState<Stase[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");

      const responses = await axiosClient.get("/station");
      const data = await responses.data;

      setListStase(data);
      setStatus("finish");
    };

    fetchData();
  }, []);

  return {
    listStase,
    status,
  };
};

export default useGetAllStase;
