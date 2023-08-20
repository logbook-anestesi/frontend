import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";

const useApproveAll = () => {
  const [loading, setLoading] = useState(false);

  const approveAll = useCallback(async (status: string) => {
    setLoading(true);

    try {
      const response = await axiosClient.post("/cases/approval/bulk", {
        status: status,
      });
      const data = response.data;

      setLoading(false);

      if (data?.error) {
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
    approveAll,
  };
};

export default useApproveAll;
