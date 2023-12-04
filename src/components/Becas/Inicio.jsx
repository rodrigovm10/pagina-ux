import React from 'react';
import { Text, Image, SimpleGrid, Card, CardHeader, Heading, Box } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import beca from '../../assets/Conoce-las-becas.jpg';
import beca1 from '../../assets/beca1.jpg';
import beca2 from '../../assets/beca2.jpg';
import Slider from 'react-slick';

const ScholarshipBanner = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 60,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <SimpleGrid
          spacing={6}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          p='1rem'>
          <Box w='full' borderRadius='1rem' overflow='hidden'>
            <Slider {...settings}>
             <Image src={beca} alt='Beca 1' />
             <Image src={beca1} alt='Beca 2' />
             <Image src={beca2} alt='Beca 3' />
            </Slider>
          </Box>
          <Card>
            <CardHeader>
              <Heading
                size={{ base: "xl", md: "2xl" }}
                textAlign='center'>
                Becas
              </Heading>
            </CardHeader>
            <CardHeader>
            <Text textAlign='justify'>
                Las becas universitarias cumplen una función crucial en el mundo de la educación superior al desempeñar
                múltiples roles interconectados. En primer lugar, actúan como un mecanismo efectivo para abrir las
                puertas de la educación superior a una amplia variedad de estudiantes, independientemente de su
                situación económica.
              </Text>
              <Text textAlign='justify'>
                Esto se traduce en un acceso más inclusivo y democrático a la educación superior,
                lo que a su vez promueve la igualdad de oportunidades en la sociedad. Además, las becas funcionan como
                un sistema de reconocimiento y recompensa del mérito académico y otros logros destacados.
              </Text>
              <Text textAlign='justufy'>
                Al otorgar becas a estudiantes que demuestran excelencia académica, talento artístico, habilidades
                deportivas o compromiso cívico, se motiva a los jóvenes a esforzarse y a destacar en sus respectivas
                áreas de interés. Esto, a su vez, impulsa la calidad y la diversidad del talento que ingresa a la educación
                superior.
              </Text>
            </CardHeader>
          </Card>
        </SimpleGrid>
  );
};

export default ScholarshipBanner;