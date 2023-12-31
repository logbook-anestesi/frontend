import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';
import { RADIO_LOCATION } from '../../constants';

const FormRadioLocation = () => {
  const casesDispatch = useAddCasesDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    casesDispatch({
      type: 'set_location',
      data: {
        location: value,
      },
    });

    if (value === 'Lainnya') {
      casesDispatch({
        type: 'set_show_location_lainnya',
        data: {
          isShow: true,
        },
      });

      return;
    }

    // close input lainnya when user click another option after click lainnya option
    casesDispatch({
      type: 'set_show_location_lainnya',
      data: {
        isShow: false,
      },
    });
  }, [casesDispatch, value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey} mb={3}>
        Lokasi
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <RadioGroup
        onChange={setValue}
        value={value}
        overflowX="scroll"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Stack gap={3}>
          {RADIO_LOCATION.map((option) => (
            <Radio value={option.value} colorScheme="purple" key={option.value}>
              {option.title}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioLocation;
