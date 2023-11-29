import React from 'react';
import { Box, Text, Image, Flex, Input, Button } from '@chakra-ui/react';

const ScholarshipBanner = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="teal.500"
      py="4"
      px="6"
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern - Puedes usar una imagen o crear un patrón con CSS */}
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        bgImage="url('/path-to-your-pattern-image.png')"
        bgPos="center"
        bgSize="cover"
        opacity="0.1"
      />

      {/* Contenido del Encabezado */}
      <Box position="relative" zIndex="1" textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="white">
          BECAS PARA ESTUDIANTES
        </Text>
        <Text fontSize="xl" color="white" my="4">
          Consulta becas y consigue becas para estudiar
        </Text>
      </Box>

      {/* Imagen de fondo con personas */}
      <Image
        src="https://www.becas.com/static/becas-theme/img/header-lg.png"
        position="absolute"
        bottom="-20"
        right="-20"
        width="400px"
        height="auto"
        zIndex="0"
      />
    </Flex>
  );
};

export default ScholarshipBanner;
