import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Stase } from "../../hooks/useGetAllStase/types";

interface Props {
  onOpen: () => void;
  selectedStase?: Stase;
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
          <Text as={selectedStase?.stationName ? "b" : "p"}>
            {selectedStase?.stationName || "Pilih Stase"}
          </Text>
          {selectedStase?.stationName && (
            <>
              <Text fontSize="sm" color={colors.darkGrey} mt={2}>
                Ketua Modul:
              </Text>
              <Text fontSize="sm" color={colors.darkGrey}>
                {selectedStase?.leaderName}
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
