import { Divider, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { DPJP } from "../../hooks/useGetDPJP/types";
import { useAddCasesDispatch } from "../../contexts";

interface Props {
  dpjp: DPJP;
  setDPJP: Dispatch<SetStateAction<DPJP | undefined>>;
  closeModal: () => void;
}

const CardName = ({ dpjp, setDPJP, closeModal }: Props) => {
  const casesDispatch = useAddCasesDispatch();

  const handleClickCard = () => {
    casesDispatch({
      type: "set_dpjp",
      data: {
        dpjpId: dpjp.id,
      },
    });

    setDPJP(dpjp);
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
      <Text>{dpjp.name}</Text>
      <Divider />
    </Flex>
  );
};

export default CardName;
