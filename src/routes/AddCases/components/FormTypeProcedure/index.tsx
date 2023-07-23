import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { ChevronRightIcon } from "@chakra-ui/icons";

const FormTypeProcedure = () => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tipe Anastesi*
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        // onClick={handleButtonClick}
        mb={1}
      >
        <Text>Masukkan tipe anastesi ...</Text>

        <ChevronRightIcon boxSize={7} />
      </Flex>
    </Flex>
  );
};

export default FormTypeProcedure;
