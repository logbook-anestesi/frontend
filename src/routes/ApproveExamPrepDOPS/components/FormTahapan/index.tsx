import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import profileIcon from '../../../../assets/profile-white.png';

interface Props {
  initialValue: string;
}

const FormTahapan = ({ initialValue }: Props) => {
  return (
    <Flex direction="column" gap={1}>
      <Text fontSize="sm" color={colors.darkGrey}>
        Tahapan Residen
        <Box as="span" color={colors.primaryRed}>
          *
        </Box>
      </Text>

      <Flex
        justify="space-between"
        align="center"
        borderWidth={1}
        borderColor={colors.lightGrey}
        backgroundColor={colors.lightGrey}
        padding="10px 15px"
        borderRadius={10}
        mb={1}
      >
        <Text>{initialValue}</Text>

        <Image src={profileIcon} width={5} alt="" />
      </Flex>
    </Flex>
  );
};

export default FormTahapan;
