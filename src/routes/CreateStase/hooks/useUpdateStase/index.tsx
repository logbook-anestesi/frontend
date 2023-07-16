import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { useToast } from "@chakra-ui/react";

const useUpdateStase = () => {
  const toast = useToast();
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

        if (data.error) {
          toast({
            position: "top",
            status: "error",
            duration: 2000,
            isClosable: true,
            title: "Gagal Update Stase",
            description: data.message[0],
          });
        }

        if (!data.error) {
          toast({
            position: "top",
            status: "success",
            duration: 2000,
            isClosable: true,
            title: "Berhasil Update Stase",
          });
        }
      } catch (e) {
        console.log("[Error Update Stase]", e);
      }

      setLoading(false);
    },
    [toast]
  );

  return { postData, loading };
};

export default useUpdateStase;
