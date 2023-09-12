import { Box, Flex, Image, Text } from '@chakra-ui/react';

import doctorIcon from '../../assets/doctor.png';
import useGetProfile from '../../hooks/useGetProfile';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import LoaderCircle from '../../components/LoaderCircle';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePageOtherUser = () => {
  const location = useLocation();
  const { getProfileById, profileById, loading } = useGetProfile();

  useEffect(() => {
    getProfileById(location.state.userId);
  }, [getProfileById, location.state.userId]);

  const selectedProfileData = [
    {
      label: 'Nama',
      value: profileById?.name,
    },
    {
      label: 'NPM',
      value: profileById?.npm,
    },
    {
      label: 'Email',
      value: profileById?.email,
    },
    {
      label: 'No. Handphone',
      value: profileById?.phoneNumber,
    },
    {
      label: 'Term',
      value: profileById?.joinTerm,
    },
    {
      label: 'Level Kompetensi',
      value: profileById?.role,
    },
    {
      label: 'Stase',
      value: profileById?.stationName,
    },
  ];

  if (loading) {
    return (
      <Flex direction="column">
        <Header title="Profile" />
        <Box mb={20} />
        <LoaderCircle />
      </Flex>
    );
  }

  return (
    <Flex direction="column">
      <Header title="Profile Residen" />
      <Flex direction="column" gap="38px" padding="30px">
        <Flex direction="column" align="center" gap="8px">
          <Image
            src={profileById?.imageUrl || doctorIcon}
            width="80px"
            height="80px"
            mb={3}
          />
        </Flex>

        <Flex direction="column" gap="24px">
          {selectedProfileData.map((data) => {
            return (
              <Flex direction="column">
                <Text color={colors.darkGrey} fontSize="sm">
                  {data.label}
                </Text>
                <Text as="b" fontSize="sm">
                  {data.value}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfilePageOtherUser;
