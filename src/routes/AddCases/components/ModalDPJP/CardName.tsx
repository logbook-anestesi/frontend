import { Divider, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { DPJP } from "../FormDPJP";

interface Props {
  dpjp: DPJP;
  setDPJP: Dispatch<SetStateAction<DPJP | undefined>>;
  closeModal: () => void;
}

const CardName = ({ dpjp, setDPJP, closeModal }: Props) => {
  const handleClickCard = () => {
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
