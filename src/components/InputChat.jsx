import { Flex, Input } from '@chakra-ui/react'
import { Send, Trash } from '../assets/Icons'

export function InputChat({ message, handleSend, handleChange, sendMessage }) {
  return (
    <Flex
      alignSelf='flexEnd'
      alignContent='flex-end'
      mt='auto'
      mb={'0.2rem'}>
      <form
        style={{ display: 'flex', gap: '0.5rem' }}
        onSubmit={e => handleSend(message, e)}>
        <Input
          value={message}
          onChange={handleChange}
          ml='1rem'
          alignSelf='center'
          bg='#fff'
          maxW='90%'
          w='15rem'
          p='0'
          h='1.5rem'
        />
        {/* <Flex
          onClick={() => sendMessage(message)}
          alignSelf='center'
          // w='1.8rem'
          cursor='pointer'>
          <Trash />
        </Flex> */}
        <Flex
          onClick={() => sendMessage(message)}
          alignSelf='center'
          // w='1.8rem'
          cursor='pointer'>
          <Send />
        </Flex>
      </form>
    </Flex>
  )
}
