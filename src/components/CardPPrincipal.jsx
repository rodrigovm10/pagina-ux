import { Card, CardBody, CardHeader, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { Global } from '@emotion/react';

// Definir estilos globales para la animación
const CardPPrincipalStyles = () => (
  <Global
    styles={`
      @keyframes enterAnimation {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  />
);

// Componente CardPPrincipal
export function CardPPrincipal({ title, text, wBase, wLg }) {
  const isList = Array.isArray(text);
  return (
    <>
      <CardPPrincipalStyles />
      <Card
        mb='3rem'
        w={{ base: wBase, lg: wLg }}
        sx={{ border: '1px solid #00259A', boxShadow: '2xl' }}
        animation='enterAnimation 0.5s ease-out'
      >
        <CardHeader>
          <Heading as='h3' size='md' fontWeight={500}>
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          {isList ? (
            <UnorderedList textAlign='justify'>
              {text.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          ) : (
            <Text textAlign='justify'>{text}</Text>
          )}
        </CardBody>
      </Card>
    </>
  )
}