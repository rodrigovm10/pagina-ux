import { Flex, Text } from '@chakra-ui/react'

export function ChatMessages({ messages }) {
  return (
    <Flex
      flexDir='column'
      mt='1rem'
      gap='1rem'
      overflowY={'auto'}>
      {messages.map((message, i) => {
        const isUserMessage = i % 2 !== 0
        return (
          <Text
            key={i}
            textAlign={isUserMessage ? 'right' : 'left'}
            color={isUserMessage ? '#000' : '#fff'}
            p='0.5rem'
            bg={isUserMessage ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}>
            {message}
          </Text>
        )
      })}
    </Flex>
  )
}
