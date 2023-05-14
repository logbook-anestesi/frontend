import { Flex, Image, Text } from "@chakra-ui/react";
import Ticker from "../../../../components/Ticker";
import { colors } from "../../../../constants/colors";

interface ProfileInterface {
  image: string;
  name: string;
  term: string;
}

const Profile = ({ image, name, term }: ProfileInterface) => {
  return (
    <Flex gap="16px" align="center">
      <Image src={image} borderRadius="full" boxSize="58px" />
      <Flex direction="column" width="100%" gap="7px">
        <Text as="b">{name}</Text>

        <Flex justify="space-between">
          <Ticker text={term} />
          <Text as="b" fontSize="12px" color={colors.primaryPurple}>
            Lihat Profil
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
