import {
  Card,
  CardBody,
  SimpleGrid,
  CardHeader,
  Heading,
  Text,
  CardFooter,
  Button,
  Image,
  Box,
  Highlight,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export default function Calendario() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentMonth = new Date().toLocaleString("es", { month: "long" });
  return (
    <Box p="3rem">
      <SimpleGrid
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
      >
        <>
          <Image
            w="full"
            objectFit="cover"
            borderRadius="1rem"
            src="https://media.istockphoto.com/id/1370276409/es/foto/hombre-asi%C3%A1tico-de-cuello-blanco-marcando-la-fecha-en-el-calendario-del-escritorio.jpg?s=612x612&w=0&k=20&c=L-fRHj1PoZHZ_VJviN_iw9PIEK8N_KcFO8QWiJBmZjQ="
            alt="Calendario UTNG"
          />
        </>
        <Card>
          <CardHeader>
            <Heading size="md">
              Noticias
              {" " +
                currentMonth.charAt(0).toUpperCase() +
                currentMonth.slice(1)}
            </Heading>
          </CardHeader>
          <CardHeader>
            <Heading size="md">17 de Diciembre</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Organiza el Duatlón Málaga 2023 y la Copa de Andalucía
              Universitaria
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
          <CardHeader>
            <Heading size="md">17 de Diciembre</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Organiza el Duatlón Málaga 2023 y la Copa de Andalucía
              Universitaria
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">17 de Diciembre</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Organiza el Duatlón Málaga 2023 y la Copa de Andalucía
              Universitaria
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">17 de Diciembre</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Organiza el Duatlón Málaga 2023 y la Copa de Andalucía
              Universitaria
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">30 de Noviembre</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Conferencia inaugural de la Semana del Cómic: "Usted está leyendo
              cómics: ¡¿pero qué hace?!
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">8 de Diciembre</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Semana del Cómic de La Laguna, incluyendo conferencias, talleres y
              seminarios.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">17 de Diciembre</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Organiza el Duatlón Málaga 2023 y la Copa de Andalucía
              Universitaria
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card align="center" justify="center">
          <CardFooter>
            <Button colorScheme="blue">
              <Text fontSize="6xl" marginBottom="1rem" marginTop="0.3rem">
                +
              </Text>
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Información Adicional</ModalHeader>
          <ModalCloseButton />
          <ModalBody>holis</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
