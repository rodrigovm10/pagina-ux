import { Box, Flex, Input, Text } from '@chakra-ui/react'
import enviar from '../assets/enviar.png'
import { useEffect, useState } from 'react'
import { Send } from '../assets/Icons'

export function ChatOpen({ onClick }) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(['¿En qué puedo ayudarte?'])
  // const [messagesBot, setMessageBot] = useState([])

  useEffect(() => {
    if (messages[messages.length - 1] === '¿Que puedo encontrar en el calendario?')
      setMessages(prevMessages => [...prevMessages, 'hola'])
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
      w='12rem'
      h='20rem'
      mr='2rem'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      position='relative' //
    >
      <Flex
        justifyContent='center'
        alignItems='center'
        pt='1rem'
        onClick={onClick}
        cursor='pointer'>
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
        mt='1rem'
        overflowY={'auto'}>
        {messages.map((message, i) => {
          if (message.length % 2 !== 0) {
            return (
              <Text
                textAlign='left'
                key={i}
                color='#fff'
                p='0.5rem'
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
                p='0.5rem'
                bg='rgba(255, 255,255, 0.6)'>
                {message}
              </Text>
            )
          }
        })}
      </Flex>
      <Flex
        alignSelf='flexEnd'
        alignContent='flex-end'
        mt='auto'
        mb={'0.2rem'}>
        <form
          style={{ display: 'flex', gap: '1rem' }}
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
          <Box
            onClick={() => sendMessage(message)}
            alignSelf='center'
            src={enviar}
            w='1.8rem'
            objectFit='contain'
            cursor='pointer'>
            <Send />
          </Box>
        </form>
      </Flex>
    </Box>
  )
}
