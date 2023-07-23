import { Divider, Flex, Text } from "@chakra-ui/react";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  anashtesia: AnesthesiaType;
  closeModal: () => void;
  setAnesthesia: Dispatch<SetStateAction<AnesthesiaType | undefined>>;
}

const CardTypeProcedure = ({
  anashtesia,
  closeModal,
  setAnesthesia,
}: Props) => {
  const handleClickCard = () => {
    setAnesthesia(anashtesia);
    closeModal();
  };

  return (
    <Flex
      padding={2}
      direction="column"
      gap={3}
      fontSize="md"
      onClick={handleClickCard}
    >
      <Text>{anashtesia.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardTypeProcedure;
