  import { Image, Input, Flex, Heading, Text, Box, Grid } from '@chakra-ui/react'
  import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
  import { Footer } from '../components/Footer'
  import { Header } from '../components/Header'
  import { Search } from '../assets/Icons.jsx'
  import { useState } from 'react';
  import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from '@chakra-ui/react';

  function BolsaTrabajo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([])
    const [isEditing, setisEditing] = useState(true);


    const jobs = [
      {
        id: 1,
        title: 'Desarrollador de Software',
        description: 'Puesto de Desarrollador FullStack medio tiempo - Home Office',
        image: '/src/assets/chambaaa.jpg',
        pago: '10,000-12,000/Mes',
        ubicacion: 'Educación Tecnológica 34, Fracc. Universidad, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto.',
        contacto: 'contacto@empresa.com',
        horario: 'Medio tiempo de 8 am - 1 pm. Lunes a Viernes',
      },
      {
        id: 2,
        title: 'Enfermera',
        description: 'Puesto de enfermera general en el IMSS medio tiempo',
        image: '/src/assets/chambaaa.jpg',
        pago: '8,000-10,000/Mes',
        ubicacion: 'Guanajuato 40, Centro, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto.',
        contacto: 'info@hospital.com',
        horario: 'Medio tiempo de 6am - 10am. Lunes a Domingo',
      },
      {
        id: 3,
        title: 'Piscador',
        description: 'Puesto de piscador de fresas medio tiempo',
        image: '/src/assets/chambaaa.jpg',
        pago: '8,000-9,000/Mes',
        ubicacion: 'La Morera, 37806 Carretera a Guanajuato km Uno, Gto.',
        contacto: 'rrhh@agricola.com',
        horario: 'Medio tiempo de 6am - 11am. Lunes a Viernes',
      },
      {
        id: 4,
        title: 'Mesero',
        description: 'Puesto de mesero medio tiempo',
        image: '/src/assets/chambaaa.jpg',
        pago: '6,000-12,000/Mes',
        ubicacion: 'Dolores Hidalgo, San francisco 3, Colonia San José, 37800 Dolores, Gto.',
        contacto: 'empleo@restaurante.com',
        horario: 'Medio tiempo de 6pm a 11pm. Lunes a Viernes',
      }
      // Más ofertas de trabajo...
    ];
    
    const handleInputChange = event => {
      const searchterm = event.target.value;
      
      setSearchTerm(searchterm);

      if (searchterm === '') {
        // Si no hay término de búsqueda, mostrar todas las ofertas
        setFilteredJobs(jobs);
        setisEditing(true)
      } else {
        // Filtrar las ofertas según el término de búsqueda
        const filteredJobs = jobs.filter(job =>
          job.title.toLowerCase().includes(searchterm.toLowerCase())
        );
        setisEditing(false)
        setFilteredJobs(filteredJobs);
      }
    };
    const   handleJobClick = job => {
      console.log(`Clic en oferta de trabajo: ${job.title}`)
      // Aquí puedes implementar la lógica para mostrar más detalles o abrir un modal
      setSelectedJob(job);
      setIsModalOpen(true);
    }

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedJob(null);
    };

    return (
      <>
        <Header />
        <Flex direction={{ base: 'column', md: 'row' }}  justifyContent='center' p='6' style={{ backgroundColor: '#ffffff' }}>
          {/* Parte izquierda con campo de búsqueda */}
          <Box flex={{ base: '1', md: '0 0 300px' }} minWidth='0' mt={{ base: '4', md: '0' }} style={{ backgroundColor: '#ffffff' }}>
            <Box mt='4' p='2' border='1px' borderColor='gray.200' display='flex' alignItems='center'>
              
              <Input placeholder='Buscar trabajo...' value={searchTerm} onChange={handleInputChange}/>
              <Search />

            </Box>
            <Box mt='4' p='2' border='1px' borderColor='gray.200'>
              Lista de resultados
            </Box>
            {/* Mostrar trabajos en la lista de resultados */}
            {jobs.map(job => (
              <Box key={job.id} p='4' borderBottom='1px' borderColor='gray.200' onClick={() => handleJobClick(job)} cursor='pointer'>
                <Heading as='h3' size='md' mb='2'>
                  {job.title}
                </Heading>
                <Text fontSize='sm'>{job.description}</Text>
              </Box>
            ))}
          </Box>
      
          {/* Parte derecha con las tarjetas */}
          <Grid gridTemplateColumns='1fr' gap={4} mt={{ base: '4', md: '0' }}  ml={{ base: '0', md: '20' }} p='4'>
            <Heading as='h2' size='xl'>
              Ofertas
            </Heading>
            {isEditing ? <></>: <h3>Resultados Encontrados</h3> }

            {/* Mapeo de trabajos */}
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
              <Flex key={job.id} borderRadius='5' sx={{ border: '1px solid #00259A' }} boxShadow='2xl' onClick={() => handleJobClick(job)} cursor='pointer' mb='1rem' width="50rem">
                {/* Imagen a la izquierda */}
                <Box flex='0 0 auto'>
                  <Image src={job.image} alt={job.title} width='90%' height='90%' objectFit='cover'
                  />
                </Box>
                {/* Contenido a la derecha */}
                <Box p='4' flex='1'>
                  <Heading as='h3' size='md' mb='2'>
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
            ))
            ) : (jobs.map(job => (
              <Flex key={job.id} borderRadius='5' sx={{ border: '1px solid #00259A' }} boxShadow='2xl' onClick={() => handleJobClick(job)} cursor='pointer' mb='1rem' width="50rem">
                {/* Imagen a la izquierda */}
                <Box flex='0 0 auto'>
                  <Image src={job.image} alt={job.title} width='100%' height='100%' objectFit='cover'
                  />
                </Box>
                {/* Contenido a la derecha */}
                <Box p='4' flex='1'>
                  <Heading as='h3' size='md' mb='2'>
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
              ))
            )}
          </Grid> 
        </Flex>

          {/* Modal para mostrar detalles del trabajo */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedJob?.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Descripción de la Vacante: {selectedJob?.description}</Text>
                <Text>Págo: {selectedJob?.pago}</Text>
                <Text>Ubicacion: {selectedJob?.ubicacion}</Text>
                <Text>Contacto: {selectedJob?.contacto}</Text>
                <Text>Horario: {selectedJob?.horario}</Text>
                <Flex
                    mt='4'
                    justifyContent='center'>
                    <a href='https://www.facebook.com/profile.php?id=100064830062888' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook size={30} />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='https://www.youtube.com/channel/UC5aD8RBROQYeDSIX54hjwBw' target='_blank' rel='noopener noreferrer'>
                    <FaYoutube size={30} />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='https://www.instagram.com/utngdoloreshidalgo_/' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={30} />
                    </a>
                    {/* Agrega más íconos aquí según sea necesario */}
                  </Flex>
                {/* Otros detalles del trabajo */}
              </ModalBody>
              <ModalFooter>
                {/* Botones u opciones adicionales en el footer del modal */}
              </ModalFooter>
            </ModalContent>
          </Modal>
        <Footer />
      </>
    )
  }

  export default BolsaTrabajo
