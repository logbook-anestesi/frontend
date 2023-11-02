import { Flex, Text } from '@chakra-ui/react';
import { Leave } from '../../hooks/useGetAllLeave/types';
import { convertDateFormatIndonesia } from '../../../../helpers';

interface Props {
  leave: Leave;
  index: number;
}

const CardCuti = ({ leave, index }: Props) => {
  return (
    <Flex direction="row" gap={3}>
      <Text fontWeight="bold" fontSize="md">
        {index}
      </Text>
      <Flex direction="column">
        <Text fontSize="sm" fontWeight="bold">
          {convertDateFormatIndonesia(leave.startDate)} -{' '}
          {convertDateFormatIndonesia(leave.endDate)}
        </Text>
        <Text fontSize="sm">{leave.description}</Text>
      </Flex>
    </Flex>
  );
};

export default CardCuti;
