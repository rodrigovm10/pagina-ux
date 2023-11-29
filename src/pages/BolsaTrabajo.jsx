import {  Input, Flex, Heading, Text, Box, Grid, Center } from "@chakra-ui/react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { GiEagleHead } from "react-icons/gi";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from "react";


function BolsaTrabajo() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isEditing, setisEditing] = useState(true);

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
      title: "Enfermera",
      description: "Puesto de enfermera general en el IMSS medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "8,000-10,000/Mes",
      ubicacion:
        "Guanajuato 40, Centro, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto.",
      contacto: "info@hospital.com",
      horario: "Medio tiempo de 6am - 10am. Lunes a Domingo",
    },
    {
      id: 3,
      title: "Piscador",
      description: "Puesto de piscador de fresas medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "8,000-9,000/Mes",
      ubicacion: "La Morera, 37806 Carretera a Guanajuato km Uno, Gto.",
      contacto: "rrhh@agricola.com",
      horario: "Medio tiempo de 6am - 11am. Lunes a Viernes",
    },
    {
      id: 4,
      title: "Mesero",
      description: "Puesto de mesero medio tiempo",
      image: "/src/assets/chambaaa.jpg",
      pago: "6,000-12,000/Mes",
      ubicacion:
        "Dolores Hidalgo, San francisco 3, Colonia San José, 37800 Dolores, Gto.",
      contacto: "empleo@restaurante.com",
      horario: "Medio tiempo de 6pm a 11pm. Lunes a Viernes",
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
  };

  return (
    <>
      <Header />
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        p="6"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Parte izquierda con campo de búsqueda */}
        <Box
          flex={{ base: "1", md: "0 0 300px" }}
          minWidth="0"
          mt={{ base: "4", md: "0" }}
          style={{ backgroundColor: "#ffffff" }}
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
            Lista de resultados
          </Box>
          {isEditing ? <></> : <></>}
          {/* Mostrar trabajos en la lista de resultados */}
          {filteredJobs.length > 0
           ? filteredJobs.map((job) => (
            <Box
              key={job.id}
              p="4"
              borderBottom="1px"
              borderColor="gray.200"
              onClick={() => handleJobClick(job)}
              cursor="pointer"
            >
              <Heading as="h3" size="md" mb="2">
                {job.title}
              </Heading>
              <Text fontSize="sm">{job.description}</Text>
            </Box>
          )):( jobs.map((job) => (
            <Box
              key={job.id}
              p="4"
              borderBottom="1px"
              borderColor="gray.200"
              onClick={() => handleJobClick(job)}
              cursor="pointer"
            >
              <Heading as="h3" size="md" mb="2">
                {job.title}
              </Heading>
              <Text fontSize="sm">{job.description}</Text>
            </Box>
          )))}
        </Box>

        {/* Parte derecha */}
        <Flex
          direction={{ base: "column" }}
          justifyContent="center"
          p="6"
          ml={"4rem"}
          style={{ backgroundColor: "#ffffff" }}
        >
          <div style={{ textAlign: 'center' }} >
            <Heading as="h4" size="15rem">Encontramos estas vacantes de acuerdo a tu búsqueda</Heading>
            <Heading as="h5" size="sm">Selecciona una de la lista para visualizar su información.</Heading>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GiEagleHead size={"15rem"} />
            </div>
                    
          </div>
        </Flex>
      </Flex>
    
      <Footer />
    </>
  );
}

export default BolsaTrabajo;
