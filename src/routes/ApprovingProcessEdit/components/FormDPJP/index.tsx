import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../assets/profile.png';
import ModalDPJP from '../ModalDPJP';
import { useEffect, useState } from 'react';
import { DPJP } from '../../hooks/useGetDPJP/types';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialDpjpName?: string;
  initialDpjpId?: string;
}

const FormDPJP = ({ initialDpjpId, initialDpjpName }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedDPJP, setSelectedDPJP] = useState<DPJP>();

  useEffect(() => {
    approveEditDispatch({
      type: 'set_dpjp',
      data: {
        dpjpId: selectedDPJP?.id || initialDpjpId || '',
        dpjpName: selectedDPJP?.name || initialDpjpName || '',
      },
    });
  }, [
    approveEditDispatch,
    initialDpjpId,
    initialDpjpName,
    selectedDPJP?.id,
    selectedDPJP?.name,
  ]);

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        DPJP*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        // onClick={handleButtonClick}
        mb={1}
      >
        <Text>{selectedDPJP?.name || initialDpjpName || 'Pilih DPJP'}</Text>

        <Image src={profileIcon} width={5} alt="" />
      </Flex>

      <ModalDPJP
        isOpen={isOpen}
        closeModal={onClose}
        setDPJP={setSelectedDPJP}
      />
    </Flex>
  );
};

export default FormDPJP;
