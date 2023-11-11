import { Flex, Select, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import { SCIENTIFIC_TYPE } from '../../constants';
import { ChangeEvent } from 'react';

interface Props {
  setScientificType: (type: string) => void;
}

const FormTipeIlmiah = ({ setScientificType }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setScientificType(event.target.value);
  };

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Ilmiah*
      </Text>

      <Select placeholder="Pilih tipe ilmiah" onChange={handleChange}>
        {SCIENTIFIC_TYPE?.map((type) => (
          <option value={type.value} key={`type-${type.title}`}>
            {type.title}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default FormTipeIlmiah;
