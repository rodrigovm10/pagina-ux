import { Flex, IconButton, useColorModeValue, useToken } from '@chakra-ui/react'
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'
import { useTextToSpeech } from '../hooks/useTextToSpeech'

export function TextToSpeech({ text }) {
  const { onClickPause, onClickPlay, onClickStop } = useTextToSpeech({ text })
  const bgColor = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')
  const [purple500, orange500] = useToken('colors', ['purple.500', 'orange.500']) // Utilizar tokens para los colores

  return (
    <Flex
      align="center" // Asegura que los íconos estén alineados en el centro
      justify="center" // Centra los íconos en el eje principal
      gap="4" // Espacio entre botones
      p="4" // Padding alrededor de los botones
      bg={bgColor}
      borderRadius="full" // Bordes redondos para el contenedor Flex
      boxShadow="lg" // Sombra más pronunciada
    >
      <IconButton
        icon={<FaPlay />}
        onClick={onClickPlay}
        aria-label="Play"
        backgroundColor={bgColor}
        color={purple500}
        _hover={{ bg: 'purple.100', color: 'purple.700' }}
        _active={{ bg: 'purple.200' }}
        _focus={{ boxShadow: 'outline' }}
        isRound
      />
      <IconButton
        icon={<FaPause />}
        onClick={onClickPause}
        aria-label="Pause"
        backgroundColor={bgColor}
        color={color}
        _hover={{ bg: 'purple.100', color: 'purple.700' }}
        _active={{ bg: 'purple.200' }}
        _focus={{ boxShadow: 'outline' }}
        isRound
      />
      <IconButton
        icon={<FaStop />}
        onClick={onClickStop}
        aria-label="Stop"
        backgroundColor={bgColor}
        color={orange500}
        _hover={{ bg: 'orange.100', color: 'orange.700' }}
        _active={{ bg: 'orange.200' }}
        _focus={{ boxShadow: 'outline' }}
        isRound
      />
    </Flex>
  )
}
