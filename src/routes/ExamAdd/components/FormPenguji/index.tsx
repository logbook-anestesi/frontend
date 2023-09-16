import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../../../assets/profile-white.png';
import { useState } from 'react';
import { DPJP } from '../../../AddCases/hooks/useGetDPJP/types';
import ModalPenguji from '../ModalPenguji';

interface Props {
  setPengujiId: React.Dispatch<React.SetStateAction<string>>;
}

const FormPenguji = ({ setPengujiId }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedPenguji, setSelectedPenguji] = useState<DPJP>();

  const handleSetPenguji = (dpjp: DPJP) => {
    setPengujiId(dpjp.id);
    setSelectedPenguji(dpjp);
  };

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Penguji*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        mb={1}
      >
        <Text>{selectedPenguji?.name || 'Pilih Penguji'}</Text>

        <Image src={profileIcon} width={5} alt="" />
      </Flex>

      <ModalPenguji
        isOpen={isOpen}
        closeModal={onClose}
        setPenguji={handleSetPenguji}
      />
    </Flex>
  );
};

export default FormPenguji;
