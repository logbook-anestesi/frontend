import { CalendarIcon } from '@chakra-ui/icons';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { colors } from '../../../../constants/colors';
import { formatDateMonthYear } from '../../../../helpers';

interface Props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  initialValue?: string;
}

const FormDate = ({ setDate, initialValue }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setDate(date.toJSON());
    setShowDatePicker(false);
  };

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  useEffect(() => {
    setDate(selectedDate.toJSON());
  }, [selectedDate]);

  useEffect(() => {
    if (initialValue) {
      const initialDate = new Date(initialValue);
      setSelectedDate(initialDate);
    }
  }, [initialValue]);

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tanggal
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
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
        <Text>{formatDateMonthYear(selectedDate)}</Text>

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
