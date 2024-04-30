import { Divider, Flex, Text } from '@chakra-ui/react';

const EmptyData = () => {
  return (
    <Flex justify="center" align="center" direction="column">
      <Divider />
      <Text mt={2}>Tidak ada data</Text>
    </Flex>
  );
};

export default EmptyData;
