import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../assets/profile.png';
import { useCallback, useState } from 'react';
import { Supervisor } from '../../hooks/useGetSupervisor/types';
import ModalSupervisor from '../ModalSupervisor';
import { useAddCasesContext, useAddCasesDispatch } from '../../contexts';
import Ticker from '../../../../components/Ticker';
import useGetProfile from '../../../../hooks/useGetProfile';

const FormSupervised = () => {
  const casesDispatch = useAddCasesDispatch();
  const { selectedSupervisor: supervisorList } = useAddCasesContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedSupervisor, setSelectedSupervisor] = useState<Supervisor>();
  const { profile } = useGetProfile();

  const handleRemoveSupervisor = useCallback(
    (superVisorId: string) => {
      casesDispatch({
        type: 'remove_supervisor',
        data: {
          id: superVisorId,
        },
      });
    },
    [casesDispatch],
  );

  return (
    <Flex direction="column" gap={1}>
      {profile?.competenceName === 'PEMBEKALAN' ? (
        <Text fontSize="sm" color={colors.darkGrey}>
          Disupervisi Oleh
        </Text>
      ) : (
        <Text fontSize="sm" color={colors.darkGrey}>
          Supervising
        </Text>
      )}

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        onClick={onOpen}
        mb={1}
      >
        <Text>{selectedSupervisor?.name || 'Masukkan Supervisor'}</Text>

        <Image src={profileIcon} width={5} alt="" />
      </Flex>

      <Flex
        mt={1}
        gap={2}
        overflowX="auto"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {supervisorList.map((supervisor, idx) => (
          <Ticker
            text={supervisor.name}
            key={idx}
            isShowClose
            onClick={() => handleRemoveSupervisor(supervisor.id)}
          />
        ))}
      </Flex>

      <ModalSupervisor
        isOpen={isOpen}
        closeModal={onClose}
        setSupervisor={setSelectedSupervisor}
      />
    </Flex>
  );
};

export default FormSupervised;
