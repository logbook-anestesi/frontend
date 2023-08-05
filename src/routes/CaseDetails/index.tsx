import { Divider, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import FieldText from "./components/FieldText";
import FieldTicker from "./components/FieldTicker";
import {
  DUMMY_ADDITIONAL_TAGS,
  DUMMY_ANESTHESIA,
  DUMMY_PROCEDURE,
  DUMMY_TAGS,
  DUMMY_TYPE_OPERATION,
} from "./constants";

const CaseDetails = () => {
  return (
    <Flex flexDirection="column">
      <Header pathBack="/case" title="Case Detail" />

      <Flex padding="30px" direction="column" gap={4}>
        <FieldText label="Residen" value="dr. Ari Angga Nugraha" />
        <FieldText label="DPJP" value="dr. Erlangga" />
        <FieldText label="Merupakan Exam" value="Ya" />

        <Flex gap={20}>
          <FieldText label="Age Group" value="Neo" />
          <FieldText label="Priority" value="Elective" />
        </Flex>

        <FieldText label="Lokasi" value="RSCM" />
        <FieldTicker label="Tipe Operasi" listValue={DUMMY_TYPE_OPERATION} />
        <FieldTicker label="Tipe Anesthesi" listValue={DUMMY_ANESTHESIA} />
        <FieldTicker label="Procedure Done" listValue={DUMMY_PROCEDURE} />

        <Divider />

        <Text as="b" fontSize="xl">
          Data Pasien
        </Text>

        <Flex gap={20}>
          <FieldText label="Tingkat" value="1" />
          <FieldText label="Emergency" value="Ya" />
        </Flex>

        <FieldTicker label="Procedure Done" listValue={DUMMY_TAGS} />

        <Divider />

        <FieldText label="Supervised By" value="Dr. Nurhasanah" />
        <FieldText label="Notes" value="-" />
        <FieldTicker
          label="Additional Tags "
          listValue={DUMMY_ADDITIONAL_TAGS}
        />

        <Divider />

        <Text as="b" fontSize="xl">
          Penilaian Konsulen
        </Text>
      </Flex>
    </Flex>
  );
};

export default CaseDetails;
