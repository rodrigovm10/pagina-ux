import React from 'react';
import { Text, Image, SimpleGrid, Card, CardHeader, Heading } from '@chakra-ui/react';
import beca from '../../assets/Conoce-las-becas.jpg';

const ScholarshipBanner = () => {
  return (
    <SimpleGrid
          spacing={6}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          p='1rem'>
          <Image
            w='full'
            objectFit='cover'
            borderRadius='1rem'
            src={beca}
            alt='Calendario UTNG'
            className='zoom'
          />
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
                situación económica. Esto se traduce en un acceso más inclusivo y democrático a la educación superior,
                lo que a su vez promueve la igualdad de oportunidades en la sociedad. Además, las becas funcionan como
                un sistema de reconocimiento y recompensa del mérito académico y otros logros destacados. Al otorgar
                becas a estudiantes que demuestran excelencia académica, talento artístico, habilidades deportivas o
                compromiso cívico, se motiva a los jóvenes a esforzarse y a destacar en sus respectivas áreas de
                interés. Esto, a su vez, impulsa la calidad y la diversidad del talento que ingresa a la educación
                superior.
              </Text>
            </CardHeader>
          </Card>
        </SimpleGrid>
  );
};

export default ScholarshipBanner;
