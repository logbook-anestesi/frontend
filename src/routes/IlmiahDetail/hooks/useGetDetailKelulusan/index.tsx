import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { DetailRiwayatKelulusan } from "./types";

const useGetDetailKelulusan = (riwayatKelulusanId: string) => {
  const [loading, setLoading] = useState(false);
  const [detailRiwayatKelulusan, setDetailRiwayatKelulusan] = useState<DetailRiwayatKelulusan>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get(
        `/scientific/graduation/?id=${riwayatKelulusanId}`
      );
      const data = await response.data.data;

      setLoading(false);
      setDetailRiwayatKelulusan(data);
    };

    fetchData();
  }, [riwayatKelulusanId]);

  return {
    detailRiwayatKelulusan,
    loading,
  };
};

export default useGetDetailKelulusan;
