import React, { ChangeEvent, useEffect, useState } from 'react';
import { buttonSubmit } from '../styles';
import {
  Flex,
  Input,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import useAuth from '../../../../hooks/useAuth';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../../constants/colors';
import LoaderCircle from '../../../../components/LoaderCircle';

const EmailPasswordInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  const { loginAccount, loginResponse, loading } = useAuth();

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async () => {
    setIsError(false);

    if (email === '' || password === '') {
      setIsError(true);
      return;
    }

    await loginAccount({ email: email, password: password });
  };

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (loginResponse) {
      if (loginResponse.error === null) {
        toast({
          position: 'top',
          status: 'success',
          duration: 2000,
          isClosable: false,
          title: 'Login berhasil!',
        });

        navigate('/');
        return;
      }

      toast({
        position: 'top',
        status: 'error',
        duration: 3000,
        isClosable: true,
        title: 'Login gagal',
        description: loginResponse.message[0],
      });
    }
  }, [loginResponse, navigate, toast]);

  return (
    <FormControl isInvalid={isError} onKeyDown={handleOnKeyDown}>
      <Flex direction="column" gap={4} align="center">
        <Flex direction="column" gap={2}>
          <Text fontSize="md" color={colors.darkGrey}>
            Email
          </Text>
          <Input width={297} borderRadius={10} onChange={handleChangeEmail} />
        </Flex>

        <Flex direction="column" gap={2}>
          <Text fontSize="md" color={colors.darkGrey}>
            Password
          </Text>
          <Input
            width={297}
            borderRadius={10}
            type="password"
            onChange={handleChangePassword}
          />
        </Flex>

        {isError && (
          <FormErrorMessage>Email dan Password harus diisi</FormErrorMessage>
        )}

        <Text
          fontSize="xs"
          color={colors.primaryPurple}
          marginTop={1}
          textDecoration="underline"
          onClick={() => navigate('/forgot-password')}
        >
          Lupa Password?
        </Text>

        <Button
          colorScheme="teal"
          className={buttonSubmit}
          backgroundColor={colors.primaryPurple}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <LoaderCircle /> : 'Masuk'}
        </Button>
      </Flex>
    </FormControl>
  );
};

export default EmailPasswordInput;
