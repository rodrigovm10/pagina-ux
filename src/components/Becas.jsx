import { Card, CardBody, Box, SimpleGrid, Image, CardHeader, Heading, Text, CardFooter, Button, Flex, Link, Icon } from '@chakra-ui/react'
import { MdPhone } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import { Footer } from '../components/Footer.jsx';
import { Header } from '../components/Header.jsx';
import { useState } from 'react';
import logo from '../assets/logoutng.webp';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  { title: 'JÓVENES EMBARAZADAS Y MADRES' },
  { title: 'CONCURSO DE ORATORIA' },
  { title: 'FESTIVAL DE LA MUERTE "GALERÍA DE MURALES DÍA DE MUERTOS" 2023' },
  { title: 'CONVOCATORIA CONCURSO DE CANCIÓN "A TODOS TUS MUERTOS"' },
  { title: 'MULTIPLICADORES DE LA PAZ "5TA. GENERACIÓN"' },
  { title: 'FINANCIAMIENTO EDUCATIVO GTO (MEDIA SUPERIOR Y SUPERIOR)' }
]

function Becas() {
  const navigate = useNavigate();
  const [controlNumber, setControlNumber] = useState('');
  const [show, setShow] = useState(false);
  const [showCul, setShowCul] = useState(false);
  const [showAca, setShowAca] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCul = () => setShowCul(false);
  const handleShowCul = () => setShowCul(true);

  const handleCloseAca = () => setShowAca(false);
  const handleShowAca = () => setShowAca(true);

  const handleInputChange = (e) => {
    const { value } = e.target;
    // Asegúrate de que solo se acepten números y que la longitud no exceda de 10 caracteres
    if (value === '' || (value.match(/^[0-9]+$/) && value.length <= 10)) {
      setControlNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (controlNumber.length === 10) {
      // Si la validación es exitosa, muestra el SweetAlert
      Swal.fire({
        title: '¡Éxito!',
        text: 'Tu información se guardó correctamente, te llegará un correo con los siguientes pasos',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/');
        }
      });
    } else {
      // Si la validación falla, muestra un mensaje de error
      Swal.fire({
        title: 'Error',
        text: 'El número de control debe tener exactamente 10 dígitos',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };
  

  return (
    <>
      <Header />
      <Box p='3rem'>
        <SimpleGrid
          spacing={6}
          templateColumns='repeat(auto-fill, minmax(500px, 1fr))'
          p='1rem'>
          <>
          <Image
            w='full'
            objectFit='cover'
            borderRadius='1rem'
            src='https://media.istockphoto.com/id/1292319470/es/vector/concepto-de-celebraci%C3%B3n-de-graduados-con-mujer-feliz-estudiante.jpg?s=2048x2048&w=is&k=20&c=R_2Rz9KrpGWC-5vi4rMavBV449pIP-3EHcN-9IbPEmQ='
            alt='Calendario UTNG'
            className='zoom'
          />
          </>
          <Card>
            <CardHeader>
              <Heading size='2xl' align='center' justify='center'>
                Becas
              </Heading>
            </CardHeader>
            <CardHeader>
              <Text textAlign="justify">
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
        <Heading
          size='md'
          align='center'
          justify='center'>
          Te puede interesar ...
        </Heading>
        <SimpleGrid
          spacing={4}
          templateColumns='repeat(auto-fill, minmax(350px, 1fr))'
          p='1rem'>
          <Card>
            <CardHeader>
              <Heading size='md'> APOYO ALIMENTICIO </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="justify">
                Consiste en la ministración de una comida al día en la Universidad a los alumnos de la modalidad
                escolarizada, los solicitantes deberán entregar el formato de canalización del tutor académico para
                tener derecho a la solicitud del apoyo.
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={handleShow} bg='#159b80'>Aplicar</Button>
            </CardFooter>
          </Card>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Información de Becas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Requisitos:</strong>
              </p>
              <ul>
                <li>Ser alumno regular del cuatrimestre</li>
                <li>No contar con otro tipo de estímulo o apoyo económico</li>
                <li>
                  Obtener un promedio mínimo de ocho en el cuatrimestre anterior sin adeudo de materias al momento de
                  realizar la solicitud
                </li>
                <li>Realizar una entrevista con el Subdirector de Servicios Escolares.</li>
                <li>
                  Solicitud debidamente llenada y firmada por el director del área académica correspondiente, con los
                  siguientes documentos:
                </li>
                <ul>
                  <li>Comprobante de ingresos económicos familiares;</li>
                  <li>
                    Carta redactada por el alumno donde exponga las principales razones por las que solicita el apoyo
                    por necesidad apremiante firmada por el solicitante y por el padre o jefe de familia.
                  </li>
                </ul>
              </ul>
              <p>
                <strong>Nota:</strong>
              </p>
              <p>
                Una vez concluido el periodo de la convocatoria el área de Servicios Escolares solicitara al director de
                área académica correspondiente, la realización de la visita de campo por parte del tutor académico
                entregando un reporte que valide o no la necesidad del apoyo.
              </p>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='inputField'>Ingresa aquí tu número de control para aplicar a la beca</label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputField'
                    placeholder='Ingresa tu número de control'
                    value={controlNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <Button
                  variant='primary'
                  type='submit'
                  bg='#159b80'>
                  Aplicar
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Card>
            <CardHeader>
              <Heading size='md'> APOYO DEPORTIVO Y CULTURAL </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="justify">
                Consiste en la exención del 100% en el pago de la inscripción cuatrimestral para los alumnos del primero
                al quinto cuatrimestre y del 50% para los alumnos del séptimo al onceavo cuatrimestre, que sean
                seleccionados para representar a la Universidad en eventos deportivos o culturales oficiales.
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={handleShowCul} bg='#159b80'> Aplicar </Button>
            </CardFooter>
          </Card>
          <Modal
            show={showCul}
            onHide={handleCloseCul}>
            <Modal.Header closeButton>
              <Modal.Title>Información de Becas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Requisitos:</strong>
              </p>
              <ul>
                <li>Ser alumno regular del cuatrimestre</li>
                <li>No contar con otro tipo de estímulo o apoyo económico</li>
                <li>
                  Obtener un promedio mínimo de ocho en el cuatrimestre anterior sin adeudo de materias al momento de
                  realizar la solicitud
                </li>
                <li>Realizar una entrevista con el Subdirector de Servicios Escolares.</li>
                <li>
                  Solicitud debidamente llenada y firmada por el director del área académica correspondiente, con los
                  siguientes documentos:
                </li>
                <ul>
                  <li>Comprobante de ingresos económicos familiares;</li>
                  <li>
                    Carta redactada por el alumno donde exponga las principales razones por las que solicita el apoyo
                    por necesidad apremiante firmada por el solicitante y por el padre o jefe de familia.
                  </li>
                </ul>
              </ul>
              <p>
                <strong>Nota:</strong>
              </p>
              <p>
                Una vez concluido el periodo de la convocatoria el área de Servicios Escolares solicitara al director de
                área académica correspondiente, la realización de la visita de campo por parte del tutor académico
                entregando un reporte que valide o no la necesidad del apoyo.
              </p>

              <form>
                <div className='form-group'>
                  <label htmlFor='inputField'>Ingresa aqui tu numero de control para aplicar a la beca</label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputField'
                    placeholder='Ingresa tu numero de control'
                  />
                </div>
                <Button
                  variant='primary' type='submit' bg='#159b80'>
                  Aplicar
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleCloseCul}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Card>
            <CardHeader>
              <Heading size='md'> APOYO POR NECESIDAD APREMIANTE </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="justify">
                Consiste en la ministración mensual no reembolsable de una cantidad de dinero, a los alumnos con
                promedio mínimo de ocho y necesidad económica extrema que ponga en riesgo la continuidad de sus estudios
                en la Universidad.
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={handleShowAca} bg='#159b80'>Aplicar</Button>
            </CardFooter>
          </Card>
          <Modal
            show={showAca}
            onHide={handleCloseAca}>
            <Modal.Header closeButton>
              <Modal.Title>Información de Becas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Requisitos:</strong>
              </p>
              <ul>
                <li>Ser alumno regular del cuatrimestre</li>
                <li>No contar con otro tipo de estímulo o apoyo económico</li>
                <li>
                  Obtener un promedio mínimo de ocho en el cuatrimestre anterior sin adeudo de materias al momento de
                  realizar la solicitud
                </li>
                <li>Realizar una entrevista con el Subdirector de Servicios Escolares.</li>
                <li>
                  Solicitud debidamente llenada y firmada por el director del área académica correspondiente, con los
                  siguientes documentos:
                </li>
                <ul>
                  <li>Comprobante de ingresos económicos familiares;</li>
                  <li>
                    Carta redactada por el alumno donde exponga las principales razones por las que solicita el apoyo
                    por necesidad apremiante firmada por el solicitante y por el padre o jefe de familia.
                  </li>
                </ul>
              </ul>
              <p>
                <strong>Nota:</strong>
              </p>
              <p>
                Una vez concluido el periodo de la convocatoria el área de Servicios Escolares solicitara al director de
                área académica correspondiente, la realización de la visita de campo por parte del tutor académico
                entregando un reporte que valide o no la necesidad del apoyo.
              </p>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='inputField'>Ingresa aquí tu número de control para aplicar a la beca</label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputField'
                    placeholder='Ingresa tu número de control'
                    value={controlNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <br/>
                <Button
                  variant='primary'
                  type='submit'
                  bg='#159b80'>
                  Aplicar
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleCloseAca}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </SimpleGrid>
        {/* Card de becas externas */}
        <Box
          bg='gray.200'
          p={5}>
          <Text
            fontSize='xl'
            mb={5}>
            Convocatorias y becas gubernamentales
          </Text>
          <SimpleGrid
            columns={[1, null, 3]}
            spacing={5}>
            {cardsData.map((card, index) => (
              <Box
                key={index}
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                p={5}
                bg='white'>
                <Text textAlign='center'>{card.title}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <br />
        {/* Card de contacto */}
        <Box
          maxW='100%'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          bg='#159b80'
          p={10}>
          <Flex
            align='center'
            justify='space-between'>
            <Flex align='center'>
              <Image
                src={logo}
                alt='Logo'
              />
              <Box ml='3'>
                <Text fontWeight='bold'>Diana Berenice Cuellar González</Text>
                <Link
                  href='mailto:diana.cuellar@utng.edu.mx'
                  isExternal>
                  diana.cuellar@utng.edu.mx
                </Link>
                <Text fontSize='sm'>Atención de lunes a viernes de 8:00 a 16:00 hrs</Text>
              </Box>
            </Flex>
            <Box textAlign='right'>
              <Text>Tel:18 2 55 00 ext. 1254</Text>
              <Icon
                as={MdPhone}
                boxSize='6'
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Becas;