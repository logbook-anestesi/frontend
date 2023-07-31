import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";

const useAddProcedureType = () => {
  const [loading, setLoading] = useState(false);

  const createProcedureType = useCallback(async (payload: { name: string }) => {
    setLoading(true);

    try {
      const response = await axiosClient.post(
        "/cases/procedure-type/",
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
          message: "Berhasil Update Procedure",
          procedureTypeId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log("[Error Update Stase]", e);
    }
  }, []);

  return {
    createProcedureType,
    loading,
  };
};

export default useAddProcedureType;
