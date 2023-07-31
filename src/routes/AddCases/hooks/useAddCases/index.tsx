import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { CreateCasePayload } from "./types";

const useAddCases = () => {
  const [loading, setLoading] = useState(false);

  const createCases = useCallback(async (payload: CreateCasePayload) => {
    setLoading(true);

    try {
      const response = await axiosClient.post("/cases/", payload);
      const data = response.data;

      setLoading(false);

      if (data.error) {
        return { success: false, message: data?.message[0] };
      }

      if (!data.error) {
        return {
          success: true,
          message: "Berhasil Create Stase",
          casesId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log("[Error Update Stase]", e);
    }
  }, []);

  return {
    createCases,
    loading,
  };
};

export default useAddCases;
