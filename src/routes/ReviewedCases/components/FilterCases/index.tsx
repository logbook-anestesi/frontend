import { Flex, Input, InputGroup, Text } from '@chakra-ui/react';

const FilterCases = () => {
  return (
    <Flex direction="column" gap={3}>
      <Text as="b">Daftar Cases</Text>

      <InputGroup>
        <Input
          placeholder="Cari berdasarkan attribute"
          size="sm"
          borderRadius={4}
        />
      </InputGroup>
    </Flex>
  );
};

export default FilterCases;
