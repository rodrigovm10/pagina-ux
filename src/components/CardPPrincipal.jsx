import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'

export function CardPPrincipal({ title, text, w }) {
  return (
    <Card
      mb='3rem'
      w={w}
      sx={{ border: '1px solid #00259A' }}
      boxShadow='2xl'>
      <CardHeader>
        <Heading
          as='h3'
          size='md'
          fontWeight={500}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{text}</Text>
      </CardBody>
    </Card>
  )
}