import { Flex } from "@chakra-ui/react";
import useGetAllNotifications from "../../hooks/useGetAllNotifications";
import LoaderCircle from "../../../../components/LoaderCircle";
import NotificationItem from "../NotificationItem";

const ListNotifications = () => {
  const { notifications, loading } = useGetAllNotifications();

  if (loading) {
    return <LoaderCircle />;
  }

  return (
    <Flex direction="column">
      {notifications?.map((notification) => (
        <NotificationItem notification={notification} />
      ))}
    </Flex>
  );
};

export default ListNotifications;
