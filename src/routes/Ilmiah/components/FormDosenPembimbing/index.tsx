import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import ModalPembimbing from '../ModalPembimbing';
import { PembimbingData } from '../ModalAddIlmiah';

interface Props {
  setApprovalUser: (user: PembimbingData) => void;
  listPembimbing: PembimbingData[];
}

const FormDosenPembimbing = ({ setApprovalUser, listPembimbing }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Pembimbing
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      {listPembimbing.length < 1 && (
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
          <Text>Pilih Pembimbing</Text>
        </Flex>
      )}

      <Text
        fontSize="sm"
        color={colors.primaryPurple}
        as="b"
        pl={2}
        pt={2}
        onClick={onOpen}
        mb={3}
      >
        + Tambah Pembimbing
      </Text>

      <Flex direction="column" gap={3}>
        {listPembimbing?.map((pembimbing) => (
          <Text
            backgroundColor={colors.lightGrey}
            py={2}
            px={4}
            borderRadius={10}
            key={pembimbing.id}
          >
            {pembimbing?.name}
          </Text>
        ))}
      </Flex>

      {/* Modal Section */}
      <ModalPembimbing
        closeModal={onClose}
        isOpen={isOpen}
        setPembimbing={setApprovalUser}
        listPembimbing={listPembimbing}
      />
    </Flex>
  );
};

export default FormDosenPembimbing;
