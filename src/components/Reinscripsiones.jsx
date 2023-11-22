import {
  Card,
  CardBody,
  Box,
  SimpleGrid,
  Image,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";

export function Reinscripciones() {
  return (
    <>
      <Header></Header>
      <Box p="3rem">
        <Heading size="md" mb="2rem" align="center" justify="center">
          Técnico superior universitario
        </Heading>
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        >
          <Card>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Maratón de Código y Hackathon
              </Heading>
              <Text>Fecha: 11 diciembre</Text>
              <Text>
                Actividades: Desarrollo de proyectos de software, talleres de
                programación, premiación a las mejores soluciones.
              </Text>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Maratón de Código y Hackathon
              </Heading>
              <Text>Fecha: 11 diciembre</Text>
              <Text>
                Actividades: Desarrollo de proyectos de software, talleres de
                programación, premiación a las mejores soluciones.
              </Text>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Maratón de Código y Hackathon
              </Heading>
              <Text>Fecha: 11 diciembre</Text>
              <Text>
                Actividades: Desarrollo de proyectos de software, talleres de
                programación, premiación a las mejores soluciones.
              </Text>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Maratón de Código y Hackathon
              </Heading>
              <Text>Fecha: 11 diciembre</Text>
              <Text>
                Actividades: Desarrollo de proyectos de software, talleres de
                programación, premiación a las mejores soluciones.
              </Text>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Maratón de Código y Hackathon
              </Heading>
              <Text>Fecha: 11 diciembre</Text>
              <Text>
                Actividades: Desarrollo de proyectos de software, talleres de
                programación, premiación a las mejores soluciones.
              </Text>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Maratón de Código y Hackathon
              </Heading>
              <Text>Fecha: 11 diciembre</Text>
              <Text>
                Actividades: Desarrollo de proyectos de software, talleres de
                programación, premiación a las mejores soluciones.
              </Text>
            </CardHeader>
          </Card>
        </SimpleGrid>
      </Box>

      <Footer></Footer>
    </>
  );
}
