import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import centroAyuda from "../assets/centro-ayudaa.jpg";
import utng from "../assets/utng.jpeg";

export function CardCentroAyuda({ handleClickOpen }) {
  const images = [centroAyuda, utng];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <>
      <Flex position="relative" alignItems="flex-end" gap="2rem">
        <Stack
          position="absolute"
          top="0"
          p="3rem"
          w="24rem"
          left="70"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="1.2rem" fontWeight="500">
            Te damos la bienvenida al centro de ayuda de la UTNG
          </Text>
          <Heading
            opacity={{ base: 0, sm: 1, md: 1, lg: 1, xl: 1 }}
            as="h2"
            size="2xl"
            lineHeight="60px"
            wordBreak="break-word"
            color="#3e3e3"
          >
            ¿Qué podemos hacer por ti?
          </Heading>
          <Button
            opacity={{ base: 0, sm: 1, md: 1, lg: 1, xl: 1 }}
            onClick={handleClickOpen}
            // w='10rem'
            p="1rem 5rem"
            textAlign="center"
            bg="#00259A"
            _hover={{
              color: "rgba(255, 255, 255,1)",
              backgroundColor: "#00259A",
              boxShadow: "0 4px 16px #001F7E",
              transition: "all 0.2s ease",
            }}
            color="#fff"
          >
            Iniciar Conversación
          </Button>
        </Stack>
      </Flex>
      <>
        <Image
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          w="full"
          h="30rem"
          objectFit="cover"
        />
      </>
      <Flex justifyContent="center">
        <ButtonGroup size="lg" colorScheme="teal" variant="ghost" mt={3} mb={3}>
          <Button onClick={previousImage} mr={4}>
            Atrás
          </Button>
          <Button onClick={nextImage}>Siguiente</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
