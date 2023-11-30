import { Card, CardHeader } from "@chakra-ui/card";
import { Heading, Text } from "@chakra-ui/layout";

export function CardCalendario({ title, date, description }) {
  return (
    <Card boxShadow="2xl" maxW={{ base: "55%", md: "full", lg: "full" }}>
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
      </CardHeader>
    </Card>
  );
}
