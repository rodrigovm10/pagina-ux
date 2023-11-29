import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import chicoCentroAyuda from '../assets/chicoCentroAyuda.png'

export function CardCentroAyuda2({ handleClickOpen }) {
  return (
    <>
      <Flex
        alignItems='center'
        flexDir={{ base: 'column', md: 'row', lg: 'row' }}>
        <Stack
          border='1px solid #00259A'
          bg='rgba(255, 255, 255, 0.75)'
          w={{ base: '20rem', md: '20rem', lg: '20rem' }}
          p='2rem'
          justifyContent='center'
          alignItems='center'>
          <Heading
            as='h2'
            size='md'>
            Chatea con nosotros
          </Heading>
          <Text textAlign='justify'>
            Resuelve tus dudas. Nuestro equipo de asesores te brindará la información que requieras
          </Text>
        </Stack>
        <Image
          border='1px solid #000'
          backdropFilter='blur(2px)'
          src={chicoCentroAyuda}
          alt='chicoCentroAyuda'
          w='20rem'
          h='12.1rem'
          objectFit='cover'
        />
      </Flex>
      <Button
        onClick={handleClickOpen}
        w='12rem'
        p='1rem'
        textAlign='center'
        bg='#001F7E'
        border='2px solid #000'
        borderRadius='4'
        boxShadow='inset 0 0 0 50px #001f7e'
        transition='ease-out 0.4s'
        _hover={{
          color: '#000',
          boxShadow: ' inset 400px 50px 0 0 #fff'
        }}
        color='#fff'>
        Iniciar Conversación
      </Button>
    </>
  )
}
