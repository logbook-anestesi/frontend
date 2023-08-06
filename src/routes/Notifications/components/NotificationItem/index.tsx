import { Circle, Divider, Flex, Text } from "@chakra-ui/react";
import { Notification } from "../../hooks/useGetAllNotifications/types";
import { convertDateForNotification } from "../../../../helpers";
import { useMemo } from "react";

interface Props {
  notification: Notification;
}

const NotificationItem = ({ notification }: Props) => {
  const parsedDocument = useMemo(() => {
    const parser = new DOMParser();

    return parser.parseFromString(notification?.description, "text/html").body
      .innerHTML;
  }, [notification?.description]);

  return (
    <Flex direction="column" gap="4px">
      <Text fontSize="xs" align="end">
        {convertDateForNotification(notification?.created)}
      </Text>

      {!notification?.isRead && <Circle size="10px" bg="tomato" />}

      <Text as="b" fontSize="sm">
        {notification?.title}
      </Text>
      <Text fontSize="sm">{parsedDocument}</Text>
      <Divider />
    </Flex>
  );
};

export default NotificationItem;
