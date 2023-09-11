import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import useGetRiwayatKelulusan from "../useGetRiwayatKelulusan";

interface PayloadType {
  scientificId: string;
  documentLink: string;
}

const useAddPengajuanKelulusan = () => {
  const [loading, setLoading] = useState(false);
  const {mutate} = useGetRiwayatKelulusan();

  const createPengajuanKelulusan = useCallback(async (payload: PayloadType) => {
    setLoading(true);
    mutate();

    try {
      const response = await axiosClient.post(
        "/scientific/graduation",
        payload
      );
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: "Berhasil Mengajukan Kelulusan",
          anesthesiaId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log("[Error Mengajukan Kelulusan]", e);
    }
  }, [mutate]);

  return {
    createPengajuanKelulusan,
    loading,
  };
};

export default useAddPengajuanKelulusan;
