import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../../../assets/profile-white.png';
import { Residen } from '../../hooks/useGetResiden/types';
import ModalResiden from '../ModalResiden';

interface Props {
  residen?: Residen;
  setResiden: React.Dispatch<React.SetStateAction<Residen | undefined>>;
}

const FormResiden = ({ residen, setResiden }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex direction="column" gap={1} onClick={onOpen}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Residen
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
        <Text>{residen?.name || 'Pilih Residen'}</Text>

        <Image src={profileIcon} width={5} alt="" />
      </Flex>

      <ModalResiden
        isOpen={isOpen}
        closeModal={onClose}
        setResiden={setResiden}
      />
    </Flex>
  );
};

export default FormResiden;
