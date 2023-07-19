import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SelectedStase } from "../..";

interface Props {
  onOpen: () => void;
  selectedStase?: SelectedStase;
}
const StaseDropdown = ({ onOpen, selectedStase }: Props) => {
  return (
    <Flex gap={2} direction="column">
      <Text color={colors.darkGrey} fontSize="sm">
        Stase yang akan diambil
      </Text>
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        padding="6px 10px"
        onClick={onOpen}
        justify="space-between"
        align="center"
      >
        <Flex flexDirection="column">
          <Text as={selectedStase?.name ? "b" : "p"}>
            {selectedStase?.name || "Pilih Stase"}
          </Text>
          {selectedStase?.name && (
            <>
              <Text fontSize="sm" color={colors.darkGrey} mt={2}>
                Ketua Modul:
              </Text>
              <Text fontSize="sm" color={colors.darkGrey}>
                {selectedStase?.lecturer}
              </Text>
            </>
          )}
        </Flex>

        <ChevronDownIcon boxSize="35px" />
      </Flex>
    </Flex>
  );
};

export default StaseDropdown;
