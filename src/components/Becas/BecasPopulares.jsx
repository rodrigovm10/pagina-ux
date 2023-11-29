import React from 'react';
import { Box, Flex, Text, Circle } from '@chakra-ui/react';
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
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2}>
      <Text fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
      <Text fontSize="sm">Inscripciones: {dates}</Text>
      <Flex align="center">
        <Circle size="10px" bg={status === 'Abierta' ? 'green.500' : 'red.500'} mr={2} />
        <Text fontSize="sm">{status}</Text>
      </Flex>
    </Box>
  );
};

const Carousel = () => {
  // Datos de ejemplo para las tarjetas, reemplaza con tus datos
  const scholarships = [
    {
      title: 'APOYO ALIMENTICIO',
      description: 'Consiste en la ministración de una comida al día en la Universidad a los alumnos de la modalidad escolarizada, los solicitantes deberán entregar el formato de canalización del tutor académico para tener derecho a la solicitud del apoyo.',
      dates: 'del 01/01/2023 al 31/12/2023',
      status: 'Cerrada',
    },
    {
        title: 'APOYO DEPORTIVO Y CULTURAL',
        description: 'Becas para desempleados y más',
        dates: 'del 01/01/2023 al 31/12/2023',
        status: 'Cerrada',
    },
    {
        title: 'APOYO POR RENDIMIENTO ACADÉMICO',
        description: 'Becas para desempleados y más',
        dates: 'del 01/01/2023 al 31/12/2023',
        status: 'Abierta',
    },
    {
        title: 'APOYO POR NECESIDAD APREMIANTE',
        description: 'Becas para desempleados y más',
        dates: 'del 01/01/2023 al 31/12/2023',
        status: 'Abierta',
    },
  ];

  return (
    <Box overflow="hidden">
      <Slider {...settings}>
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard key={index} {...scholarship} />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
