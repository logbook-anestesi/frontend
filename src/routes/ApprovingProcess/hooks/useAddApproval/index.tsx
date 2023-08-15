import { useCallback, useState } from "react";
import { PayloadAddApproval } from "./types";
import axiosClient from "../../../../networks/apiClient";

const useAddApproval = () => {
  const [loading, setLoading] = useState(false);

  const createApproval = useCallback(async (payload: PayloadAddApproval) => {
    setLoading(true);

    try {
      const response = await axiosClient.post("/cases/approval", payload);
      const data = response.data;

      setLoading(false);

      if (data?.error) {
        console.log("999 eror");
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: "Berhasil Approve Case",
        };
      }
    } catch (e: any) {
      setLoading(false);
      console.log("[Error Approve Case]", e);
      return { success: false, message: e?.response?.data?.message };
    }
  }, []);

  return {
    loading,
    createApproval,
  };
};

export default useAddApproval;
