import Header from "../../../../components/Header";
import { Flex } from "@chakra-ui/react";
import PeriodCard from "./components/PeriodCard";

const CreateStase = () => {
  const getCurrentMonth = (): string => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      year: "numeric",
    };
    return date.toLocaleString("id-ID", options);
  };

  return (
    <div>
      <Header onClick={() => {}} title="Pembaruan Stase" />

      <Flex padding="30px" direction="column" gap="16px">
        <PeriodCard monthValue={getCurrentMonth()} />
      </Flex>
    </div>
  );
};

export default CreateStase;
