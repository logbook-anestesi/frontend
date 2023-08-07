import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import Ticker from "../../../../components/Ticker";

interface Props {
  label: string;
  listValue?: string[];
}

const FieldTicker = ({ label, listValue }: Props) => {
  if (listValue?.length === 0) return null;

  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        {label}
      </Text>

      <Flex
        mt={1}
        gap={2}
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {listValue?.map((value, idx) => (
          <Ticker text={value} key={idx} isShowClose={false} />
        ))}
      </Flex>
    </Flex>
  );
};

export default FieldTicker;
