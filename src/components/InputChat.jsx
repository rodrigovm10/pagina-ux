import { Box, Flex, Input } from '@chakra-ui/react'
import { Send } from '../assets/Icons'

export function InputChat({ message, handleSend, handleChange, sendMessage }) {
  return (
    <Flex
      alignSelf='flexEnd'
      alignContent='flex-end'
      mt='auto'
      mb={'0.2rem'}>
      <form
        style={{ display: 'flex', gap: '3rem' }}
        onSubmit={e => handleSend(message, e)}>
        <Input
          value={message}
          onChange={handleChange}
          ml='1rem'
          alignSelf='center'
          bg='#fff'
          maxW='90%'
          p='0'
          // w='13rem'
          h='1.5rem'
        />
        <Box
          onClick={() => sendMessage(message)}
          alignSelf='center'
          w='1.8rem'
          cursor='pointer'>
          <Send />
        </Box>
      </form>
    </Flex>
  )
}
