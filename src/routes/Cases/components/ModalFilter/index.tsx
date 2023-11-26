import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  useToast,
} from '@chakra-ui/react';
import { colors } from '../../../../constants/colors';
import useGetCasesForm from '../../../../hooks/useGetCasesForm';
import { useState } from 'react';
import { Tag } from '../../../../hooks/useGetCasesForm/types';
import { Case } from '../../hooks/useGetCases/types';
import useGetCasesById from '../../hooks/useGetCasesById';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  handleSubmit: () => Promise<void>;
  setFinalCaseList: React.Dispatch<React.SetStateAction<Case[] | undefined>>;
  setResetShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFilter = ({
  closeModal,
  isOpen,
  setFinalCaseList,
  setResetShowFilter,
}: Props) => {
  const toast = useToast();
  const { getCasesById, loading } = useGetCasesById();
  const { casesForm } = useGetCasesForm();
  const [keywordList, setKeywordList] = useState<Tag[] | undefined>([]);
  const [selectedId, setSelectedId] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const handleSelectTagType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    switch (value) {
      case 'asaTags':
        setKeywordList(casesForm?.asaTags);
        setSelectedTag('asaTagId');
        return;
      case 'operationTypes':
        setKeywordList(casesForm?.operationTypes);
        setSelectedTag('operationTypeId');
        return;
      case 'procedureTypes':
        setKeywordList(casesForm?.procedureTypes);
        setSelectedTag('procedureTypeId');
        return;
      case 'noraProcedureTypes':
        setKeywordList(casesForm?.noraProcedureTypes);
        setSelectedTag('noraProcedureTypeId');
        return;
      case 'diagnoses':
        setKeywordList(casesForm?.diagnoses);
        setSelectedTag('diagnoseId');
        return;
      case 'painServiceTypes':
        setKeywordList(casesForm?.painServiceTypes);
        setSelectedTag('painServiceTypeId');
        return;
      case 'painServiceProcedures':
        setKeywordList(casesForm?.painServiceProcedures);
        setSelectedTag('PainServiceProcedureId');
        return;
      case 'tags':
        setKeywordList(casesForm?.tags);
        setSelectedTag('tagId');
        return;
    }
  };

  const handleClickKeyword = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(e.target.value);
  };

  const handleSubmit = async () => {
    if (selectedId === '' || selectedTag === '') {
      toast({
        title: 'Harap isi semua data',
        status: 'error',
        position: 'top',
        duration: 3000,
      });

      return;
    }

    const response = await getCasesById({
      keywordId: selectedId,
      tagType: selectedTag,
    });

    if (response?.success) {
      setFinalCaseList(response.data);
      setResetShowFilter(true);

      setSelectedId('');
      setSelectedTag('');

      closeModal();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent margin="10px 20px" p={4}>
        <Flex direction="column">
          <Text as="b" align="center" textAlign="center">
            Filter Cases
          </Text>

          <Flex direction="column" gap={2} my={5} align="start" justify="start">
            <Text fontSize="sm" color={colors.darkGrey}>
              Tipe Tag*
            </Text>

            <Select
              placeholder="Pilih tipe tag..."
              onChange={handleSelectTagType}
            >
              <option value="asaTags">ASA</option>
              <option value="operationTypes">Tipe Operasi</option>
              <option value="procedureTypes">Tipe Prosedur</option>
              <option value="noraProcedureTypes">Tipe Prosedur NORA</option>
              <option value="diagnoses">Diagnosis</option>
              <option value="painServiceTypes">Tipe Pain Service</option>
              <option value="painServiceProcedures">
                Tipe Prosedur Pain Service
              </option>
              <option value="tags">Others</option>
            </Select>
          </Flex>

          <Flex direction="column" mb={6} gap={2}>
            <Text fontSize="sm" color={colors.darkGrey}>
              Keyword*
            </Text>

            <Select
              placeholder="Pilih Keyword ..."
              onChange={handleClickKeyword}
            >
              {keywordList?.map((keyword) => (
                <option value={keyword.id} key={keyword.id}>
                  {keyword.name}
                </option>
              ))}
            </Select>
          </Flex>

          <Flex direction="column" gap={3} width="100%">
            <Button
              colorScheme="teal"
              backgroundColor={colors.primaryPurple}
              onClick={handleSubmit}
            >
              {loading ? 'Loading...' : 'Ya'}
            </Button>
            <Button
              backgroundColor={colors.white}
              borderWidth={2}
              borderColor={colors.primaryPurple}
              onClick={closeModal}
              mb={5}
            >
              Batal
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalFilter;
