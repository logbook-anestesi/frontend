import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { ReviewItem } from "./types";
import useGetPengajuanPembimbing from "../../../Ilmiah/hooks/useGetPengajuanPembimbing";

const useGetScientificApprovals = () => {
  const [loading, setLoading] = useState(false);
  const [reviewData, setReviewData] = useState<ReviewItem[]>([]);
  const {mutate} = useGetPengajuanPembimbing();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/scientific/approval/");
      const data = await response.data.data;

      mutate();
      setLoading(false);
      setReviewData(data);
    };

    fetchData();
  }, [mutate]);

  return {
    reviewData,
    loading,
  };
};

export default useGetScientificApprovals;
