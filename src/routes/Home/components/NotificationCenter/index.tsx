import { Flex } from '@chakra-ui/react';
import InfoBox from '../../../../components/InfoBox';
import useGetProfile from '../../../../hooks/useGetProfile';
import { getCurrentMonth } from '../../../../helpers';
import usetGetCounterNotificationResiden from '../../hooks/useReadNotificationsResiden';
import NotifPendingApproval from '../../../../components/NotifPendingApproval';

const NotificationCenter = () => {
  const { notificationCounterResiden } = usetGetCounterNotificationResiden();
  const { isResiden } = useGetProfile();

  if (isResiden) {
    return (
      <Flex direction="column" gap={3}>
        {notificationCounterResiden?.totalPendingApproval > 0 && (
          <NotifPendingApproval
            totalPending={notificationCounterResiden.totalPendingApproval}
          />
        )}

        {!notificationCounterResiden?.isCurrentMonthStationEntryExist && (
          <InfoBox
            type="alert"
            isStase
            staseDate={getCurrentMonth()}
            message="Anda belum memperbarui stase"
          />
        )}
      </Flex>
    );
  }

  return null;
};

export default NotificationCenter;
