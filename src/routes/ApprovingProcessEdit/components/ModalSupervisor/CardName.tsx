import { Divider, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Supervisor } from "../../hooks/useGetSupervisor/types";
import { useApprovalEditDispatch } from "../../contexts";

interface Props {
  supervisor: Supervisor;
  setSupervisor: Dispatch<SetStateAction<Supervisor | undefined>>;
  closeModal: () => void;
}

const CardName = ({ setSupervisor, supervisor, closeModal }: Props) => {
  const casesDispatch = useApprovalEditDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: "set_supervisor",
      data: {
        supervisor: supervisor.name,
        id: supervisor.id,
      },
    });

    casesDispatch({
      type: "set_supervisor_ids",
      data: {
        supervisorId: supervisor.id,
      },
    });

    setSupervisor(supervisor);
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
      <Text>{supervisor.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardName;
