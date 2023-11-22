import { Box, Image, Text } from '@chakra-ui/react'
import { ChatOpen } from './ChatOpen'

export function Chat({ isOpen, handleClickOpen }) {
  return !isOpen ? (
    <Box
      onClick={handleClickOpen}
      as='button'
      bg='#00259A'
      borderRadius='0.3rem'
      p='0.3rem 5rem'
      cursor='pointer'>
      <Image />
      <Text color='#fff'>Chat</Text>
    </Box>
  ) : (
    <ChatOpen onClick={handleClickOpen} />
  )
}
