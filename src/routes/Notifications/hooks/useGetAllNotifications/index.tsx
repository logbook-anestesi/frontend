import { useEffect, useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { Notification } from "./types";

const useGetAllNotifications = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axiosClient.get("/notification");
      const data = await response.data.data;

      setNotifications(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    notifications,
    loading,
  };
};

export default useGetAllNotifications;
