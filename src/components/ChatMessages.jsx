import { Box, Flex, Text } from '@chakra-ui/react'

export function ChatMessages({ messages }) {
  return (
    <Flex
      flexDir='column'
      mt='1rem'
      gap='0.4rem'
      overflow={'hidden auto'}
      scrollBehavior='smooth'
      p='0 1rem'
      overscrollBehavior='contain'>
      {messages.map((message, i) => {
        const isUserMessage = i % 2 !== 0
        return (
          <Box
            key={i}
            maxW='75%'
            bg={isUserMessage ? '#00259A' : 'rgb(236, 236, 236)'}
            whiteSpace='pre-wrap'
            wordBreak='break-word'
            overflowWrap='break-word'
            borderRadius='0 0.8rem 0.8rem'
            p='1rem'>
            <Text
              textAlign={isUserMessage ? 'right' : 'left'}
              color={isUserMessage ? '#fff' : '#rgba(0, 0,0, 0.5)'}>
              {message}
            </Text>
          </Box>
        )
      })}
    </Flex>
  )
}
