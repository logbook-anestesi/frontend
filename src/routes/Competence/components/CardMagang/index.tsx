import { Flex, Text } from '@chakra-ui/react';
import Ticker from '../../../../components/Ticker';
import { colors } from '../../../../constants/colors';
import { formatDateMonthYear } from '../../../../helpers';

interface CompetenceCardInterface {
  startDate: string | null | undefined;
  isDisabled: boolean;
  isActive: boolean;
}

const CardMagang = ({
  startDate,
  isDisabled,
  isActive,
}: CompetenceCardInterface) => {
  return (
    <Flex
      direction="column"
      border="1px"
      borderColor={isDisabled ? colors.darkGrey : colors.primaryYellow}
      borderRadius="8px"
      padding="12px 16px"
      width="100%"
      gap="4px"
      color={isDisabled ? 'grey' : '-'}
      minHeight={20}
    >
      <Flex gap="20px" align="center">
        <Text
          as="b"
          fontSize="3xl"
          color={isDisabled ? colors.darkGrey : colors.primaryYellow}
        >
          2
        </Text>
        <Flex direction="column" width="100%" gap="7px">
          <Text
            as="b"
            fontSize="lg"
            color={isDisabled ? colors.darkGrey : colors.primaryYellow}
          >
            Magang
          </Text>
          {startDate && !isDisabled ? (
            <Text fontSize="xs">
              Sejak: {formatDateMonthYear(new Date(startDate))}
            </Text>
          ) : null}
        </Flex>
      </Flex>

      {isActive ? (
        <Flex alignSelf="flex-end">
          <Ticker text="Kompetensi Saat Ini" isShowClose={false} />
        </Flex>
      ) : null}
    </Flex>
  );
};

export default CardMagang;
