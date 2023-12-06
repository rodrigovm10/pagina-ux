import { Box, Flex, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { MdPerson, MdEmail, MdPhone } from "react-icons/md";
import logo from "../../assets/logo-utng.png";

export const Contacto = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Columna en móviles, fila en pantallas medianas y grandes
      justify="space-around" // Espaciado alrededor
      align="center" // Alineación al centro
      wrap="wrap" // Si no hay espacio suficiente, envuelve al siguiente
      maxW="100%"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      p={5}
    >
      {/* Primera tarjeta */}
      <VStack
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        p={5}
        spacing={4}
        align="start"
        m={2} // Margen para separar las tarjetas
      >
        <Flex align="center">
          <Image
            boxSize="100px"
            objectFit="cover"
            src={logo}
            alt="Logo"
            mr={5}
          />
          <VStack align="start" spacing={2}>
            <Flex align="center">
              <Icon as={MdPerson} mr={2} color="green.500" />
              <Text fontWeight="bold">Diana Berenice Cuellar González</Text>
            </Flex>
            <Link href="mailto:diana.cuellar@utng.edu.mx" isExternal>
              <Flex align="center">
                <Icon as={MdEmail} mr={2} color="blue.500" />
                diana.cuellar@utng.edu.mx
              </Flex>
            </Link>
            <Flex align="center">
              <Icon as={MdPhone} mr={2} color="teal.500" />
              <Text>Tel: 18 2 55 00 ext. 1254</Text>
            </Flex>
          </VStack>
        </Flex>
        <Text fontSize="sm">
          Atención de lunes a viernes de 8:00 a 16:00 hrs
        </Text>
      </VStack>

      <VStack
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        p={5}
        spacing={4}
        align="start"
        m={2}
      >
        <Flex align="center">
          <Image
            boxSize="100px"
            objectFit="cover"
            src={logo}
            alt="Logo"
            mr={5}
          />
          <VStack align="start" spacing={2}>
            <Flex align="center">
              <Icon as={MdPerson} mr={2} color="green.500" />
              <Text fontWeight="bold"> Lucía Isabel López Aguilar</Text>
            </Flex>
            <Link href="mailto:lucia.lopez@utng.edu.mx" isExternal>
              <Flex align="center">
                <Icon as={MdEmail} mr={2} color="blue.500" />
                lucia.lopez@utng.edu.mx
              </Flex>
            </Link>
            <Flex align="center">
              <Icon as={MdPhone} mr={2} color="teal.500" />
              <Text>Tel: 18 2 55 00 ext. 1254</Text>
            </Flex>
          </VStack>
        </Flex>
        <Text fontSize="sm">
          Atención de lunes a viernes de 8:00 a 16:00 hrs
        </Text>
      </VStack>
    </Flex>
  );
};
