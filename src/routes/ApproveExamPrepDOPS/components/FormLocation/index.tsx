import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent } from 'react';

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  initialValue: string;
}

const FormLocation = ({ setLocation, initialValue }: Props) => {
  const handleChangeLocation = (event: ChangeEvent<HTMLInputElement>) =>
    setLocation(event.target.value);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Lokasi
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Input
        placeholder="Masukkan lokasi"
        onChange={handleChangeLocation}
        defaultValue={initialValue}
      />
    </Flex>
  );
};

export default FormLocation;
