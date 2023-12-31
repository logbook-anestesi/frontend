import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';

interface Props {
  isMondatory?: boolean;
}

const FormLocationLainnya = ({ isMondatory }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const [location, setLocation] = useState('Lainnya');
  const handleChangeNotes = (event: ChangeEvent<HTMLInputElement>) =>
    setLocation(event.target.value);

  useEffect(() => {
    casesDispatch({
      type: 'set_location',
      data: {
        location: location,
      },
    });
  }, [casesDispatch, location]);

  return (
    <Flex direction="column">
      <Text fontSize="sm" color={colors.darkGrey}>
        Lokasi
        {isMondatory && (
          <Box as="span" color={colors.primaryRed}>
            *
          </Box>
        )}
      </Text>

      <Input placeholder="Masukkan lokasi" onChange={handleChangeNotes} />
    </Flex>
  );
};

export default FormLocationLainnya;
