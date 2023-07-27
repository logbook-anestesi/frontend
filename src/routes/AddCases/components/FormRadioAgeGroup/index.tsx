import { Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { useState } from "react";
import { RADIO_AGE_GROUP } from "../../constants";

const FormRadioAgeGroup = () => {
  // const casesDispatch = useAddCasesDispatch();
  const [value, setValue] = useState("1");

  // useEffect(() => {
  //   casesDispatch({
  //     type: "set_is_exam",
  //     data: {
  //       isExam: value === "Ya",
  //     },
  //   });
  // }, [casesDispatch, value]);

  return (
    <Flex direction="column" gap={1} mb={2}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Age Group
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
          {RADIO_AGE_GROUP.map((option) => (
            <Radio value={option.value} colorScheme="purple" key={option.value}>
              {option.title}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default FormRadioAgeGroup;
