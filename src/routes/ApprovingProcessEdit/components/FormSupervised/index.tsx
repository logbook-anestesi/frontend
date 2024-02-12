import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../assets/profile.png';
import { useCallback, useEffect, useState } from 'react';
import { Supervisor } from '../../hooks/useGetSupervisor/types';
import ModalSupervisor from '../ModalSupervisor';
import Ticker from '../../../../components/Ticker';
import useGetProfile from '../../../../hooks/useGetProfile';
import {
  useApprovalEditContext,
  useApprovalEditDispatch,
} from '../../contexts';
import { Supervisor as InitialTypes } from '../../../Cases/hooks/useGetCases/types';

interface Props {
  initialValue?: InitialTypes[];
}
const FormSupervised = ({ initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const { selectedSupervisor: supervisorList } = useApprovalEditContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedSupervisor, setSelectedSupervisor] = useState<Supervisor>();
  const { profile } = useGetProfile();

  useEffect(() => {
    const normalizeSupervisor = initialValue?.map((supervisor) => {
      return {
        name: supervisor.userName,
        id: supervisor.userId,
      };
    });

    const normalizeIds = initialValue?.map((supervisor) => supervisor.userId);

    approveEditDispatch({
      type: 'set_supervisor_all',
      data: {
        supervisors: normalizeSupervisor || [],
        supervisorIds: normalizeIds || [],
      },
    });
  }, [approveEditDispatch, initialValue]);

  const handleRemoveSupervisor = useCallback(
    (superVisorId: string) => {
      approveEditDispatch({
        type: 'remove_supervisor',
        data: {
          id: superVisorId,
        },
      });
    },
    [approveEditDispatch],
  );

  if (initialValue?.length === 0) {
    return null;
  }

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Supervised By
      </Text>
      {/* {profile?.competenceName === 'PEMBEKALAN' ? (
        <Text fontSize="sm" color={colors.darkGrey}>
          Supervised By
        </Text>
      ) : (
        <Text fontSize="sm" color={colors.darkGrey}>
          Supervising
        </Text>
      )} */}

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
