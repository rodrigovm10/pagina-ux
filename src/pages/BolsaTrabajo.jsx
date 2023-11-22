import { Image, Input, Flex, Heading, Text, Box, Grid } from '@chakra-ui/react'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Search } from '../assets/Icons.jsx'

function BolsaTrabajo() {
  const jobs = [
    {
      id: 1,
      title: 'Desarrollador de Software',
      description: 'Puesto de Desarrollador FullStack medio tiempo - Home Office',
      image: '/src/assets/chambaaa.jpg',
      pago: '10,000-12,000/Mes'
    },
    {
      id: 2,
      title: 'Enfermera',
      description: 'Puesto de enfermera general en el IMSS medio tiempo',
      image: '/src/assets/chambaaa.jpg',
      pago: '8,000-10,000/Mes'
    },
    {
      id: 3,
      title: 'Piscador',
      description: 'Puesto de piscador de fresas medio tiempo',
      image: '/src/assets/chambaaa.jpg',
      pago: '8,000-9,000/Mes'
    },
    {
      id: 4,
      title: 'Mesero',
      description: 'Puesto de mesero medio tiempo',
      image: '/src/assets/chambaaa.jpg',
      pago: '6,000-12,000/Mes'
    }
    // Más ofertas de trabajo...
  ]

  const handleJobClick = job => {
    console.log(`Clic en oferta de trabajo: ${job.title}`)
    // Aquí puedes implementar la lógica para mostrar más detalles o abrir un modal
  }

  return (
    <>
      <Header />
      <Flex
        justifyContent='center'
        p='6'
        style={{ backgroundColor: '#ffffff' }}>
        {/* Parte izquierda con campo de búsqueda */}
        <Box
          position='relative'
          width='300px'
          style={{ backgroundColor: '#ffffff' }}>
          <Box
            mt='4'
            p='2'
            border='1px'
            borderColor='gray.200'
            display='flex'
            alignItems='center'>
            <Input placeholder='Buscar trabajo...' />
            <Search />
          </Box>
          <Box
            mt='4'
            p='2'
            border='1px'
            borderColor='gray.200'>
            Lista de resultados
          </Box>
          {/* Mostrar trabajos en la lista de resultados */}
          {jobs.map(job => (
            <Box
              key={job.id}
              p='4'
              borderBottom='1px'
              borderColor='gray.200'
              onClick={() => handleJobClick(job)}
              cursor='pointer'>
              <Heading
                as='h3'
                size='md'
                mb='2'>
                {job.title}
              </Heading>
              <Text fontSize='sm'>{job.description}</Text>
            </Box>
          ))}
        </Box>

        {/* Parte derecha con las tarjetas */}
        <Grid
          gridTemplateColumns='repeat(1, 1fr)' // Dos columnas
          gap={4}
          mt='4'
          ml='20'
          p='4'>
          <Heading
            as='h2'
            size='xl'>
            Ofertas
          </Heading>
          {/* Mapeo de trabajos */}
          {jobs.map(job => (
            <Flex
              key={job.id}
              borderRadius='5'
              sx={{ border: '1px solid #00259A' }}
              boxShadow='2xl'
              cursor='pointer'
              mb='1rem'
              width='700px'>
              {/* Imagen a la izquierda */}
              <Box flex='0 0 auto'>
                <Image
                  src={job.image}
                  alt={job.title}
                  width='100%'
                  height='100%'
                  objectFit='cover'
                />
              </Box>
              {/* Contenido a la derecha */}
              <Box
                p='4'
                flex='1'>
                <Heading
                  as='h3'
                  size='md'
                  mb='2'>
                  {job.title}
                </Heading>
                <Text fontSize='sm'>{job.description}</Text>
                <Text fontSize='sm'>{job.pago}</Text>
                {/* Iconos de redes sociales */}
                <Flex
                  mt='4'
                  justifyContent='right'>
                  <FaFacebook size={24} />
                  &nbsp;
                  <FaYoutube size={24} />
                  &nbsp;
                  <FaInstagram size={24} />
                  {/* Agrega más íconos aquí según sea necesario */}
                </Flex>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Flex>

      <Footer />
    </>
  )
}

export default BolsaTrabajo
