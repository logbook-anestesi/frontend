import { Flex, Input, InputGroup, Text } from '@chakra-ui/react';

interface Props {
  onChange: (type: string) => void;
}

const FilterCases = ({ onChange }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Flex direction="column" gap={3}>
      <Text as="b">Daftar Cases</Text>

      <InputGroup>
        <Input
          placeholder="Cari berdasarkan attribute"
          size="sm"
          borderRadius={4}
          onChange={handleInputChange}
        />
      </InputGroup>
    </Flex>
  );
};

export default FilterCases;
