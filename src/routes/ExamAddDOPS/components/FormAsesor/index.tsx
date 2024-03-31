import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../../../assets/profile-white.png';
import { useEffect, useState } from 'react';
import { DPJP } from '../../../AddCases/hooks/useGetDPJP/types';
import ModalAsesor from '../ModalAsesor';

interface Props {
  setAsesor: React.Dispatch<React.SetStateAction<DPJP | undefined>>;
}

const FormAsesor = ({ setAsesor }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedAsesor, setSelectedAsesor] = useState<DPJP>();

  useEffect(() => {
    setAsesor(selectedAsesor);
  }, [selectedAsesor]);

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Nama Asesor
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
        <Text>{selectedAsesor?.name || 'Pilih Asesor'}</Text>

        <Image src={profileIcon} width={5} alt="" />
      </Flex>

      <ModalAsesor
        isOpen={isOpen}
        closeModal={onClose}
        setAsesor={setSelectedAsesor}
      />
    </Flex>
  );
};

export default FormAsesor;
