import { Heading, Text, Card, CardHeader, CardBody } from '@chakra-ui/react'
import { TEXTS_CARD } from '../utilities/constants'
import { useState } from 'react'

export function CardInfoCentroAyuda() {
  const [selectedText, setSelectedText] = useState(null)

  const handleShowInformation = text => {
    setSelectedText(selectedText === text ? null : text)
  }

  return (
    <>
      {TEXTS_CARD.map(text => (
        <Card
          w='20rem'
          key={text.id}>
          <CardHeader
            px='0'
            pb='0'>
            <Heading
              pb='1rem'
              size='md'
              textAlign='center'
              borderBottom='1px solid #d3dce3'>
              {text.title}
            </Heading>
          </CardHeader>
          <CardBody px='0'>
            {text.texts.map((item, index) => (
              <div key={item.id}>
                <Text
                  onClick={() => handleShowInformation(item)}
                  cursor='pointer'
                  mb={index === text.texts.length - 1 ? '0' : 'auto'}
                  mt={index === text.texts.length - 1 ? '1rem' : 'auto'}
                  px='1rem'
                  pb='1rem'
                  color={selectedText === item ? '#007BFF' : '#00259A'}
                  fontWeight='500'
                  fontSize='1.1rem'
                  borderBottom={index === text.texts.length - 1 ? '' : '1px solid #d3dce3'}
                  _hover={{
                    color: '#007BFF'
                  }}>
                  {item.text}
                  {selectedText === item && (
                    <Text
                      fontWeight='400'
                      color='rgba(0, 0, 0, 0.74)'
                      px='1rem'
                      pb='1rem'>
                      {item.description}
                    </Text>
                  )}
                </Text>
                {/* {selectedText === item && (
                  <Text
                    px='1rem'
                    pb='1rem'>
                    {item.description}
                  </Text>
                )} */}
              </div>
            ))}
          </CardBody>
        </Card>
      ))}
    </>
  )
}
