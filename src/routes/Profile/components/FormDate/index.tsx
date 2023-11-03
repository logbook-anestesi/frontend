import { CalendarIcon } from '@chakra-ui/icons';
import { Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { colors } from '../../../../constants/colors';
import { formatDateMonthYear } from '../../../../helpers';

interface Props {
  title: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const FormDate = ({ title, setDate }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
    setDate(date.toISOString());
  };

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        {title}*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        onClick={handleButtonClick}
        mb={1}
      >
        <Text>{selectedDate ? formatDateMonthYear(selectedDate) : ''}</Text>

        <CalendarIcon boxSize={4} color={colors.darkGrey} />
      </Flex>

      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<Input />}
          inline
        />
      )}
    </Flex>
  );
};

export default FormDate;
