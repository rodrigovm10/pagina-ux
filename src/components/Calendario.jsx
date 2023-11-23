import { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { CARDS_CALENDAR } from "../utilities/constants.js";
import { CardCalendario } from "./CardCalendario.jsx";
import { Search } from "../assets/Icons.jsx";

export function Calendario() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCardExpansion = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = CARDS_CALENDAR.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Header />
      <Box p="2rem" w="90%" m="0 auto">
        <Image
          w={{ base: "80vw", sm: "full", md: "full", lg: "full" }}
          objectFit="cover"
          borderRadius={7}
          mb="1rem"
          src="https://media.istockphoto.com/id/1370276409/es/foto/hombre-asi%C3%A1tico-de-cuello-blanco-marcando-la-fecha-en-el-calendario-del-escritorio.jpg?s=612x612&w=0&k=20&c=L-fRHj1PoZHZ_VJviN_iw9PIEK8N_KcFO8QWiJBmZjQ="
          alt="Calendario UTNG"
        />
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search />} // Assuming Search is a React component
          />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearchChange}
            mb="1rem"
          />
        </InputGroup>
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        >
          {filteredCards.map((card) => (
            <CardCalendario
              key={card.id}
              title={card.title}
              date={card.date}
              description={card.description}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
