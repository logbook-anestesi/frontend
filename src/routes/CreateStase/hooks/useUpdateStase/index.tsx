import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import useGetStaseUser from "../../../Stase/hooks/useGetStaseUser";

const useUpdateStase = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useGetStaseUser();

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

        mutate();
        setLoading(false);

        if (data.error) {
          return { success: false, message: data?.message[0] };
        }

        if (!data.error) {
          return { success: true, message: "Berhasil Update Stase" };
        }
      } catch (e) {
        mutate();
        setLoading(false);
        console.log("[Error Update Stase]", e);
      }
    },
    [mutate]
  );

  return { postData, loading };
};

export default useUpdateStase;
