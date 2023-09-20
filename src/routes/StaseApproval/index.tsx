import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useState } from 'react';
import TopNavbar from './components/TopNavBar';

const StaseApproval = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <Flex flexDirection="column">
      <Header title="Modul ..." pathBack="/" />
      <Flex padding="30px" direction="column" gap="16px">
        <TopNavbar
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </Flex>
    </Flex>
  );
};

export default StaseApproval;
