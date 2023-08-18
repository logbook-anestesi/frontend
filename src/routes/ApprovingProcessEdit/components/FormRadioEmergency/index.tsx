import { Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useEffect, useState } from "react";
import { RADIO_EMERGENCY } from "../../constants";
import { useApprovalEditDispatch } from "../../contexts";

const FormRadioEmergency = () => {
  const casesDispatch = useApprovalEditDispatch();
  const [value, setValue] = useState("ya");

  useEffect(() => {
    casesDispatch({
      type: "set_emergency",
      data: {
        isEmergency: value === "ya",
      },
    });
  }, [casesDispatch, value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Emergency
      </Text>

      <RadioGroup
        onChange={setValue}
        value={value}
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack direction="row" gap={3}>
          {RADIO_EMERGENCY.map((option) => (
            <Radio value={option.value} colorScheme="purple" key={option.value}>
              {option.title}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioEmergency;
