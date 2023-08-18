import { Flex, Input, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChangeEvent, useEffect, useState } from "react";
import FormRadioEmergency from "../FormRadioEmergency";
import { useApprovalEditDispatch } from "../../contexts";

const FormTingkatAndEmergency = () => {
  const casesDispatch = useApprovalEditDispatch();

  const [tier, setTier] = useState(0);
  const handleChangeTingkat = (event: ChangeEvent<HTMLInputElement>) =>
    setTier(Number(event.target.value));

  useEffect(() => {
    casesDispatch({
      type: "set_tier",
      data: {
        tier: tier,
      },
    });
  }, [casesDispatch, tier]);

  return (
    <Flex direction="row" justify="space-between" gap={2}>
      <Flex direction="column" flex={1}>
        <Text fontSize="sm" color={colors.darkGrey}>
          Tingkat
        </Text>

        <Input placeholder="1" onChange={handleChangeTingkat} />
      </Flex>

      <Flex direction="column" flex={1} justify="center" align="center">
        <FormRadioEmergency />
      </Flex>
    </Flex>
  );
};

export default FormTingkatAndEmergency;
