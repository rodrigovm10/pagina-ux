import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CardCentroAyuda } from '../components/CardCentroAyuda'
import { CardCentroAyuda2 } from '../components/CardCentroAyuda2'
import { Chat } from '../components/Chat'
import { useOpenChat } from '../hooks/useOpenChat'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'

export function CentroAyuda() {
  const { isOpen, handleClickOpen } = useOpenChat()
  return (
    <>
      <Header />
      <Flex
        w='90%'
        m='0 auto'
        alignItems='center'
        justifyContent='center'
        flexDir='column'
        gap='2rem'
        my='2rem'>
        <CardCentroAyuda handleClickOpen={handleClickOpen} />
        <Heading
          as='h1'
          size='lg'>
          Tu educación no se detiene
        </Heading>
        <Text
          textAlign={{ base: 'justify', lg: 'center' }}
          w={{ base: '80%', lg: '60%' }}
          borderBottom='2px solid #00259A'
          pb='1.3rem'>
          Deseamos darte más posibilidades para que continúes superándote, conoce las ventajas de nuestro proceso de
          admisión desde casa y la manera en la que puedes seguir estudiando.
        </Text>
        <CardCentroAyuda2 handleClickOpen={handleClickOpen} />
        <Box
          position={'fixed'}
          bottom={0}
          right={{ base: 45, md: 0, lg: 0 }}
          zIndex={1}
          alignSelf={{ base: 'center', lg: 'flex-end' }}>
          <Chat
            isOpen={isOpen}
            handleClickOpen={handleClickOpen}
          />
        </Box>
      </Flex>
      <Footer />
    </>
  )
}
