import { Button, Flex, Input, Text } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';

const ForgotPasswordPage = () => {
  return (
    <Flex direction="column">
      <Header title="Lupa Password" />

      <Flex padding="10px 30px" direction="column" mt={5}>
        <Flex direction="column">
          <Text fontSize="sm" color={colors.darkGrey} mb={2}>
            Email*
          </Text>
          <Input
            borderRadius={10}
            onChange={() => {}}
            placeholder="Masukkan email anda ..."
          />
        </Flex>

        <Text
          fontSize="sm"
          color={colors.darkGrey}
          align="center"
          mt={5}
          px={10}
        >
          OTP untuk mengganti password akan dikirim ke email Anda
        </Text>

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          mt={20}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ForgotPasswordPage;
