import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setReason: React.Dispatch<React.SetStateAction<string>>;
}

const FormReason = ({ setReason }: Props) => {
  const handleChangeReason = (event: ChangeEvent<HTMLInputElement>) =>
    setReason(event.target.value);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Alasan
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Input placeholder="Masukkan alasan" onChange={handleChangeReason} />
    </Flex>
  );
};

export default FormReason;
