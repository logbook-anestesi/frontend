import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { RADIO_LOCATION } from '../../constants';
import { useAddCasesDispatch } from '../../../AddCases/contexts';

const FormRadioLocationICU = () => {
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
      <Text fontSize="sm" color={colors.darkGrey}>
        Lokasi
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <RadioGroup
        onChange={setValue}
        value={value}
        overflowX="revert"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex direction="column" gap={3}>
          {RADIO_LOCATION.map((option) => (
            <Radio
              value={option.value}
              colorScheme="purple"
              key={option.value}
              minWidth="fit-content"
            >
              {option.title}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioLocationICU;
