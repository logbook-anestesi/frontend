import {
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { DetailRiwayatKelulusan } from "../../hooks/useGetDetailKelulusan/types";
import { useState } from "react";
import FormJudul from "../FormJudul";
import FormDeskripsi from "../FormDeskripsi";
import FormDate from "../FormDate";
import { colors } from "../../../../constants/colors";
import useAddDiskusi from "../../hooks/useAddDiskusi";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  detailIlmiah?: DetailRiwayatKelulusan;
}

const ModalAddRiwayatDiskusi = ({
  closeModal,
  isOpen,
  detailIlmiah,
}: Props) => {
  const toast = useToast();

  const { createRiwayatDiskusi, loading } = useAddDiskusi();

  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmitForm = async () => {
    const response = await createRiwayatDiskusi({
      approvalUserId: selectedOptions[0],
      description: deskripsi,
      discussionDate: selectedDate.toJSON(),
      scientificGraduationId: detailIlmiah?.id || "",
      title: judul,
    });

    if (response?.success) {
      toast({
        title: "Success",
        description: "Diskusi berhasil dibuat",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      closeModal();
    }

    if (!response?.success) {
      toast({
        title: "Failed membuat diskusi",
        description: response?.message,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }

    console.log(
      "999 ini data",
      judul,
      deskripsi,
      selectedDate.toJSON(),
      selectedOptions
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <ModalHeader margin="auto">Tambah Riwayat Diskusi </ModalHeader>
        <ModalCloseButton />

        <Flex direction="column" gap={2}>
          <Text fontSize="sm">Pembimbing</Text>

          <Flex mb={3}>
            <VStack spacing={2}>
              {detailIlmiah?.approvals.map((approval) => (
                <Checkbox
                  key={approval.id}
                  colorScheme="blue"
                  isChecked={selectedOptions.includes(approval.id)}
                  onChange={() => handleCheckboxChange(approval.id)}
                >
                  {approval.name}
                </Checkbox>
              ))}
            </VStack>
          </Flex>

          <FormJudul setJudul={setJudul} />
          <FormDeskripsi setDeskripsi={setDeskripsi} />
          <FormDate
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </Flex>

        <Button
          colorScheme="teal"
          backgroundColor={colors.primaryPurple}
          color={colors.white}
          onClick={handleSubmitForm}
          isLoading={loading}
          mt={5}
        >
          Submit
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddRiwayatDiskusi;
