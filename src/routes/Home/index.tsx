import { Flex, useDisclosure } from '@chakra-ui/react';
import HeaderHome from './components/HeaderHome';
import Profile from './components/Profile';
import doctorIcon from '../../assets/doctor.png';
import ButtonTambah from '../../components/ButtonTambah';
import useGetProfile from '../../hooks/useGetProfile';
import ModalSelectCases from './components/ModalSelectCases';
import LevelCardContainer from './components/LevelCardContainer';
import ReportCardContainer from './components/ReportCardContainer';
import NotificationCenter from './components/NotificationCenter';
import Footer from './components/Footer';

const Home = () => {
  const { profile, isResiden } = useGetProfile();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex direction="column">
      <Flex
        direction="column"
        padding="10px 30px"
        paddingTop="-8"
        gap="25px"
        className="justify-between"
        position="relative"
      >
        <HeaderHome />
        <Profile
          image={profile?.imageUrl || doctorIcon}
          name={profile?.name || '-'}
          term={profile?.joinTerm || '-'}
        />

        <NotificationCenter />
        <LevelCardContainer profile={profile} />

        {isResiden && <ReportCardContainer />}

        <ButtonTambah buttonTitle="Tambah Cases" onClick={onOpen} />

        {/* Modal Section */}
        <ModalSelectCases closeModal={onClose} isOpen={isOpen} />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
