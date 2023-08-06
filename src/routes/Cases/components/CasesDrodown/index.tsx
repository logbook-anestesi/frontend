import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { CaseMenu } from "../../types";

interface Props {
  onClick: () => void;
  selectedCase: CaseMenu;
}

const CasesDropdown = ({ onClick, selectedCase }: Props) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius={10}
      padding="6px 10px 6px 18px"
      justify="space-between"
      align="center"
      onClick={onClick}
      mb={2}
    >
      <Text>{selectedCase?.title}</Text>

      <ChevronDownIcon boxSize="35px" />
    </Flex>
  );
};

export default CasesDropdown;
