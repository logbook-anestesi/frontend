import { Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { useState } from 'react';
import useGetOtp from './hooks/useGetOtp';
import { validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const { loading, requestOTP } = useGetOtp();

  const handleSubmit = async () => {
    if (email === '') {
      toast({
        title: 'Email tidak boleh kosong',
        status: 'error',
        position: 'top',
        duration: 3000,
      });

      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: 'Harap gunakan email yang sesuai',
        status: 'error',
        position: 'top',
        duration: 3000,
      });

      return;
    }

    const response = await requestOTP({
      email: email,
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'OTP Berhasil Dikirim ke Email',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      navigate('/forgot-password/set', {
        state: {
          email: email,
        },
      });
    }

    if (!response?.success) {
      toast({
        title: 'OTP Gagal Dikirim',
        description: response?.message,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Masukkan email anda ..."
            type="email"
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
          onClick={handleSubmit}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ForgotPasswordPage;
