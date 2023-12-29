import { Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { useState } from 'react';
import useResetPassword from './hooks/useResetPassword';
import { useLocation, useNavigate } from 'react-router-dom';

const ForgotPasswordSetPage = () => {
  const toast = useToast();
  const location = useLocation();
  const { loading, requestResetPassword } = useResetPassword();

  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateInput = () => {
    if (otp === '' || password === '' || confirmPassword === '') {
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateInput()) {
      toast({
        title: 'Harap lengkapi semua data',
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const response = await requestResetPassword({
      otp: otp,
      confirmationPassword: confirmPassword,
      email: location.state.email,
      password: password,
    });

    if (response?.success) {
      toast({
        title: 'Success',
        description: 'Password Berhasil Diubah',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      navigate(-2);
      return;
    }

    if (!response?.success) {
      toast({
        title: 'Gagal Reset Password',
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
            OTP*
          </Text>
          <Input
            borderRadius={10}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            placeholder="Masukkan OTP"
            type="number"
          />

          <Text fontSize="sm" color={colors.darkGrey} mb={2} mt={8}>
            Password Baru*
          </Text>
          <Input
            borderRadius={10}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />

          <Text fontSize="sm" color={colors.darkGrey} mb={2} mt={8}>
            Konfirmasi Password Baru*
          </Text>
          <Input
            borderRadius={10}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
          />
        </Flex>

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

export default ForgotPasswordSetPage;
