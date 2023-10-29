import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../../../assets/profile-white.png';
import { useEffect, useState } from 'react';
import { DPJP } from '../../../AddCases/hooks/useGetDPJP/types';
import ModalPenguji from '../ModalPenguji';

interface Props {
  setPenguji: React.Dispatch<React.SetStateAction<DPJP | undefined>>;
}

const FormPenguji = ({ setPenguji }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedPenguji, setSelectedPenguji] = useState<DPJP>();

  useEffect(() => {
    setPenguji(selectedPenguji);
  }, [selectedPenguji]);

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Penguji
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
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
        setPenguji={setSelectedPenguji}
      />
    </Flex>
  );
};

export default FormPenguji;
