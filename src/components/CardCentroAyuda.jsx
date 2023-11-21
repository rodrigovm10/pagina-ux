import { Button, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import chicaCentroAyuda from '../assets/chicaCentroAyuda.png'

export function CardCentroAyuda({ handleClickOpen }) {
  return (
    <Flex
      position='relative'
      alignItems='center'
      gap='2rem'>
      <Stack
        bg='rgba(255, 255, 255, 0.75)'
        h='100%'
        position='absolute'
        zIndex='1'
        p='2rem'
        justifyContent='center'
        alignItems='center'>
        <Heading
          as='h2'
          fontSize='1.4rem'>
          Centro de ayuda
        </Heading>
        <Button
          onClick={handleClickOpen}
          w='10rem'
          p='1.5rem'
          textAlign='center'
          wordBreak='break-all'
          bg='#00259A'
          _hover={{ bg: '#001F7E' }}
          color='#fff'>
          Iniciar <br />
          Conversación
        </Button>
      </Stack>
      <Image
        border='1px solid #000'
        backdropFilter='blur(2px)'
        src={chicaCentroAyuda}
        alt='chicaCentroAyuda'
        w='50rem'
        h='20rem'
        objectFit='cover'
        position='relative'
        zIndex='0'
      />
    </Flex>
  )
}
