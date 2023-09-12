import { CalendarIcon } from '@chakra-ui/icons';
import { Flex, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { colors } from '../../../../constants/colors';
import { formatDateMonthYear } from '../../../../helpers';
import { useApprovalEditDispatch } from '../../contexts';

interface Props {
  initialValue?: string;
}

const FormDate = ({ initialValue }: Props) => {
  const approveEditDispatch = useApprovalEditDispatch();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (initialValue) {
      const initialDate = new Date(initialValue);
      setSelectedDate(initialDate);
    }
  }, [initialValue]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  useEffect(() => {
    approveEditDispatch({
      type: 'set_date',
      data: {
        date: selectedDate?.toJSON(),
      },
    });
  }, [approveEditDispatch, selectedDate]);

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tanggal*
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
