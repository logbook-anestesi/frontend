import { useCallback, useState } from "react";
import { PayloadAddApproval } from "./types";
import axiosClient from "../../../../networks/apiClient";
import useGetPengajuanPembimbing from "../../../Ilmiah/hooks/useGetPengajuanPembimbing";

const useAddApproval = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useGetPengajuanPembimbing();

  const createApproval = useCallback(async (payload: PayloadAddApproval) => {
    setLoading(true);

    try {
      const response = await axiosClient.post("/scientific/approval", payload);
      const data = response.data;

      mutate();
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
      mutate();
      setLoading(false);
      console.log("[Error Approve Ilmiah]", e);
      return { success: false, message: e?.response?.data?.message };
    }
  }, [mutate]);

  return {
    loading,
    createApproval,
  };
};

export default useAddApproval;
