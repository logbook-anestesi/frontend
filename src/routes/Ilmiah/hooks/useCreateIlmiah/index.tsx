import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";

interface PayloadType {
  title: string;
  scientificType: string;
  approvalUserIds: string[];
}

const useCreateIlmiah = () => {
  const [loading, setLoading] = useState(false);

  const createIlmiah = useCallback(async (payload: PayloadType) => {
    setLoading(true);

    try {
      const response = await axiosClient.post("/scientific", payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: "Berhasil Create Ilmiah",
          anesthesiaId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log("[Error Create Ilmiah]", e);
    }
  }, []);

  return {
    createIlmiah,
    loading,
  };
};

export default useCreateIlmiah;
