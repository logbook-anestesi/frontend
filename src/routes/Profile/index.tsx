import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import doctorIcon from "../../assets/doctor.png";
import useGetProfile from "../../hooks/useGetProfile";
import Header from "../../components/Header";
import { colors } from "../../constants/colors";
import LoaderCircle from "../../components/LoaderCircle";

const ProfilePage = () => {
  const { loading, profile } = useGetProfile();

  const selectedProfileData = [
    {
      label: "Nama",
      value: profile?.name,
    },
    {
      label: "NPM",
      value: profile?.npm,
    },
    {
      label: "Email",
      value: profile?.email,
    },
    {
      label: "No. Handphone",
      value: profile?.phoneNumber,
    },
    {
      label: "Term",
      value: profile?.joinTerm,
    },
    {
      label: "Level Kompetensi",
      value: profile?.role,
    },
  ];

  if (loading) {
    return (
      <Flex direction="column">
        <Header title="Profile" pathBack="/" />
        <Box mb={20} />
        <LoaderCircle />
      </Flex>
    );
  }

  return (
    <Flex direction="column">
      <Header title="Profile" pathBack="/" />
      <Flex direction="column" gap="38px" padding="30px">
        <Flex direction="column" align="center" gap="8px">
          <Image
            src={profile?.imageUrl || doctorIcon}
            width="80px"
            height="80px"
            mb={3}
          />
          <Text as="b" fontSize="xs" color={colors.primaryPurple}>
            Ganti Foto
          </Text>
        </Flex>

        <Flex direction="column" gap="24px">
          {selectedProfileData.map((data) => (
            <Flex direction="column">
              <Text color={colors.darkGrey} fontSize="sm">
                {data.label}
              </Text>
              <Text as="b" fontSize="sm">
                {data.value}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Button
          color={colors.white}
          backgroundColor={colors.primaryPurple}
          colorScheme={colors.lightPurple}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
