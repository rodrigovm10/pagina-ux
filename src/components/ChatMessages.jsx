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
            alignSelf={isUserMessage ? 'flex-end' : 'flex-start'}
            key={i}
            maxW='75%'
            bg={isUserMessage ? '#00259A' : 'rgb(236, 236, 236)'}
            whiteSpace='pre-wrap'
            wordBreak='break-word'
            overflowWrap='break-word'
            borderRadius={isUserMessage ? '8px 0 8px 8px' : '0 8px 8px'}
            p='0.5rem'>
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
