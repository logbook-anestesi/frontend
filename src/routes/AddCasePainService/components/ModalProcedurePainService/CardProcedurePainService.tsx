import { Divider, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import {
  PainServiceProcedure,
  PainServiceType,
} from "../../../../hooks/useGetCasesForm/types";
import { useAddCasesDispatch } from "../../../AddCases/contexts";

interface Props {
  procedurePainService: PainServiceProcedure;
  closeModal: () => void;
  setProcedurePainService: Dispatch<
    SetStateAction<PainServiceType | undefined>
  >;
}

const CardProcedurePainService = ({
  procedurePainService,
  closeModal,
  setProcedurePainService,
}: Props) => {
  const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: "set_procedure_pain_service",
      data: {
        procedurePainName: procedurePainService.name,
        procedurePainId: procedurePainService.id,
      },
    });

    casesDispatch({
      type: "set_procedure_pain_ids",
      data: {
        procedurePainId: procedurePainService.id,
      },
    });

    setProcedurePainService(procedurePainService);
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
      <Text>{procedurePainService.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardProcedurePainService;
