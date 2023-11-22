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
import Modal from "react-bootstrap/Modal";
/* import Button from 'react-bootstrap/Button';
 */ import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { useState } from "react";

export function Becas() {
  const [show, setShow] = useState(false);
  const [showCul, setShowCul] = useState(false);
  const [showAca, setShowAca] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCul = () => setShowCul(false);
  const handleShowCul = () => setShowCul(true);

  const handleCloseAca = () => setShowAca(false);
  const handleShowAca = () => setShowAca(true);

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
              src="https://media.istockphoto.com/id/1292319470/es/vector/concepto-de-celebraci%C3%B3n-de-graduados-con-mujer-feliz-estudiante.jpg?s=2048x2048&w=is&k=20&c=R_2Rz9KrpGWC-5vi4rMavBV449pIP-3EHcN-9IbPEmQ="
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
              <Heading size="md"> APOYO ALIMENTICIO </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Consiste en la ministración de una comida al día en la
                Universidad a los alumnos de la modalidad escolarizada, los
                solicitantes deberán entregar el formato de canalización del
                tutor académico para tener derecho a la solicitud del apoyo.
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={handleShow}>Aplicar</Button>
            </CardFooter>
          </Card>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Información de Becas</Modal.Title>
            </Modal.Header>
            <Modal.Body>Becas academicas</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Card>
            <CardHeader>
              <Heading size="md"> APOYO DEPORTIVO Y CULTURAL </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Consiste en la exención del 100% en el pago de la inscripción
                cuatrimestral para los alumnos del primero al quinto
                cuatrimestre y del 50% para los alumnos del séptimo al onceavo
                cuatrimestre, que sean seleccionados para representar a la
                Universidad en eventos deportivos o culturales oficiales.
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={handleShowCul}> Aplicar </Button>
            </CardFooter>
          </Card>
          <Modal show={showCul} onHide={handleCloseCul}>
            <Modal.Header closeButton>
              <Modal.Title>Información de Becas</Modal.Title>
            </Modal.Header>
            <Modal.Body>Becas no academicas</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseCul}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Card>
            <CardHeader>
              <Heading size="md"> APOYO POR RENDIMIENTO ACADÉMICO </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Consiste en la exención de un porcentaje del pago de la
                inscripción cuatrimestral a los alumnos de la Universidad y se
                establece conforme a los siguientes cuatrimestres, promedios y
                porcentajes de excención:
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={handleShowAca}>Aplicar</Button>
            </CardFooter>
          </Card>
          <Modal show={showAca} onHide={handleCloseAca}>
            <Modal.Header closeButton>
              <Modal.Title>Información de Becas</Modal.Title>
            </Modal.Header>
            <Modal.Body>Becas pobre academicas</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAca}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
