import { Divider, Flex, Text } from "@chakra-ui/react";
import { AnesthesiaType } from "../../hooks/useGetCasesForm/types";
import { Dispatch, SetStateAction } from "react";
import { useApprovalEditDispatch } from "../../contexts";

interface Props {
  anesthesia: AnesthesiaType;
  closeModal: () => void;
  setAnesthesia: Dispatch<SetStateAction<AnesthesiaType | undefined>>;
  id: string;
}

const CardAnesthesiType = ({
  anesthesia,
  closeModal,
  setAnesthesia,
  id,
}: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: "set_selected_anesthesia",
      data: {
        id: id,
        title: anesthesia.name,
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
