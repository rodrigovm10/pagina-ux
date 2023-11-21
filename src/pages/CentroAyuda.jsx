import { Box, Flex, Heading } from '@chakra-ui/react'
import { CardCentroAyuda } from '../components/CardCentroAyuda'
import { CardCentroAyuda2 } from '../components/CardCentroAyuda2'
import { NavFlotante } from '../components/NavFlotante'
import { Chat } from '../components/Chat'
import { useOpenChat } from '../hooks/useOpenChat'

export function CentroAyuda() {
  const { isOpen, handleClickOpen } = useOpenChat()
  return (
    <>
      <Flex
        alignItems='center'
        justifyContent='center'
        flexDir='column'
        gap='2rem'
        my='2rem'>
        <CardCentroAyuda handleClickOpen={handleClickOpen} />
        <Heading
          as='h1'
          fontSize='2rem'>
          Centro de Ayuda
        </Heading>
        <CardCentroAyuda2 handleClickOpen={handleClickOpen} />
        <Box alignSelf='flex-end'>
          <Chat
            isOpen={isOpen}
            handleClickOpen={handleClickOpen}
          />
        </Box>
      </Flex>
      <NavFlotante />
    </>
  )
}
