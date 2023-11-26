import { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Image,
  Card,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  CardBody,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { CARDS_CALENDAR } from "../utilities/constants.js";
import { CardCalendario } from "./CardCalendario.jsx";
import { Search } from "../assets/Icons.jsx";
import Calendar from "react-calendar";
import styled, { createGlobalStyle } from "styled-components";

export function Calendario() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = CARDS_CALENDAR.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [value, setValue] = useState(new Date());

  const [selectedDayEvents, setSelectedDayEvents] = useState([]);

  const handleDayClick = (value) => {
    const dayEvents = getEventsForDay(value);
    setSelectedDayEvents(dayEvents);
    setValue(value);
  };

  const getEventsForDay = (selectedDay) => {
    const formattedSelectedDay = selectedDay.toISOString().split("T")[0];

    const events = CARDS_CALENDAR.filter((event) => {
      const [dayPart, monthPart] = event.date[1].split(" ");
      const monthNames = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      const monthIndex = monthNames.indexOf(monthPart.toLowerCase());
      const eventDate = new Date(
        selectedDay.getFullYear(),
        monthIndex,
        parseInt(dayPart)
      );
      return eventDate.toISOString().split("T")[0] === formattedSelectedDay;
    });
    return events;
  };

  return (
    <>
      <Header />
      <Box p="2rem">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Search />} />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearchChange}
            mb="1rem"
          />
        </InputGroup>
        <SimpleGrid
          spacing={6}
          mb="1.5rem"
          templateColumns={{
            base: "repeat(auto-fill, minmax(250px, 1fr))",
            md: "repeat(auto-fill, minmax(300px, 1fr))",
            sm: "repeat(auto-fill, minmax(250px, 1fr))",
            lg: "repeat(auto-fill, minmax(400px, 1fr))",
            xl: "repeat(auto-fill, minmax(500px, 1fr))",
          }}
        >
          <>
            <GlobalStyles />
            <Calendar onChange={handleDayClick} value={value} />
          </>
          {selectedDayEvents.length > 0 ? (
            selectedDayEvents.map((event) => (
              <Card key={event.id} p="4">
                <Text fontWeight="bold" fontSize="xl">
                  {event.title}
                </Text>
                <p>{event.date.join(" ")}</p>
                <p>{event.description.join(" ")}</p>
              </Card>
            ))
          ) : (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px", xl: "250px" }}
                src="https://media.istockphoto.com/id/1476727937/es/foto/calendario-y-agenda-del-organizador-recordatorio-de-cita-los-planificadores-de-eventos.jpg?s=612x612&w=0&k=20&c=DXc6a0XU3WTPfkJ6uYnx2zpxhxCx90Juaf0ndraDdpY="
                alt="Calendario UTNG"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">
                    Bienvenidos al Calendario Académico
                  </Heading>

                  <Text py="2">
                    Nos complace presentarles el Calendario Académico. Este
                    calendario es una herramienta esencial para planificar y
                    organizar sus actividades académicas y eventos
                    universitarios a lo largo del año. En él, encontrarán fechas
                    importantes como el eventos deportivos, danza, etc. Les
                    invitamos a consultarlo regularmente para estar al tanto de
                    todas las actividades y plazos relevantes.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          )}
        </SimpleGrid>
        <SimpleGrid
          spacing={6}
          templateColumns={{
            base: "repeat(auto-fill, minmax(530px, 1fr))",
            md: "repeat(auto-fill, minmax(300px, 1fr))",
            sm: "repeat(auto-fill, minmax(860px, 1fr))",
            lg: "repeat(auto-fill, minmax(400px, 1fr))",
            xl: "repeat(auto-fill, minmax(500px, 1fr))",
          }}
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

const GlobalStyles = createGlobalStyle`
  .react-calendar {
    background-color: white; 
    border-radius: 8px; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    height: 44px;
    margin: 0;
  }

  /* Centra el texto del mes y año */
  .react-calendar__navigation__label {
    flex-grow: 1;
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    padding: 0.5em 0;
  }

  .react-calendar__month-view__days__day {
    text-align: center;
    padding: 0.5em 0;
    text-decoration: none;
    &:hover {
      background-color: #e0e0e0;
      border-radius: 200px; 
    }
  }
  
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1640D6;
    color: white; 
    border-radius: 200px; 
  }
`;
