import { Card, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useNavigate } from "react-router-dom";

interface ReportCardInterface {
  icon: string;
  title: string;
  path: string;
}

const ReportCard = ({ icon, title, path }: ReportCardInterface) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(path);
  };

  return (
    <Card
      variant="outline"
      padding="24px"
      direction={{ base: "column", sm: "row" }}
      justify="space-between"
      align="center"
      onClick={handleClickCard}
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
