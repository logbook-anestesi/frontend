import { Card, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";

interface ReportCardInterface {
  icon: string;
  title: string;
}

const ReportCard = ({ icon, title }: ReportCardInterface) => {
  return (
    <Card
      variant="outline"
      padding="24px"
      direction={{ base: "column", sm: "row" }}
      justify="space-between"
      align="center"
    >
      <Flex
        width="50px"
        height="50px"
        padding="15px"
        backgroundColor={colors.lightGrey}
        borderRadius="10px"
        align="center"
      >
        <Image src={icon} width="34px" height="auto" />
      </Flex>
      <Text color={colors.darkGrey} marginTop="16px" fontSize="md">
        Laporan
      </Text>
      <Text as="b" fontSize="md">
        {title}
      </Text>
    </Card>
  );
};

export default ReportCard;
