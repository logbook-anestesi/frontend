import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../../../../firebaseConfig";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Input,
  Progress,
  Text,
  useToast,
} from "@chakra-ui/react";
import { colors } from "../../../../constants/colors";
import { bytesToMb } from "../../../../helpers";
import useUploadProfilePhoto from "../../hooks/useUploadProfilePhoto";

interface Props {
  setTemporaryImage: React.Dispatch<React.SetStateAction<string>>;
}

const UploadPhoto = ({ setTemporaryImage }: Props) => {
  const toast = useToast();
  const [imageFile, setImageFile] = useState<File>();
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);
  const { uploadPhoto } = useUploadProfilePhoto();

  const handleSubmitPhotoProfile = async (url: string) => {
    const response = await uploadPhoto({
      imageUrl: url,
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

      handleRemoveFile();

      window.location.reload();

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

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0]);

      const reader = new FileReader();
      reader.onload = (event) => {
        setTemporaryImage(event.target?.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      toast({
        title: "File too Large",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleUploadFile = () => {
    if (imageFile) {
      setIsUploading(true);
      const name = imageFile.name;
      const storageRef = ref(storage, `${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          toast({
            title: `Upload error: ${error}`,
            status: "error",
            position: "top",
            duration: 4000,
            isClosable: true,
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            handleSubmitPhotoProfile(url);
          });
        }
      );
    } else {
      toast({
        title: "File not found",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }
    setIsUploading(false);
  };

  const handleRemoveFile = () => {
    setImageFile(undefined);
    setTemporaryImage("");
  };

  return (
    <Flex direction="column" align="center" gap={3}>
      <label htmlFor="file-input">
        <Text as="b" fontSize="xs" color={colors.primaryPurple}>
          Ganti Foto
        </Text>
      </label>

      <Input
        id="file-input"
        type="file"
        placeholder="Select file to upload"
        accept="image/png"
        display="none"
        onChange={(files) => handleSelectedFile(files.target.files)}
      />

      {imageFile && (
        <>
          <Card>
            <CardBody display="flex" gap={1}>
              <Flex direction="column">
                <Text fontSize="xs">File name </Text>
                <Text fontSize="xs">File size </Text>
              </Flex>
              <Flex direction="column">
                <Text fontSize="xs">: {imageFile.name}</Text>
                <Text fontSize="xs">: {bytesToMb(imageFile.size)} MB</Text>
              </Flex>
            </CardBody>
          </Card>

          <Progress hasStripe value={progressUpload} width="200px" my={2} />

          <Flex gap={4}>
            <Button
              color={colors.white}
              fontSize="xs"
              py={0}
              bgColor={colors.primaryPurple}
              onClick={handleUploadFile}
              isLoading={isUploading}
            >
              Ganti
            </Button>

            <Button
              color={colors.white}
              fontSize="xs"
              py={0}
              bgColor={colors.primaryRed}
              onClick={handleRemoveFile}
              isDisabled={isUploading}
            >
              Hapus
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default UploadPhoto;
