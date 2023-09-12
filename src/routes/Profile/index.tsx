import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

import doctorIcon from "../../assets/doctor.png";
import useGetProfile from "../../hooks/useGetProfile";
import Header from "../../components/Header";
import { colors } from "../../constants/colors";
import LoaderCircle from "../../components/LoaderCircle";
import useAuth from "../../hooks/useAuth";
import { useMemo, useState } from "react";
import UploadPhoto from "./components/UploadPhoto";

const ProfilePage = () => {
  const { loading, profile } = useGetProfile();
  const { logoutAccount } = useAuth();
  const [temporaryImage, setTemporaryImage] = useState("");

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
    {
      label: "Stase",
      value: profile?.stationName,
    },
  ];

  const konsulenProfileData = [
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
      label: "Stase",
      value: profile?.stationName,
    },
  ];

  const isKonsulen = useMemo(() => {
    return profile?.role === "KONSULEN";
  }, [profile?.role]);

  const profileImage = () => {
    if (temporaryImage === "") {
      return profile?.imageUrl || doctorIcon;
    }

    return temporaryImage;
  };

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
      <Header title="Profile" />
      <Flex direction="column" gap="38px" padding="30px">
        <Flex direction="column" align="center" gap="8px">
          <Image src={profileImage()} width="80px" height="80px" mb={3} />

          <UploadPhoto setTemporaryImage={setTemporaryImage} />

          <Input
            type="file"
            display="none"
            id="file-input"
            // onChange={handleFileChange}
          />
        </Flex>

        {!isKonsulen && (
          <Flex direction="column" gap="24px">
            {selectedProfileData.map((data, idx) => {
              return (
                <Flex direction="column" key={`residen-data-${idx}`}>
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
        )}

        {isKonsulen && (
          <Flex direction="column" gap="24px">
            {konsulenProfileData.map((data, idx) => {
              return (
                <Flex direction="column" key={`konsulen-data-${idx}`}>
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
        )}

        <Button
          color={colors.white}
          backgroundColor={colors.primaryPurple}
          colorScheme={colors.lightPurple}
          onClick={logoutAccount}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
