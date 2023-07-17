import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import { colors } from "../../constants/colors";
import profileDummy from "./assets/profileDummy.png";
import { dummyDataProfile } from "./constants";

const ProfilePage = () => {
  return (
    <div>
      <Header title="Profile" pathBack="/" />
      <Flex direction="column" gap="38px" padding="30px">
        <Flex direction="column" align="center" gap="8px">
          <Image src={profileDummy} width="135px" height="135px" />
          <Text as="b" fontSize="xs" color={colors.primaryPurple}>
            Ganti Foto
          </Text>
        </Flex>

        <Flex direction="column" gap="24px">
          {dummyDataProfile.map((data) => (
            <Flex direction="column">
              <Text color={colors.darkGrey} fontSize="sm">
                {data.title}
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
    </div>
  );
};

export default ProfilePage;
