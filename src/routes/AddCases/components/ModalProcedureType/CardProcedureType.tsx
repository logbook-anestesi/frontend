import { Divider, Flex, Text } from "@chakra-ui/react";
import { ProcedureType } from "../../hooks/useGetCasesForm/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  procedure: ProcedureType;
  closeModal: () => void;
  setProcedure: Dispatch<SetStateAction<ProcedureType | undefined>>;
}

const CardProcedureType = ({ procedure, closeModal, setProcedure }: Props) => {
  // const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    // casesDispatch({
    //   type: "set_selected_anesthesia",
    //   data: {
    //     anesthesia: procedure.name,
    //   },
    // });

    // casesDispatch({
    //   type: "set_anethesia_type_ids",
    //   data: {
    //     anesthesiaId: procedure.id,
    //   },
    // });

    setProcedure(procedure);
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
      <Text>{procedure.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardProcedureType;
