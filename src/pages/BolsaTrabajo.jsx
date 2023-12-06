import {
  Input,
  Flex,
  Heading,
  Text,
  Box,
  Card,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaYoutube, FaInstagram, FaTimes } from "react-icons/fa";

import { GiEagleHead } from "react-icons/gi";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { MenuCircular } from "../components/MenuCirular.jsx";
import { SpeechToText } from "../components/SpeechToText.jsx";
import { motion } from "framer-motion";

import { ListItem, UnorderedList } from "@chakra-ui/react";

function BolsaTrabajo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isEditing, setisEditing] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const [numJobs, setnumJobs] = useState("");
  const [selectedOfferId, setSelectedOfferId] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Desarrollador de Software",
      description:
        "Puesto de Desarrollador FullStack medio tiempo - Home Office",
      image: "/src/assets/chambaaa.jpg",
      pago: "10,000-12,000/Mes",
      ubicacion:
        "Educación Tecnológica 34, Fracc. Universidad, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto.",
      contacto: "contacto@empresa.com",
      horario: "Medio tiempo de 8 am - 1 pm. Lunes a Viernes",
    },
    {
      id: 2,
      title: "Mesero",
      description: "Puesto de mesero medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "6,000-12,000/Mes",
      ubicacion:
        "Dolores Hidalgo, San francisco 3, Colonia San José, 37800 Dolores, Gto.",
      contacto: "empleo@restaurante.com",
      horario: "Medio tiempo de 6pm a 11pm. Lunes a Viernes",
    },
    {
      id: 3,
      title: "Asistente Administrativo",
      description: "Puesto de asistente administrativo medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "7,000-9,000/Mes",
      ubicacion: "Avenida Principal 123, Colonia Centro, 37000 León, Gto.",
      contacto: "rrhh@empresa.com",
      horario: "Medio tiempo de 9 am - 2 pm. Lunes a Viernes",
    },
    {
      id: 4,
      title: "Tutor de Matemáticas",
      description:
        "Puesto de tutor de matemáticas para estudiantes de secundaria",
      image: "/src/assets/chambaaa.jpg",
      pago: "150-200/Hora",
      ubicacion:
        "Calle de los Estudiantes 45, Colonia Educativa, 37500 Guanajuato, Gto.",
      contacto: "tutorias@colegio.com",
      horario: "Fines de semana por la mañana",
    },
    {
      id: 5,
      title: "Recepcionista",
      description: "Puesto de recepcionista medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "6,000-8,000/Mes",
      ubicacion: "Plaza Principal 10, Colonia Centro, 37000 León, Gto.",
      contacto: "info@hotel.com",
      horario: "Medio tiempo de 3 pm - 8 pm. Lunes a Viernes",
    },
    {
      id: 6,
      title: "Cajero de Tienda",
      description: "Puesto de cajero en tienda de conveniencia",
      image: "/src/assets/chambaaa.jpg",
      pago: "5,000-7,000/Mes",
      ubicacion:
        "Boulevard Independencia 234, Colonia Independencia, 37050 León, Gto.",
      contacto: "empleos@tienda.com",
      horario: "Medio tiempo rotativo",
    },
    {
      id: 7,
      title: "Diseñador Gráfico",
      description: "Puesto de diseñador gráfico medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "8,000-10,000/Mes",
      ubicacion: "Calle Creativa 123, Colonia Arte, 37000 León, Gto.",
      contacto: "design@empresa.com",
      horario: "Medio tiempo flexible",
    },
    {
      id: 8,
      title: "Profesor de Inglés",
      description: "Puesto de profesor de inglés para primaria",
      image: "/src/assets/chambaaa.jpg",
      pago: "200-250/Hora",
      ubicacion: "Avenida Bilingüe 456, Colonia Educación, 37050 León, Gto.",
      contacto: "english@colegio.com",
      horario: "Fines de semana por la mañana",
    },
    {
      id: 9,
      title: "Asistente de Marketing",
      description: "Puesto de asistente de marketing medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "6,000-8,000/Mes",
      ubicacion:
        "Plaza Marketing 10, Colonia Publicidad, 37500 Guanajuato, Gto.",
      contacto: "marketing@empresa.com",
      horario: "Medio tiempo de 9 am - 2 pm. Lunes a Viernes",
    },
    {
      id: 10,
      title: "Repartidor de Alimentos",
      description: "Puesto de repartidor de alimentos para restaurante",
      image: "/src/assets/chambaaa.jpg",
      pago: "100-150/Pedido",
      ubicacion:
        "Calle Repartición 789, Colonia Comida Rápida, 37800 Dolores, Gto.",
      contacto: "delivery@restaurante.com",
      horario: "Medio tiempo, turnos flexibles",
    },
    {
      id: 11,
      title: "Diseñador Gráfico Junior",
      description:
        "Posición para un diseñador gráfico junior en una agencia creativa.",
      image: "/src/assets/chambaaa.jpg",
      pago: "8,000-10,000/Mes",
      ubicacion:
        "Calle Creativa 123, Colonia Arte, 38000 Ciudad Creativa, Gto.",
      contacto: "design@agenciacreativa.com",
      horario: "Tiempo completo de 9 am - 6 pm. Lunes a Viernes",
    },
    {
      id: 12,
      title: "Asistente de Marketing Digital",
      description:
        "Puesto de asistente de marketing digital en una empresa de tecnología.",
      image: "/src/assets/chambaaa.jpg",
      pago: "7,000-9,000/Mes",
      ubicacion: "Avenida Digital 456, Colonia Tech, 37000 Ciudad Tecno, Gto.",
      contacto: "marketing@tecnologiaco.com",
      horario: "Medio tiempo de 10 am - 3 pm. Lunes a Viernes",
    },
    {
      id: 13,
      title: "Repartidor de Alimentos",
      description:
        "Posición para repartir alimentos a domicilio en una cadena de restaurantes.",
      image: "/src/assets/chambaaa.jpg",
      pago: "5,000-7,000/Mes + bonos por entrega",
      ubicacion:
        "Calle de la Entrega 789, Colonia Comida, 37500 Ciudad Entregas, Gto.",
      contacto: "delivery@restaurantes.com",
      horario: "Tiempo parcial con horario flexible",
    },
    {
      id: 14,
      title: "Profesor de Idiomas",
      description:
        "Puesto de profesor de idiomas para enseñar inglés a jóvenes y adultos.",
      image: "/src/assets/chambaaa.jpg",
      pago: "200-300/Hora",
      ubicacion:
        "Calle del Idioma 567, Colonia Bilingüe, 38050 Ciudad Idiomática, Gto.",
      contacto: "idiomas@academiadeidiomas.com",
      horario: "Clases particulares, horario a convenir",
    },
    {
      id: 15,
      title: "Servicio al Cliente",
      description: "Posición para atención al cliente en una tienda de retail.",
      image: "/src/assets/chambaaa.jpg",
      pago: "6,000-8,000/Mes",
      ubicacion:
        "Boulevard del Cliente 890, Colonia Retail, 37060 Ciudad Servicio, Gto.",
      contacto: "atencion@tiendaretail.com",
      horario: "Tiempo completo con turnos rotativos",
    },
    // Más ofertas de trabajo...
  ];

  const handleInputChange = (event) => {
    const searchterm = event.target.value;

    setSearchTerm(searchterm);

    if (searchterm === "") {
      // Si no hay término de búsqueda, mostrar todas las ofertas
      setFilteredJobs(jobs);
      setisEditing(true);
    } else {
      // Filtrar las ofertas según el término de búsqueda
      const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchterm.toLowerCase())
      );
      setisEditing(false);
      setFilteredJobs(filteredJobs);
    }
  };
  const handleJobClick = (job) => {
    console.log(`Clic en oferta de trabajo: ${job.title}`);
    setSelectedJob(job);
    setShowMessage(false);
    setSelectedOfferId(job.id);
  };

  const handleClose = () => {
    setSelectedJob(null); // Vuelve al estado inicial (ningún trabajo seleccionado)
    setShowMessage(true); // Muestra el mensaje nuevamente
    setSelectedOfferId("");
  };

  useEffect(() => {
    const conteo = jobs.length;
    setnumJobs(conteo);
  }, [jobs]);

  return (
    <>
      <Header />
      <Flex
        minHeight="100vh"
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        p="6"
        style={{ backgroundColor: "#ffffff" }}
      >
        <SpeechToText />
        <MenuCircular />
        {/* Parte izquierda con campo de búsqueda */}
        <Box
          flex={{ base: "1", md: "0 0 350px" }}
          minWidth="0"
          mt={{ base: "4", md: "0" }}
          ml={"4rem"}
          mr={"4rem"}
          style={{
            backgroundColor: "#ffffff",
            overflow: "auto",
            maxHeight: "calc(100vh - 50px)",
          }}
        >
          <Input
            _hover={{ border: "2px solid #0B2447" }}
            borderRadius="0"
            border="2px solid #0B2447"
            p="1.7rem"
            boxShadow="7px 7px 0px 0px #0B2447"
            placeholder="Buscar trabajo..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Box mt="4" p="2" border="1px" borderColor="gray.200">
            Lista de resultados ({numJobs})
          </Box>
          {isEditing ? <></> : <></>}
          {/* Mostrar trabajos en la lista de resultados */}
          <UnorderedList>
            {filteredJobs.length > 0
              ? filteredJobs.map((job) => (
                  <ListItem>
                    <Card
                      key={job.id}
                      borderBottom="1px"
                      borderColor="gray.200"
                      onClick={() => handleJobClick(job)}
                      cursor="pointer"
                    >
                      <Heading as="h3" size="md" mb="2">
                        {job.title}
                      </Heading>
                      <Text fontSize="sm">{job.description}</Text>
                    </Card>
                  </ListItem>
                ))
              : jobs.map((job) => (
                  <ListItem key={job.id}>
                    <Box
                      borderBottom="1px"
                      borderColor="gray.200"
                      onClick={() => handleJobClick(job)}
                      cursor="pointer"
                      border={
                        selectedJob && selectedJob.id === job.id
                          ? "2px solid #00259A"
                          : ""
                      }
                    >
                      <Heading as="h3" size="md" mb="2">
                        {job.title}
                      </Heading>
                      <Text fontSize="sm">{job.description}</Text>
                    </Box>
                  </ListItem>
                ))}
          </UnorderedList>
        </Box>

        {/* Parte derecha */}
        <Flex
          direction={{ base: "1" }}
          flex={{ md: "1 1 650px" }}
          justifyContent="center"
          p="6"
          ml={"2rem"}
          style={{ backgroundColor: "#ffffff" }}
        >
          <div style={{ textAlign: "center" }}>
            {selectedJob ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
                key={selectedJob.id}
                sx={{ border: "2px solid #00259A" }}
              >
                <Card
                  boxShadow="2xl"
                  maxW={{ base: "55%", md: "full", lg: "full" }}
                  mt={"1rem"}
                  mb="3rem"
                  transition="transform 0.3s ease-out, box-shadow 0.3s ease-in-out"
                  sx={{ border: "2px solid #00259A" }}
                  _hover={{
                    transform: "translateY(-10px)",
                    boxShadow: "5px 5px #00259A",
                  }}
                >
                  <CardHeader>
                    <Heading size="md" mb="1rem">
                      {selectedJob.title}
                    </Heading>
                    <Button
                      onClick={handleClose}
                      position="absolute"
                      top={"0"}
                      right={"0"}
                      m={"0.5rem"}
                    >
                      <FaTimes />
                    </Button>
                    <Text justifyContent={"end"}>
                      <span style={{ fontWeight: 700 }}>Horario: </span>
                      {selectedJob.horario}
                    </Text>
                    <Text>
                      <span style={{ fontWeight: 700 }}>Descripción: </span>
                      {selectedJob.description}
                    </Text>
                    <Text>
                      <span style={{ fontWeight: 700 }}>Pago: </span>
                      {selectedJob.pago}
                    </Text>
                    <Text>
                      <span style={{ fontWeight: 700 }}>Ubicacion: </span>
                      {selectedJob.ubicacion}
                    </Text>
                    <Text>
                      <span style={{ fontWeight: 700 }}>Contacto: </span>
                      {selectedJob.contacto}
                    </Text>
                    <Text className="d-flex justify-content-center">
                      <a
                        href="https://www.facebook.com/profile.php?id=100064830062888"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook size={30} />
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.youtube.com/channel/UC5aD8RBROQYeDSIX54hjwBw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube size={30} />
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.instagram.com/utngdoloreshidalgo_/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={30} />
                      </a>
                    </Text>
                    {/* Agrega más detalles de la oferta si es necesario */}
                  </CardHeader>
                </Card>
              </motion.div>
            ) : (
              showMessage && (
                <>
                  <Heading as="h4" size="15rem">
                    Encontramos estas vacantes de acuerdo a tu búsqueda
                  </Heading>
                  <Heading as="h5" size="sm">
                    Selecciona una de la lista para visualizar su información.
                  </Heading>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <GiEagleHead size={"15rem"} className="eagle-icon" />
                  </div>
                </>
              )
            )}
          </div>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default BolsaTrabajo;
