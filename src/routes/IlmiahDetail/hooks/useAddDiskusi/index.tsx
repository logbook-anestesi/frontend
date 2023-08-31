import { useCallback, useState } from "react";
import axiosClient from "../../../../networks/apiClient";

interface PayloadType {
  scientificGraduationId: string;
  title: string;
  description: string;
  discussionDate: string;
  approvalUserId: string;
}

const useAddDiskusi = () => {
  const [loading, setLoading] = useState(false);

  const createRiwayatDiskusi = useCallback(async (payload: PayloadType) => {
    setLoading(true);

    try {
      const response = await axiosClient.post(
        "/scientific/discussion-history",
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
          message: "Berhasil Menambahkan Diskusi",
          anesthesiaId: data.data.id,
        };
      }
    } catch (e) {
      setLoading(false);
      console.log("[Error Menambahkan Diskusi]", e);
    }
  }, []);

  return {
    createRiwayatDiskusi,
    loading,
  };
};

export default useAddDiskusi;
