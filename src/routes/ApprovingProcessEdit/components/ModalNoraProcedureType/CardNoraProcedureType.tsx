import { Divider, Flex, Text } from "@chakra-ui/react";
import { NoraProcedureType } from "../../hooks/useGetCasesForm/types";
import { Dispatch, SetStateAction } from "react";
import { useApprovalEditDispatch } from "../../contexts";

interface Props {
  noraProcedure: NoraProcedureType;
  closeModal: () => void;
  setNoraProcedure: Dispatch<SetStateAction<NoraProcedureType | undefined>>;
}

const CardNoraProcedureType = ({
  noraProcedure,
  closeModal,
  setNoraProcedure,
}: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: "set_nora_procedure_type",
      data: {
        noraProcedureType: noraProcedure.name,
        id: noraProcedure.id,
      },
    });

    casesDispatch({
      type: "set_nora_procedure_type_ids",
      data: {
        noraProcedureId: noraProcedure.id,
      },
    });

    setNoraProcedure(noraProcedure);
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
      <Text>{noraProcedure.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardNoraProcedureType;
