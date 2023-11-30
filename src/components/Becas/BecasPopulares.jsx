import React, { useState } from 'react';
import { Box, Modal, Flex, Text, Circle, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Link, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ScholarshipCard = ({ title, description, dates, status, verMas, onOpenModal, showMoreInfoButton }) => {
    return (
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2} w="300px" h="350px"> 
        <Text fontWeight="bold" isTruncated>{title}</Text>
        <Text noOfLines={6} align="justify" overflow="hidden">{description}</Text>
        {verMas && (
          <Button href={verMas} target='_blank' mt={3} colorScheme="green">
            Ver más
          </Button>
        )}
        {showMoreInfoButton && (
            <Button onClick={() => onOpenModal({ title, description, dates, status, verMas })} mt={3} colorScheme="blue">
                Más Información
            </Button>
        )}
        <Text fontSize="sm">Inscripciones: {dates}</Text>
        <Flex align="center" mt="auto">
          <Circle size="10px" bg={status === 'Abierta' ? 'green.500' : 'red.500'} mr={2} />
          <Text fontSize="sm">{status}</Text>
        </Flex>
      </Box>
    );
  };

const Carousel = () => {
  const navigate = useNavigate()
  const [tabIndex, setTabIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [controlNumber, setControlNumber] = useState('')


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedScholarship(null);
  };

  const scholarshipsSet1 = [
    {
      title: 'APOYO POR NECESIDAD APREMIANTE',
      description: 'Consiste en la ministración mensual no reembolsable de una cantidad de dinero, a los alumnos con promedio mínimo de ocho y necesidad económica extrema que ponga en riesgo la continuidad de sus estudios en la Universidad.',
      dates: 'del 09/01/2024 al 10/01/2024',
      status: 'Abierta',
    },
  ];

  const scholarshipsSet2 = [
    {
      title: 'APOYO ALIMENTICIO',
      description: 'Consiste en la ministración de una comida al día en la Universidad a los alumnos de la modalidad escolarizada, los solicitantes deberán entregar el formato de canalización del tutor académico para tener derecho a la solicitud del apoyo.',
      dates: 'del 09/01/2024 al 10/01/2024',
      status: 'Próximamente',
    },
    {
        title: 'APOYO DEPORTIVO Y CULTURAL',
        description: 'Consiste en la exención del 100% en el pago de la inscripción cuatrimestral para los alumnos del primero al quinto cuatrimestre y del 50% para los alumnos del séptimo al onceavo cuatrimestre, que sean seleccionados para representar a la Universidad en eventos deportivos o culturales oficiales.',
        dates: 'del 09/01/2024 al 10/01/2024',
        status: 'Próximamente',
    },
    {
      title: 'APOYO POR RENDIMIENTO ACADÉMICO',
      description: 'Consiste en la exención de un porcentaje del pago de la inscripción cuatrimestral a los alumnos de la Universidad y se establece conforme a los siguientes cuatrimestres, promedios y porcentajes de excención:',
      dates: 'del 09/01/2024 al 10/01/2024',
      status: 'Próximamente',
    },
    {
        title: 'APOYO POR NECESIDAD APREMIANTE',
        description: 'Consiste en la ministración mensual no reembolsable de una cantidad de dinero, a los alumnos con promedio mínimo de ocho y necesidad económica extrema que ponga en riesgo la continuidad de sus estudios en la Universidad.',
        dates: 'del 09/01/2024 al 10/01/2024',
        status: 'Próximamente',
    },
    {
      title: 'APOYO POR RENDIMIENTO ACADÉMICO',
      description: 'Consiste en la exención de un porcentaje del pago de la inscripción cuatrimestral a los alumnos de la Universidad y se establece conforme a los siguientes cuatrimestres, promedios y porcentajes de excención:',
      dates: 'del 09/01/2023 al 31 /12/2023',
      status: 'Próximamente',
  },
  ];

  const scholarshipsSet3 = [
    {
        title: 'PREPARATE JUVENTUDES',
        description: 'El Gobierno del Estado de Guanajuato a través del Instituto para el Desarrollo y Atención a las Juventudes del Estado de Guanajuato convoca a personas guanajuatenses interesadas en concluir sus estudios de Educación Media Superior a través de “Prepárate JuventudEsGTO”',
        dates: 'del 09/01/2023 al 31 /12/2023',
        verMas: 'https://juventudesgto.guanajuato.gob.mx/wp-content/uploads/prepa_in.pdf',
        status: 'Abierta',
    },
    {
        title: 'MULTIPLICADORES DE LA PAZ “5TA. GENERACIÓN”',
        description: 'El Gobierno del Estado de Guanajuato a través del Instituto para el Desarrollo y Atención a las Juventudes del Estado de Guanajuato convoca a personas guanajuatenses interesadas en concluir sus estudios de Educación Media Superior a través de “Prepárate JuventudEsGTO”',
        verMas: 'https://juventudesgto.guanajuato.gob.mx/wp-content/uploads/multiplicadores-de-la-paz-5ta-generacion.pdf',
        dates: 'del 09/01/2023 al 31 /12/2023',
        status: 'Abierta',
    },
  ];

  const tabStyle = {
    _selected: { color: 'white', bg: 'teal.500', mb: '3' },
    _focus: { boxShadow: 'none' },
  };

  const handleOpenModal = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
};

  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleInputChange = e => {
    const { value } = e.target
    // Asegúrate de que solo se acepten números y que la longitud no exceda de 10 caracteres
    if (value === '' || (value.match(/^[0-9]+$/) && value.length <= 10)) {
      setControlNumber(value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (controlNumber.length === 10) {
      // Si la validación es exitosa, muestra el SweetAlert
      Swal.fire({
        title: '¡Éxito!',
        text: 'Tu información se guardó correctamente, te llegará un correo con los siguientes pasos',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/')
        }
      })
    } else {
      // Si la validación falla, muestra un mensaje de error
      Swal.fire({
        title: 'Error',
        text: 'El número de control debe tener exactamente 10 dígitos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  return (
    <Box overflow="hidden" borderColor={borderColor}  p={8} m={4} >
      <Tabs index={tabIndex} onChange={setTabIndex} variant="soft-rounded" align="center" justify="center" colorScheme="green">
        <TabList borderBottom="1px solid" borderColor={borderColor} mb={2}>
          <Tab {...tabStyle}>Últimas becas</Tab>
          <Tab {...tabStyle}>Próxima fecha de inscripción</Tab>
          <Tab {...tabStyle}>Externas</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
          <Slider key={tabIndex} {...settings}>
          {scholarshipsSet1.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} {...scholarship} onOpenModal={handleOpenModal} showMoreInfoButton={true} />
            ))}
          </Slider>
          </TabPanel>
          <TabPanel>
            <Slider key={tabIndex} {...settings}>
              {scholarshipsSet2.map((scholarship, index) => (
                <ScholarshipCard key={index} {...scholarship} />
              ))}
            </Slider>
          </TabPanel>
          <TabPanel>
            <Slider key={tabIndex} {...settings}>
              {scholarshipsSet3.map((scholarship, index) => (
                <ScholarshipCard key={index} {...scholarship} />
              ))}
            </Slider>
          </TabPanel>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} isCentered>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>{selectedScholarship?.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
      <p><strong>Requisitos:</strong></p>
      <ul>
        <li>Ser alumno regular del cuatrimestre</li>
        <li>No contar con otro tipo de estímulo o apoyo económico</li>
        <li>Obtener un promedio mínimo de ocho en el cuatrimestre anterior sin adeudo de materias al momento de realizar la solicitud</li>
        <li>Realizar una entrevista con el Subdirector de Servicios Escolares.</li>
        <li>
          Solicitud debidamente llenada y firmada por el director del área académica correspondiente, con los siguientes documentos:
          <ul>
            <li>Comprobante de ingresos económicos familiares;</li>
            <li>Carta redactada por el alumno donde exponga las principales razones por las que solicita el apoyo por necesidad apremiante firmada por el solicitante y por el padre o jefe de familia.</li>
          </ul>
        </li>
      </ul>
      <p><strong>Nota:</strong></p>
      <p>Una vez concluido el periodo de la convocatoria el área de Servicios Escolares solicitara al director de área académica correspondiente, la realización de la visita de campo por parte del tutor académico entregando un reporte que valide o no la necesidad del apoyo.</p>
      {/* Aquí puedes agregar tu formulario como antes */}
      <FormControl>
        <FormLabel htmlFor='inputField'>Ingresa aquí tu número de control para aplicar a la beca</FormLabel>
        <Input
          id='inputField'
          placeholder='Ingresa tu número de control'
          value={controlNumber}
          onChange={handleInputChange}
        />
      </FormControl>
      <Button
        colorScheme='teal'
        mt={4}
        type='submit'
        onClick={handleSubmit}>
        Aplicar
      </Button>
    </ModalBody>
              </ModalContent>
          </Modal>
          )}
        </TabPanels>
        
      </Tabs>
    </Box>
  );
};

export default Carousel;