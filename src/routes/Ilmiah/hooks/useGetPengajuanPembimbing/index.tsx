import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { PengajuanPembimbing } from "./types";

const useGetPengajuanPembimbing = () => {
  const [loading, setLoading] = useState(false);
  const [pengajuanList, setPengajuanList] = useState<PengajuanPembimbing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/scientific");
      const data = await response.data.data;

      setLoading(false);
      setPengajuanList(data);
    };

    fetchData();
  }, []);

  return {
    pengajuanList,
    loading,
  };
};

export default useGetPengajuanPembimbing;
