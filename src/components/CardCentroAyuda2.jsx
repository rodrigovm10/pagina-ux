import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import chicoCentroAyuda from '../assets/chicoCentroAyuda.png'

export function CardCentroAyuda2({ handleClickOpen }) {
  return (
    <>
      <Flex alignItems='center'>
        <Stack
          bg='rgba(255, 255, 255, 0.75)'
          w='20rem'
          p='2rem'
          justifyContent='center'
          alignItems='center'>
          <Heading
            as='h2'
            fontSize='1.4rem'>
            Chatea con nosotros
          </Heading>
          <Text>Resuelve tus dudas. Nuestro equipo de asesores te brindará la información que requieras</Text>
        </Stack>
        <Image
          border='1px solid #000'
          backdropFilter='blur(2px)'
          src={chicoCentroAyuda}
          alt='chicoCentroAyuda'
          w='30rem'
          h='11rem'
          objectFit='cover'
        />
      </Flex>
      <Button
        onClick={handleClickOpen}
        w='12rem'
        p='1rem'
        textAlign='center'
        wordBreak='break-all'
        bg='#00259A'
        _hover={{ bg: '#001F7E' }}
        color='#fff'>
        Iniciar Conversación
      </Button>
    </>
  )
}
