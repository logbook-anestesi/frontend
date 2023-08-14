import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import ListNotifications from "./components/ListNotifications";

const NotificationsPage = () => {
  return (
    <Flex direction="column">
      <Header title="Notifikasi" />
      <Flex direction="column" padding="30px" gap="8px">
        <ListNotifications />
      </Flex>
    </Flex>
  );
};

export default NotificationsPage;
