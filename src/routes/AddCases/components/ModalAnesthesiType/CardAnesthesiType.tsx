import { Divider, Flex, Text } from "@chakra-ui/react";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import { Dispatch, SetStateAction } from "react";
import { useAddCasesDispatch } from "../../contexts";

interface Props {
  anesthesia: AnesthesiaType;
  closeModal: () => void;
  setAnesthesia: Dispatch<SetStateAction<AnesthesiaType | undefined>>;
}

const CardAnesthesiType = ({
  anesthesia,
  closeModal,
  setAnesthesia,
}: Props) => {
  const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: "set_selected_anesthesia",
      data: {
        anesthesia: anesthesia.name,
      },
    });

    casesDispatch({
      type: "set_anethesia_type_ids",
      data: {
        anesthesiaId: anesthesia.id,
      },
    });

    setAnesthesia(anesthesia);
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
      <Text>{anesthesia.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardAnesthesiType;
