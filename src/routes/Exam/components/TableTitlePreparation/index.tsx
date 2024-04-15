import { Flex, Text } from '@chakra-ui/react';

const TableTitlePreparation = () => {
  return (
    <Flex direction="column" gap="10px">
      <Flex direction="row" justify="space-between" align="center">
        <Text as="b">Riwayat Persiapan Ujian</Text>
      </Flex>
    </Flex>
  );
};

export default TableTitlePreparation;
