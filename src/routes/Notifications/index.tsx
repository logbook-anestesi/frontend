import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import NotificationItem from "./components/NotificationItem";

const NotificationsPage = () => {
  return (
    <div>
      <Header pathBack="/" title="Notifikasi" />
      <Flex direction="column" padding="30px" gap="8px">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </Flex>
    </div>
  );
};

export default NotificationsPage;
