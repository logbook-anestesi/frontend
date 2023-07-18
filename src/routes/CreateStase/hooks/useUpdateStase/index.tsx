import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";

const useUpdateStase = () => {
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    async (payload: {
      stationId: string;
      userId: string;
      periodMmYyyy: string;
    }) => {
      setLoading(true);

      try {
        const response = await axiosClient.post("/station/entry", payload);
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
    },
    []
  );

  return { postData, loading };
};

export default useUpdateStase;
