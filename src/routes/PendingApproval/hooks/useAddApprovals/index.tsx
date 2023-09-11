import { useCallback, useState } from "react";
import { PayloadAddApproval } from "./types";
import axiosClient from "../../../../networks/apiClient";
import useGetPengajuanPembimbing from "../../../Ilmiah/hooks/useGetPengajuanPembimbing";

const useAddApproval = () => {
  const [loading, setLoading] = useState(false);
  const {mutate} = useGetPengajuanPembimbing();

  const createApproval = useCallback(async (payload: PayloadAddApproval) => {
    setLoading(true);
    mutate();

    try {
      const response = await axiosClient.post("/scientific/approval", payload);
      const data = response.data;

      setLoading(false);

      if (data?.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: "Berhasil Approve Ilmiah",
        };
      }
    } catch (e: any) {
      setLoading(false);
      console.log("[Error Approve Ilmiah]", e);
      return { success: false, message: e?.response?.data?.message };
    }
  }, []);

  return {
    loading,
    createApproval,
  };
};

export default useAddApproval;
