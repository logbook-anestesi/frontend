import { Divider, Flex, Text } from "@chakra-ui/react";
import { ProcedureType } from "../../hooks/useGetCasesForm/types";
import { Dispatch, SetStateAction } from "react";
import { useApprovalEditDispatch } from "../../contexts";

interface Props {
  procedure: ProcedureType;
  closeModal: () => void;
  setProcedure: Dispatch<SetStateAction<ProcedureType | undefined>>;
}

const CardProcedureType = ({ procedure, closeModal, setProcedure }: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: "set_procedure_type",
      data: {
        procedureType: procedure.name,
        procedureId: procedure.id,
      },
    });

    casesDispatch({
      type: "set_procedure_type_ids",
      data: {
        procedureId: procedure.id,
      },
    });

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
