import { Circle, Divider, Flex, Text, useToast } from '@chakra-ui/react';
import { Notification } from '../../hooks/useGetAllNotifications/types';
import { convertDateForNotification } from '../../../../helpers';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useReadNotifications from '../../hooks/useReadNotifications';
import LoaderCircle from '../../../../components/LoaderCircle';

interface Props {
  notification: Notification;
}

const NotificationItem = ({ notification }: Props) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { loading, readNotification } = useReadNotifications();

  const handleClick = async () => {
    const response = await readNotification(notification?.id);

    if (response?.success) {
      navigate(notification?.redirectUrl || '/');
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Failed Read Notification',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      return;
    }
  };

  const parsedDocument = useMemo(() => {
    const parser = new DOMParser();

    return parser.parseFromString(notification?.description, 'text/html').body
      .innerHTML;
  }, [notification?.description]);

  if (loading) {
    return <LoaderCircle />;
  }

  return (
    <Flex direction="column" gap="4px" onClick={handleClick}>
      <Text fontSize="xs" align="end" mt={2}>
        {convertDateForNotification(notification?.created)}
      </Text>

      {!notification?.isRead && <Circle size="10px" bg="tomato" mb={2} />}

      <Text as="b" fontSize="sm">
        {notification?.title}
      </Text>
      <Text fontSize="sm">{parsedDocument}</Text>
      <Divider />
    </Flex>
  );
};

export default NotificationItem;
