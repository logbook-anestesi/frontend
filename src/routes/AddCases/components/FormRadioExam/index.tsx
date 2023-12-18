import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';
import { useAddCasesDispatch } from '../../contexts';

interface Option {
  title: string;
  value: string;
}

interface Props {
  title: string;
  listOptions: Option[];
  setIsExam?: React.Dispatch<React.SetStateAction<string>>;
}

const FormRadioExam = ({ title, listOptions, setIsExam }: Props) => {
  const casesDispatch = useAddCasesDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    casesDispatch({
      type: 'set_is_exam',
      data: {
        isExam: value === 'Ya',
      },
    });

    if (setIsExam) {
      setIsExam(value);
    }
  }, [casesDispatch, value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        {title}
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
        <Stack direction="row" gap={3}>
          {listOptions.map((option) => (
            <Radio value={option.value} colorScheme="purple" key={option.value}>
              {option.title}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioExam;
