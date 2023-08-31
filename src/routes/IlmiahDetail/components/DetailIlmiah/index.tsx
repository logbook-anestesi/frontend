import { Button, Flex, Text } from "@chakra-ui/react";
import { DetailRiwayatKelulusan } from "../../hooks/useGetDetailKelulusan/types";
import { colors } from "../../../../constants/colors";

interface Props {
  detailIlmiah?: DetailRiwayatKelulusan;
}
const DetailIlmiah = ({ detailIlmiah }: Props) => {
  const isThesis = detailIlmiah?.scientificType === "TESIS";

  return (
    <Flex direction="column" gap={5}>
      <Flex direction="column" gap={1}>
        <Text color={colors.darkGrey}>Judul</Text>
        <Text as="b">{detailIlmiah?.scientificTitle}</Text>
      </Flex>

      <Flex direction="column" gap={2}>
        <Flex justify="space-between" align="center">
          <Text color={colors.darkGrey}>Pengajuan Pembimbing</Text>
          <Text fontSize="xs" color={colors.primaryPurple} as="b">
            Lihat Riwayat
          </Text>
        </Flex>

        {detailIlmiah?.approvals.length === 0 ? (
          <Text as="b"> - </Text>
        ) : (
          detailIlmiah?.approvals.map((approval) => (
            <Text as="b">{approval?.name}</Text>
          ))
        )}
      </Flex>

      {isThesis && (
        <Flex direction="column" gap={2}>
          <Flex justify="space-between" align="center">
            <Text color={colors.darkGrey}>Pengajuan Kelulusan</Text>
            <Text fontSize="xs" color={colors.primaryPurple} as="b">
              Lihat Riwayat
            </Text>
          </Flex>

          <Text as="b">dr. Rachel Amanda</Text>
          <Text as="b">dr. Sally Marcellina</Text>
        </Flex>
      )}

      <Flex direction="column" gap={1}>
        <Text color={colors.darkGrey}>Link Tugas</Text>
        <Text color="blue">{detailIlmiah?.scientificDocumentLink}</Text>
      </Flex>

      <Button
        variant="outline"
        borderColor={colors.primaryPurple}
        color={colors.primaryPurple}
        borderRadius={10}
        // onClick={handleOnClick}
        mb={3}
      >
        + Tambah Riwayat Diskusi
      </Button>
    </Flex>
  );
};

export default DetailIlmiah;
