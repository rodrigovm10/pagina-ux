import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import chat from '../assets/chat.png'
import enviar from '../assets/enviar.png'
import { useState } from 'react'

export function ChatOpen({ onClick }) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleSend = (message, e) => {
    e.preventDefault()
    setMessages(prevMessages => [...prevMessages, message])
    setMessage('')
  }
  return (
    <Box
      bg='#00259A'
      w='20rem'
      h='20rem'
      mr='2rem'
      display='flex' // Añadir display flex
      flexDirection='column' // Establecer la dirección como columna
    >
      <Flex
        justifyContent='center'
        alignItems='center'
        pt='1rem'
        onClick={onClick}
        cursor='pointer'>
        <Image
          src={chat}
          objectFit='contain'
        />
        <Text
          fontWeight='500'
          fontSize='1.3rem'
          color='#fff'
          alignSelf='center'>
          Soporte
        </Text>
      </Flex>
      <Box display='inline'>
        {messages.map((message, i) => (
          <Text
            key={i}
            color='#fff'
            bg='rgba(255, 255,255, 0.6)'>
            {message}
          </Text>
        ))}
      </Box>
      <Flex
        alignSelf='flexEnd'
        gap='1rem'
        flex='1'>
        <form onSubmit={e => handleSend(message, e)}>
          <Input
            value={message}
            onChange={handleChange}
            ml='1rem'
            alignSelf='center'
            bg='#fff'
            maxW='80%'
            h='1.5rem'
          />
          <Image
            onSubmit={() => handleSend(message)}
            alignSelf='center'
            src={enviar}
            w='1.8rem'
            objectFit='contain'
            cursor='pointer'
          />
        </form>
      </Flex>
    </Box>
  )
}
