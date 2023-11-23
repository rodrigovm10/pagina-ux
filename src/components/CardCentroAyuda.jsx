import { Button, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import chicaCentroAyuda from '../assets/chicaCentroAyuda.png'

export function CardCentroAyuda({ handleClickOpen }) {
  return (
    <Flex
      position='relative'
      alignItems='flex-end'
      gap='2rem'>
      <Stack
        bg={{
          base: 'rgba(255, 255, 255, 0)',
          sm: 'rgba(255, 255, 255, 0.75)',
          md: 'rgba(255, 255, 255, 0.75)',
          lg: 'rgba(255, 255, 255, 0.75)'
        }}
        h={{ base: '100%', md: '100%', lg: '100%' }}
        position='absolute'
        top='0'
        left='0'
        zIndex='1'
        p='2rem'
        justifyContent='center'
        alignItems='center'>
        <Heading
          opacity={{ base: 0, sm: 1, md: 1, lg: 1, xl: 1 }}
          as='h2'
          size='lg'>
          Centro de ayuda
        </Heading>
        <Button
          opacity={{ base: 0, sm: 1, md: 1, lg: 1, xl: 1 }}
          onClick={handleClickOpen}
          w='10rem'
          p='1.5rem'
          textAlign='center'
          bg='#00259A'
          _hover={{
            color: 'rgba(255, 255, 255,1)',
            backgroundColor: '#00259A',
            boxShadow: '0 4px 16px #001F7E',
            transition: 'all 0.2s ease'
          }}
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
