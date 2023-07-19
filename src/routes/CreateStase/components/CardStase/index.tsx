import { Dispatch, SetStateAction } from "react";
import { Divider, Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { SelectedStase } from "../..";

interface Props {
  staseName: string;
  lecturer: string;
  id: string;
  setStase: Dispatch<SetStateAction<SelectedStase | undefined>>;
  closeModal: () => void;
}

const CardStase = ({
  lecturer,
  staseName,
  id,
  setStase,
  closeModal,
}: Props) => {
  return (
    <Flex
      direction="column"
      mt={2}
      onClick={() => {
        setStase({ id: id, name: staseName, lecturer: lecturer });
        closeModal();
      }}
    >
      <Text fontSize="sm" fontWeight="bold">
        {staseName}
      </Text>
      <Text fontSize="sm" color={colors.darkGrey}>
        Ketua: {lecturer}
      </Text>
      <Divider color={colors.darkGrey} mt={2} />
    </Flex>
  );
};

export default CardStase;
