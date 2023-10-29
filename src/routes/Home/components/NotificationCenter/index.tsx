import { Flex } from '@chakra-ui/react';
import InfoBox from '../../../../components/InfoBox';
import useGetProfile from '../../../../hooks/useGetProfile';
import { getCurrentMonth } from '../../../../helpers';

const NotificationCenter = () => {
  const { isKSPSPS, isKonsulen, isResiden, profile } = useGetProfile();

  if (isResiden) {
    return (
      <Flex direction="column" gap={3}>
        {profile?.stationName === null && (
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

  if (isKonsulen) {
    return <Flex></Flex>;
  }

  if (isKSPSPS) {
    return <Flex></Flex>;
  }

  return null;
};

export default NotificationCenter;
