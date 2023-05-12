import { Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Text
      fontSize="xs"
      position="absolute"
      bottom={0}
      backgroundColor="#F4F3F3"
      width="100%"
      align="center"
      padding={2}
    >
      © Departemen Anestesi FKUI 2023
    </Text>
  );
};

export default Footer;
