import { Flex, Image } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { colors } from '../../../../constants/colors';
import logbookIcon from '../../../../assets/logbook-icon.svg';
import profileIcon from '../../assets/profile.png';
import unreadBell from '../../assets/notif-unread.png';
import { useNavigate } from 'react-router-dom';
import useGetAllNotifications from '../../../Notifications/hooks/useGetAllNotifications';
import { useMemo } from 'react';

const HeaderHome = () => {
  const { notifications } = useGetAllNotifications();
  const navigate = useNavigate();

  const isHaveUnreadNotification = useMemo(() => {
    const unreadNotif = notifications?.find((notif) => notif.isRead === false);

    return unreadNotif ? true : false;
  }, [notifications]);

  const handleNotification = () => {
    navigate('/notifications');
  };

  const handleRedirectProfile = () => {
    navigate('/profile');
  };

  return (
    <Flex
      justify="space-between"
      width="100%"
      marginBottom="32px"
      position="sticky"
      top={0}
      paddingTop="8"
      paddingBottom="2"
      backgroundColor="white"
    >
      <Image
        width={33}
        height={33}
        backgroundColor={colors.lightGrey}
        borderRadius="10px"
        padding="8px"
        color={colors.primaryPurple}
        src={profileIcon}
        onClick={handleRedirectProfile}
      />

      <Image src={logbookIcon} maxWidth="109px" />

      {isHaveUnreadNotification ? (
        <Image
          width={33}
          height={33}
          backgroundColor={colors.lightGrey}
          borderRadius="10px"
          padding="3px"
          color={colors.primaryPurple}
          src={unreadBell}
          onClick={handleNotification}
        />
      ) : (
        <BellIcon
          width={33}
          height={33}
          backgroundColor={colors.lightGrey}
          borderRadius="10px"
          padding="8px"
          color={colors.primaryPurple}
          onClick={handleNotification}
        />
      )}
    </Flex>
  );
};

export default HeaderHome;
