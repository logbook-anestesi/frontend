import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { RiwayatKelulusan } from "./types";

const useGetRiwayatKelulusan = () => {
  const [loading, setLoading] = useState(false);
  const [riwayatKelulusan, setRiwayatKelulusan] = useState<RiwayatKelulusan[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/scientific/graduation");
      const data = await response.data.data;

      setLoading(false);
      setRiwayatKelulusan(data);
    };

    fetchData();
  }, []);

  return {
    riwayatKelulusan,
    loading,
  };
};

export default useGetRiwayatKelulusan;
