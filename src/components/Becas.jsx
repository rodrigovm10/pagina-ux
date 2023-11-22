import {
  Card,
  CardBody,
  Box,
  SimpleGrid,
  Image,
  CardHeader,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";

export function Becas() {
  return (
    <>
      <Header></Header>
      <Box p="3rem">
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
          p="1rem"
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
              <Heading size="md" align="center" justify="center">
                Becas
              </Heading>
            </CardHeader>
            <CardHeader>
              <Text>
                Las becas universitarias cumplen una función crucial en el mundo
                de la educación superior al desempeñar múltiples roles
                interconectados. En primer lugar, actúan como un mecanismo
                efectivo para abrir las puertas de la educación superior a una
                amplia variedad de estudiantes, independientemente de su
                situación económica. Esto se traduce en un acceso más inclusivo
                y democrático a la educación superior, lo que a su vez promueve
                la igualdad de oportunidades en la sociedad. Además, las becas
                funcionan como un sistema de reconocimiento y recompensa del
                mérito académico y otros logros destacados. Al otorgar becas a
                estudiantes que demuestran excelencia académica, talento
                artístico, habilidades deportivas o compromiso cívico, se motiva
                a los jóvenes a esforzarse y a destacar en sus respectivas áreas
                de interés. Esto, a su vez, impulsa la calidad y la diversidad
                del talento que ingresa a la educación superior.
              </Text>
            </CardHeader>
          </Card>
        </SimpleGrid>
        <Heading size="md" align="center" justify="center">
          Te puede interesar ...
        </Heading>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
          p="1rem"
        >
          <Card>
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>

      <Footer></Footer>
    </>
  );
}
