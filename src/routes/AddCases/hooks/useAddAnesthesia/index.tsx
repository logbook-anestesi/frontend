import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";

const useAddAnesthesia = () => {
  const [loading, setLoading] = useState(false);

  const createAnesthesia = useCallback(async (payload: { name: string }) => {
    setLoading(true);

    try {
      const response = await axiosClient.post(
        "/cases/anesthesia-type/",
        payload
      );
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return { success: true, message: "Berhasil Update Stase" };
      }
    } catch (e) {
      setLoading(false);
      console.log("[Error Update Stase]", e);
    }
  }, []);

  return {
    createAnesthesia,
    loading,
  };
};

export default useAddAnesthesia;
