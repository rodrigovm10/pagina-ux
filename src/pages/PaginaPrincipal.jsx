import { Image, Input, Flex, Heading, Text, Box } from '@chakra-ui/react'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'
import imgPrincipal from '../assets/paginaPrincipal.png'
import { CardPPrincipal } from '../components/CardPPrincipal.jsx'
import { Search } from '../assets/Icons.jsx'

export function PaginaPrincipal() {
  return (
    <>
      <Header />
      <Flex
        maxW='70%'
        m='0 auto'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        mt='2rem'
        gap={{ base: '1.3rem', lg: '2rem' }}>
        <form>
          <Box position='relative'>
            <Box
              position='absolute'
              right={3}
              top={2} // Ajusta la posición según tus necesidades
            >
              <Search />
            </Box>
            <Input
              maxW='70vw'
              w='55rem'
              position='relative'
            />
          </Box>
        </form>
        <Image
          src={imgPrincipal}
          objectFit='contain'
          maxW='70vw'
          h='30rem'
        />
        <Heading
          as='h1'
          fontSize='2rem'
          textAlign='center'>
          ¡Bienvenidos a la Universidad Tecnologica del Norte de Guanajuato!
        </Heading>
        <Text w='68vw'>
          La educación va más allá de la memorización; es un camino para inspirar, innovar y transformar. Cada libro que
          abres te lleva a un nuevo mundo, y cada práctica que realizas te ayuda a moldear el tuyo. Estamos emocionados
          de que te unas a nuestra comunidad y compartas nuestro compromiso con la excelencia académica y los valores
          fundamentales que nos guían.
        </Text>
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          gap='2rem'
          alignItems={{ base: 'center', lg: 'stretch' }}>
          <CardPPrincipal
            wLg='15rem'
            title='Misión'
            text='Somos una institución de Educación Superior Tecnológica dedicada a la formación integral de profesionales líderes en los niveles de Técnico Superior Universitario y Licenciatura, ofreciendo programas educativos de excelencia.'
          />
          <CardPPrincipal
            wLg='30rem'
            title='Visión'
            text='Para el año 2026, la Universidad Tecnológica del Norte de Guanajuato se destacará a nivel nacional e internacional por la formación de egresados altamente competitivos que se integran exitosamente al ámbito laboral, destacando por su sólida formación humana e integral. Nos enfocamos en promover la igualdad y la no discriminación, el desarrollo sostenible y la preservación del medio ambiente, así como el respeto de los derechos humanos.'
          />
          <CardPPrincipal
            wLg='15rem'
            wBase='10rem'
            title='Valores'
            text='Trabajo en equipo Comunicación Honestidad Respeto'
          />
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
