import { ChangeEvent, useEffect, useState } from "react";
import { buttonSubmit } from "../styles";
import {
  Flex,
  Input,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import useAuth from "../../../../hooks/useAuth";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EmailPasswordInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    if (email === "" || password === "") {
      setIsError(true);
      return;
    }

    await loginAccount({ email: email, password: password });
  };

  useEffect(() => {
    if (loginResponse) {
      if (loginResponse.error === null) {
        toast({
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: false,
          title: "Login berhasil!",
        });

        navigate("/");
        return;
      }

      toast({
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
        title: "Login gagal",
        description: loginResponse.error[0],
      });
    }
  }, [loginResponse, navigate, toast]);

  return (
    <FormControl isInvalid={isError}>
      <Flex direction="column" gap={4} align="center">
        <Flex direction="column" gap={2}>
          <Text fontSize="md" color="#8B8B8B">
            Email
          </Text>
          <Input width={297} borderRadius={10} onChange={handleChangeEmail} />
        </Flex>

        <Flex direction="column" gap={2}>
          <Text fontSize="md" color="#8B8B8B">
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
          color="#662D91"
          marginTop={1}
          textDecoration="underline"
        >
          Lupa Password?
        </Text>

        <Button
          colorScheme="teal"
          className={buttonSubmit}
          backgroundColor="#662D91"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "..." : "Masuk"}
        </Button>
      </Flex>
    </FormControl>
  );
};

export default EmailPasswordInput;
