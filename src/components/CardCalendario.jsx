import { Card, CardHeader } from "@chakra-ui/card";
import { Heading, Text } from "@chakra-ui/layout";

export function CardCalendario({ title, date, description, lugar, hora }) {
  return (
    <Card
      maxW={{ base: "55%", md: "full", lg: "full" }}
      mb="3rem"
      transition="transform 0.3s ease-out, box-shadow 0.3s ease-in-out"
      _hover={{ transform: "translateY(-10px)", boxShadow: "5px 5px #00259A" }}
      boxShadow="2xl"
    >
      <CardHeader>
        <Heading size="md" mb="1rem" textAlign="justify">
          {title}
        </Heading>
        <Text textAlign="justify">
          <span style={{ fontWeight: 700 }}>{date[0]}</span>
          {date[1]}
        </Text>
        <Text textAlign="justify">
          <span style={{ fontWeight: 700 }}>{description[0]}</span>
          {description[1]}
        </Text>
        <Text textAlign="justify">
          <span style={{ fontWeight: 700 }}>Lugar:</span> {lugar}
        </Text>
        <Text textAlign="justify">
          <span style={{ fontWeight: 700 }}>Hora:</span>
          {hora}
        </Text>
      </CardHeader>
    </Card>
  );
}
