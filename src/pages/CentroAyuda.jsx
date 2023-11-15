import { Box, Button, Flex, HStack, Heading, Image, Stack } from '@chakra-ui/react'
import { CardCentroAyuda } from '../components/CardCentroAyuda'

export function CentroAyuda() {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDir='column'
      gap='2rem'
      my='2rem'>
      <CardCentroAyuda />
      <Heading
        as='h1'
        fontSize='2rem'>
        Centro de Ayuda
      </Heading>
    </Flex>
  )
}
