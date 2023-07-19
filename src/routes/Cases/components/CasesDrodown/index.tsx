import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

const CasesDropdown = ({ onClick }: Props) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      padding="6px 10px 6px 18px"
      // onClick={onOpen}
      justify="space-between"
      align="center"
      onClick={onClick}
    >
      <Text>OK/Surgery</Text>

      <ChevronDownIcon boxSize="35px" />
    </Flex>
  );
};

export default CasesDropdown;
