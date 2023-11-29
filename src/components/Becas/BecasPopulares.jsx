import React, { useState } from 'react';
import { Box, Flex, Text, Circle, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue } from '@chakra-ui/react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const ScholarshipCard = ({ title, description, dates, status }) => {
    return (
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2} maxW="sm" h="100%">
        <Text fontWeight="bold" isTruncated>{title}</Text>
        <Text noOfLines={6} align="justify">{description}</Text>
        <Text fontSize="sm">Inscripciones: {dates}</Text>
        <Flex align="center" mt="auto">
          <Circle size="10px" bg={status === 'Abierta' ? 'green.500' : 'Cerrada' ? 'red.500' : '' } mr={2} />
          <Text fontSize="sm">{status}</Text>
        </Flex>
      </Box>
    );
  };

const Carousel = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const scholarshipsSet1 = [
    {
        title: 'APOYO POR RENDIMIENTO ACADÉMICO',
        description: 'Consiste en la exención de un porcentaje del pago de la inscripción cuatrimestral a los alumnos de la Universidad y se establece conforme a los siguientes cuatrimestres, promedios y porcentajes de excención:',
        dates: 'del 01/01/2023 al 31/12/2023',
        status: 'Abierta',
    },
    {
        title: 'APOYO POR NECESIDAD APREMIANTE',
        description: 'Consiste en la ministración mensual no reembolsable de una cantidad de dinero, a los alumnos con promedio mínimo de ocho y necesidad económica extrema que ponga en riesgo la continuidad de sus estudios en la Universidad.',
        dates: 'del 01/01/2023 al 31/12/2023',
        status: 'Abierta',
    },
  ];

  const scholarshipsSet2 = [
    {
      title: 'APOYO ALIMENTICIO',
      description: 'Consiste en la ministración de una comida al día en la Universidad a los alumnos de la modalidad escolarizada, los solicitantes deberán entregar el formato de canalización del tutor académico para tener derecho a la solicitud del apoyo.',
      dates: 'del 01/01/2023 al 31/12/2023',
      status: 'Cerrada',
    },
    {
        title: 'APOYO DEPORTIVO Y CULTURAL',
        description: 'Consiste en la exención del 100% en el pago de la inscripción cuatrimestral para los alumnos del primero al quinto cuatrimestre y del 50% para los alumnos del séptimo al onceavo cuatrimestre, que sean seleccionados para representar a la Universidad en eventos deportivos o culturales oficiales.',
        dates: 'del 01/01/2023 al 31/12/2023',
        status: 'Cerrada',
    },
  ];

  const tabStyle = {
    _selected: { color: 'white', bg: 'teal.500' },
    _focus: { boxShadow: 'none' },
  };

  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box overflow="hidden" borderColor={borderColor}>
      <Tabs index={tabIndex} onChange={setTabIndex} variant="soft-rounded" align="center" justify="center" colorScheme="green">
        <TabList borderBottom="1px solid" borderColor={borderColor}>
          <Tab {...tabStyle}>Últimas becas</Tab>
          <Tab {...tabStyle}>Próxima fecha de inscripción</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Slider key={tabIndex} {...settings}>
            {scholarshipsSet1.map((scholarship, index) => (
                <ScholarshipCard key={scholarship.id} {...scholarship} />
              ))}
            </Slider>
          </TabPanel>
          <TabPanel>
            <Slider  key={tabIndex} {...settings}>
              {scholarshipsSet2.map((scholarship, index) => (
                <ScholarshipCard key={index} {...scholarship} />
              ))}
            </Slider>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Carousel;