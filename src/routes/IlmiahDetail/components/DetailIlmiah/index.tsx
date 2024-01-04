import { Button, Flex, Text } from '@chakra-ui/react';
import { DetailRiwayatKelulusan } from '../../hooks/useGetDetailKelulusan/types';
import { colors } from '../../../../constants/colors';
import useGetProfile from '../../../../hooks/useGetProfile';

interface Props {
  detailIlmiah?: DetailRiwayatKelulusan;
  onOpenAddRiwayatDiskusi: () => void;
  onOpenListRiwayat: () => void;
}
const DetailIlmiah = ({
  detailIlmiah,
  onOpenAddRiwayatDiskusi,
  onOpenListRiwayat,
}: Props) => {
  const { isResiden } = useGetProfile();
  const isThesis = detailIlmiah?.scientificType === 'TESIS';

  const handleRedirectLinkDocument = () => {
    window.open(detailIlmiah?.scientificDocumentLink, '_blank');
  };

  const statusBgColor = (value: string) => {
    switch (value) {
      case 'PENDING': {
        return colors.primaryYellow;
      }
      case 'REJECTED': {
        return colors.primaryRed;
      }
      case 'APPROVED': {
        return colors.primaryGreen;
      }
    }
  };

  return (
    <Flex direction="column" gap={5}>
      <Flex direction="column" gap={1}>
        <Text color={colors.darkGrey}>Judul</Text>
        <Text as="b">{detailIlmiah?.scientificTitle}</Text>
      </Flex>

      <Flex direction="column" gap={2}>
        <Flex justify="space-between" align="center">
          <Text color={colors.darkGrey}>Pengajuan Pembimbing</Text>
          <Text
            fontSize="xs"
            color={colors.primaryPurple}
            as="b"
            onClick={onOpenListRiwayat}
          >
            Lihat Riwayat
          </Text>
        </Flex>

        {detailIlmiah?.approvals.length === 0 ? (
          <Text as="b"> - </Text>
        ) : (
          detailIlmiah?.approvals.map((approval, idx) => (
            <Flex gap={4} align="center" key={`approval-${idx}`}>
              <Text as="b" key={approval.id}>
                {approval?.name}
              </Text>
              <Text
                fontSize="xs"
                color={colors.white}
                py={1}
                px={2}
                borderRadius={10}
                bgColor={statusBgColor(approval?.status)}
              >
                {approval.status}
              </Text>
            </Flex>
          ))
        )}
      </Flex>

      {isThesis && (
        <Flex direction="column" gap={2}>
          <Flex justify="space-between" align="center">
            <Text color={colors.darkGrey}>Pengajuan Kelulusan</Text>
          </Flex>

          <Text as="b">dr. Rachel Amanda</Text>
          <Text as="b">dr. Sally Marcellina</Text>
        </Flex>
      )}

      <Flex direction="column" gap={1}>
        <Text color={colors.darkGrey} onClick={handleRedirectLinkDocument}>
          Link Tugas
        </Text>
        <Text color="blue">{detailIlmiah?.scientificDocumentLink}</Text>
      </Flex>

      {isResiden && (
        <Button
          variant="outline"
          borderColor={colors.primaryPurple}
          color={colors.primaryPurple}
          borderRadius={10}
          onClick={onOpenAddRiwayatDiskusi}
          mb={3}
        >
          + Tambah Riwayat Diskusi
        </Button>
      )}
    </Flex>
  );
};

export default DetailIlmiah;
