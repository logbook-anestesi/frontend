import { Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Ticker from "../../../../components/Ticker";
import { colors } from "../../../../constants/colors";

interface ProfileInterface {
  image: string;
  name: string;
  term: string | number;
}

const Profile = ({ image, name, term }: ProfileInterface) => {
  const navigate = useNavigate();

  const redirectProfile = () => {
    navigate("/profile");
  };

  return (
    <Flex gap="16px" align="center">
      <Image src={image} boxSize="58px" />
      <Flex direction="column" width="100%" gap="7px">
        <Text as="b">{name}</Text>

        <Flex justify="space-between">
          <Ticker text={`Term ${term.toString()}`} />
          <Text
            as="b"
            fontSize="12px"
            color={colors.primaryPurple}
            onClick={redirectProfile}
          >
            Lihat Profil
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
