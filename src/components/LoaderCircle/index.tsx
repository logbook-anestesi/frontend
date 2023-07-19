import { Flex, Spinner } from "@chakra-ui/react";

const LoaderCircle = () => {
  return (
    <Flex justifyContent="center">
      <Spinner />
    </Flex>
  );
};

export default LoaderCircle;
