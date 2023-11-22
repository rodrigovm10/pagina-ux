import React, { useState } from "react";
import {
  Card,
  SimpleGrid,
  CardHeader,
  Heading,
  Text,
  CardFooter,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";

export function Calendario() {
  const currentMonth = new Date().toLocaleString("es", { month: "long" });
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCardExpansion = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };
  return (
    <>
      <Header />
      <Box p="3rem" w="90%" m="0 auto">
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        >
          <Image
            w={{ base: "60%", sm: "full", md: "full", lg: "full" }}
            objectFit="cover"
            borderRadius="1rem"
            src="https://media.istockphoto.com/id/1370276409/es/foto/hombre-asi%C3%A1tico-de-cuello-blanco-marcando-la-fecha-en-el-calendario-del-escritorio.jpg?s=612x612&w=0&k=20&c=L-fRHj1PoZHZ_VJviN_iw9PIEK8N_KcFO8QWiJBmZjQ="
            alt="Calendario UTNG"
          />
          <Card maxW={{ base: "60%", lg: "full" }}>
            <CardHeader>
              <Heading size="md">
                Noticias
                {" " +
                  currentMonth.charAt(0).toUpperCase() +
                  currentMonth.slice(1)}
              </Heading>
            </CardHeader>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Feria de Empleo y Prácticas Profesionales
              </Heading>
              <Text>Fecha: 1 de diciembre</Text>
              <Text>
                Actividades: Stands de empresas, entrevistas en el lugar,
                talleres de desarrollo profesional.
              </Text>
            </CardHeader>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Festival Cultural de Invierno
              </Heading>
              <Text>Fecha: 4 diciembre</Text>
              <Text>
                Actividades: Puestos de comida internacional, actuaciones
                musicales y danzas, exposiciones de arte.
              </Text>
            </CardHeader>
          </Card>
          <Card maxW={{ base: "60%", lg: "full" }}>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Seminario de Estrés y Manejo del Tiempo
              </Heading>
              <Text>Fecha: 5 diciembre</Text>
              <Text>
                Actividades: Sesiones de asesoramiento, técnicas de relajación,
                planificación del tiempo.
              </Text>
            </CardHeader>
          </Card>
          <Card maxW={{ base: "60%", lg: "full" }}>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Torneo Deportivo Interfacultades
              </Heading>
              <Text>Fecha: 6 diciembre</Text>
              <Text>
                Actividades: Competencias en diferentes deportes, ceremonia de
                premiación, actividades recreativas.
              </Text>
            </CardHeader>
          </Card>
          <Card maxW={{ base: "60%", lg: "full" }}>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Exposición de Proyectos de Fin de Semestre
              </Heading>
              <Text>Fecha: 7 diciembre</Text>
              <Text>
                Actividades: Presentaciones de proyectos, demostraciones
                prácticas, sesiones de retroalimentación.
              </Text>
            </CardHeader>
          </Card>
          <Card maxW={{ base: "60%", lg: "full" }}>
            <CardHeader>
              <Heading size="md" mb="1rem">
                Taller de Escritura Creativa
              </Heading>
              <Text>Fecha: 8 diciembre</Text>
              <Text>
                Actividades: Puestos de comida internacional, actuaciones
                musicales y danzas, exposiciones de arte.
              </Text>
            </CardHeader>
          </Card>
          <Card maxW={{ base: "60%", lg: "full" }}>
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
          <Card
            align="center"
            justify="center"
            maxW={{ base: "60%", lg: "full" }}
          >
            {expandedCard !== "FeriaEmpleo" && (
              <>
                <CardFooter>
                  <Button
                    colorScheme="blue"
                    onClick={() => toggleCardExpansion("FeriaEmpleo")}
                  >
                    <Text fontSize="6xl" marginBottom="1rem">
                      +
                    </Text>
                  </Button>
                </CardFooter>
              </>
            )}
            {expandedCard === "FeriaEmpleo" && (
              <CardHeader>
                <Heading size="md" mb="1rem">
                  Conferencia Sobre React por la Empresa Optimen
                </Heading>
                <Text>Fecha: 12 diciembre en Aerovisual Edificio F</Text>
                <Text>
                  Actividades: Presentaciones técnicas, sesión de preguntas y
                  respuestas, y un taller práctico.
                </Text>
              </CardHeader>
            )}
          </Card>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
