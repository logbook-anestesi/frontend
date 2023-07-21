import { Divider, Flex, Text } from "@chakra-ui/react";

interface Props {
  name: string;
}

const CardName = ({ name }: Props) => {
  return (
    <Flex padding={2} direction="column" gap={3} fontSize="md">
      <Text>{name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardName;
