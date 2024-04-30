import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { useEffect, useState } from 'react';

interface Props {
  setFeedback: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormFeedback = ({ setFeedback }: Props) => {
  const [value, setValue] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  useEffect(() => {
    setFeedback(value);
  }, [value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Umpan Balik
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Checkbox
        borderRadius={4}
        defaultChecked={false}
        colorScheme="purple"
        onChange={handleCheckboxChange}
      >
        Sudah dilakukan
      </Checkbox>
    </Flex>
  );
};

export default FormFeedback;
