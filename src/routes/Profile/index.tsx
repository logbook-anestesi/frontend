import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

import doctorIcon from "../../assets/doctor.png";
import useGetProfile from "../../hooks/useGetProfile";
import Header from "../../components/Header";
import { colors } from "../../constants/colors";
import LoaderCircle from "../../components/LoaderCircle";
import useAuth from "../../hooks/useAuth";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import useUploadProfilePhoto from "./hooks/useUploadProfilePhoto";

const ProfilePage = () => {
  const toast = useToast();
  const { loading, profile } = useGetProfile();
  const { logoutAccount } = useAuth();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const { uploadPhoto } = useUploadProfilePhoto();

  const selectedProfileData = [
    {
      label: "Nama",
      value: profile?.name,
    },
    {
      label: "NPM",
      value: profile?.npm,
    },
    {
      label: "Email",
      value: profile?.email,
    },
    {
      label: "No. Handphone",
      value: profile?.phoneNumber,
    },
    {
      label: "Term",
      value: profile?.joinTerm,
    },
    {
      label: "Level Kompetensi",
      value: profile?.role,
    },
    {
      label: "Stase",
      value: profile?.stationName,
    },
  ];

  const konsulenProfileData = [
    {
      label: "Nama",
      value: profile?.name,
    },
    {
      label: "NPM",
      value: profile?.npm,
    },
    {
      label: "Email",
      value: profile?.email,
    },
    {
      label: "No. Handphone",
      value: profile?.phoneNumber,
    },
    {
      label: "Stase",
      value: profile?.stationName,
    },
  ];

  const isKonsulen = useMemo(() => {
    return profile?.role === "KONSULEN";
  }, [profile?.role]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedPhoto(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedPhoto(null);
    }
  };

  const handleSubmitPhotoProfile = async () => {
    const response = await uploadPhoto({
      imageUrl: selectedPhoto || "",
    });

    if (response?.success) {
      toast({
        title: "Success",
        description: "Success Upload Photo",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });

      setSelectedPhoto(null);
      return;
    }

    if (!response?.success) {
      toast({
        title: "Failed Upload Photo",
        description: response?.message,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const profileImage = () => {
    if (selectedPhoto === null) {
      return profile?.imageUrl || doctorIcon;
    }

    return selectedPhoto;
  };

  useEffect(() => {
    console.log("999 selected photo", selectedPhoto);
  }, [selectedPhoto]);

  if (loading) {
    return (
      <Flex direction="column">
        <Header title="Profile" />
        <Box mb={20} />
        <LoaderCircle />
      </Flex>
    );
  }

  return (
    <Flex direction="column">
      <Header title="Profile" />
      <Flex direction="column" gap="38px" padding="30px">
        <Flex direction="column" align="center" gap="8px">
          <Image src={profileImage()} width="80px" height="80px" mb={3} />

          <label htmlFor="file-input">
            <Text as="b" fontSize="xs" color={colors.primaryPurple}>
              Ganti Foto
            </Text>
          </label>

          {selectedPhoto !== null && (
            <Button
              color={colors.white}
              fontSize="xs"
              py={0}
              bgColor={colors.primaryPurple}
              onClick={handleSubmitPhotoProfile}
            >
              Ganti
            </Button>
          )}

          <Input
            type="file"
            display="none"
            id="file-input"
            onChange={handleFileChange}
          />
        </Flex>

        {!isKonsulen && (
          <Flex direction="column" gap="24px">
            {selectedProfileData.map((data, idx) => {
              return (
                <Flex direction="column" key={`residen-data-${idx}`}>
                  <Text color={colors.darkGrey} fontSize="sm">
                    {data.label}
                  </Text>
                  <Text as="b" fontSize="sm">
                    {data.value}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        )}

        {isKonsulen && (
          <Flex direction="column" gap="24px">
            {konsulenProfileData.map((data, idx) => {
              return (
                <Flex direction="column" key={`konsulen-data-${idx}`}>
                  <Text color={colors.darkGrey} fontSize="sm">
                    {data.label}
                  </Text>
                  <Text as="b" fontSize="sm">
                    {data.value}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        )}

        <Button
          color={colors.white}
          backgroundColor={colors.primaryPurple}
          colorScheme={colors.lightPurple}
          onClick={logoutAccount}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
