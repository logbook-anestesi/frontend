import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';

interface Props {
  label?: string;
  value?: string | number | null | boolean;
}

const FieldText = ({ label, value }: Props) => {
  if (value === null) {
    return null;
  }

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        {label}
      </Text>
      {typeof value === 'boolean' ? (
        <Text as="b" fontSize="sm">
          {value ? 'Ya' : 'Tidak'}
        </Text>
      ) : (
        <Text as="b" fontSize="sm">
          {value}
        </Text>
      )}
    </Flex>
  );
};

export default FieldText;
