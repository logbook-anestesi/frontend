import { Divider, Flex, Text } from "@chakra-ui/react";
import { Notification } from "../../hooks/useGetAllNotifications/types";
import { convertDateForNotification } from "../../../../helpers";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  notification: Notification;
}

const NotificationItem = ({ notification }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(notification?.redirectUrl || "/");
  };

  const parsedDocument = useMemo(() => {
    const parser = new DOMParser();

    return parser.parseFromString(notification?.description, "text/html").body
      .innerHTML;
  }, [notification?.description]);

  return (
    <Flex direction="column" gap="4px" onClick={handleNavigate}>
      <Text fontSize="xs" align="end" mt={2}>
        {convertDateForNotification(notification?.created)}
      </Text>

      {/* Temporary disable, waiting for BE API */}
      {/* {!notification?.isRead && <Circle size="10px" bg="tomato" />} */}

      <Text as="b" fontSize="sm">
        {notification?.title}
      </Text>
      <Text fontSize="sm">{parsedDocument}</Text>
      <Divider />
    </Flex>
  );
};

export default NotificationItem;
