import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import chat from '../assets/chat.png'
import enviar from '../assets/enviar.png'
import { useEffect, useState } from 'react'

export function ChatOpen({ onClick }) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(['¿En qué puedo ayudarte?'])
  // const [messagesBot, setMessageBot] = useState([])

  useEffect(() => {
    messages.reverse()[0] === '¿Que puedo encontrar en el calendario?'
      ? setMessages(prevMessages => [...prevMessages, 'hola'])
      : ''
  }, [messages])

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleSend = (message, e) => {
    e.preventDefault()
    sendMessage(message)
  }
  const sendMessage = message => {
    setMessages(prevMessages => [...prevMessages, message])
    setMessage('')
  }
  return (
    <Box
      bg='#00259A'
      borderRadius={10}
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
      <Flex
        flexDir='column'
        overflowY={'auto'}>
        {messages.map((message, i) => {
          if (message.length % 2 === 0) {
            return (
              <Text
                textAlign='left'
                key={i}
                color='#fff'
                bg='rgba(0, 0, 0, 0.6)'>
                {message}
              </Text>
            )
          } else {
            return (
              <Text
                textAlign='right'
                key={i}
                color='#fff'
                bg='rgba(255, 255,255, 0.6)'>
                {message}
              </Text>
            )
          }
        })}
      </Flex>
      <Flex
        alignSelf='flexEnd'
        gap='2rem'>
        <form
          style={{ display: 'flex', gap: '2rem' }}
          onSubmit={e => handleSend(message, e)}>
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
            onClick={() => sendMessage(message)}
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
