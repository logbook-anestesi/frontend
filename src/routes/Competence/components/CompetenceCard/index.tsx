import { Flex, Text } from "@chakra-ui/react";
import Ticker from "../../../../components/Ticker";
import { colors, getCompetenceColor } from "../../../../constants/colors";
import { formatDateMonthYear } from "../../../../helpers";

interface CompetenceCardInterface {
  competenceNumber: Number;
  competenceLevel: string;
  startDate: string | null | undefined;
  endDate: string | null | undefined;
}
const CompetenceCard = ({
  competenceNumber,
  competenceLevel,
  startDate,
  endDate,
}: CompetenceCardInterface) => {
  const fontColor =
    startDate === undefined
      ? colors.darkGrey
      : getCompetenceColor(competenceLevel);
  const borderColor =
    startDate === undefined
      ? colors.lightGrey
      : getCompetenceColor(competenceLevel);

  return (
    <Flex
      direction="column"
      border="1px"
      borderColor={borderColor}
      borderRadius="8px"
      padding="12px 16px"
      width="100%"
      gap="4px"
    >
      <Flex gap="20px" align="center">
        <Text as="b" fontSize="3xl" color={fontColor}>
          {String(competenceNumber)}
        </Text>
        <Flex direction="column" width="100%" gap="7px">
          <Text as="b" fontSize="lg" color={fontColor}>
            {competenceLevel}
          </Text>
          {startDate ? (
            <Text fontSize="xs">
              Start Date: {formatDateMonthYear(new Date(startDate))}
            </Text>
          ) : null}
          {endDate ? (
            <Text fontSize="xs">
              End Date: {formatDateMonthYear(new Date(endDate))}
            </Text>
          ) : null}
        </Flex>
      </Flex>

      {startDate != null && endDate == null ? (
        <Flex alignSelf="flex-end">
          <Ticker text="Kompetensi Saat Ini" />
        </Flex>
      ) : null}
    </Flex>
  );
};

export default CompetenceCard;
