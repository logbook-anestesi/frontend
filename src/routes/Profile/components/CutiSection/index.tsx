import { Divider, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import useGetAllLeave from '../../hooks/useGetAllLeave';
import LoaderCircle from '../../../../components/LoaderCircle';
import CardCuti from '../CardCuti';
import AddCutiModal from '../AddCutiModal';

const CutiSection = () => {
  const { leaves, loading } = useGetAllLeave();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (loading) return <LoaderCircle />;

  return (
    <Flex direction="column">
      <Divider mb={4} />

      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="sm">Cuti</Text>
        <Text
          fontSize="sm"
          color={colors.primaryPurple}
          as="b"
          pl={2}
          pt={2}
          mb={3}
          onClick={onOpen}
        >
          + Tambah Cuti
        </Text>
      </Flex>

      <Flex direction="column" gap={3} maxH={300} overflowY="scroll">
        {leaves?.map((leave, idx) => (
          <CardCuti leave={leave} index={idx + 1} key={`cardcuti-${idx}`} />
        ))}
      </Flex>

      {/* Modal Section */}
      <AddCutiModal closeModal={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default CutiSection;
