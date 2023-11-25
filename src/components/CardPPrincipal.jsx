import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'

export function CardPPrincipal({ title, text, wBase, wLg, wMd }) {
  return (
    <Card
      mb='3rem'
      transition='transform 0.3s ease-out, box-shadow 0.3s ease-in-out'
      w={{ base: wBase, md: wMd, lg: wLg }}
      sx={{ border: '2px solid #00259A' }}
      _hover={{ transform: 'translateY(-10px)', boxShadow: '5px 5px #00259A' }}
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
