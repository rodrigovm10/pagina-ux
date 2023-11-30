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
  Circle,
  Grid,
  VStack,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { CARDS_CALENDAR } from "../utilities/constants.js";
import { CardCalendario } from "./CardCalendario.jsx";
import { MenuCircular } from "../components/MenuCirular.jsx";
import { SpeechToText } from "../components/SpeechToText.jsx";
import Calendar from "react-calendar";
import { createGlobalStyle } from "styled-components";

const vacaciones = [
  "2023-12-21",
  "2023-12-22",
  "2023-12-26",
  "2023-12-27",
  "2023-12-28",
  "2023-12-29",
  "2024-01-02",
  "2024-01-03",
  "2024-01-04",
  "2024-01-05",
];
const holidays = ["2023-11-02", "2023-11-20", "2023-12-25", "2024-01-01"];
const FinCursos = ["2023-12-20"];
const InicioCursos = ["2024-01-08"];
const Reinscripciones = [
  "2024-01-08",
  "2024-01-09",
  "2024-01-10",
  "2024-01-11",
  "2024-01-12",
  "2024-01-15",
  "2024-01-16",
  "2024-01-17",
  "2024-01-18",
  "2024-01-19",
];

export function Calendario() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("calendar");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setViewMode("search");
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
    setViewMode("calendar");
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

  const isHoliday = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return holidays.includes(formattedDate);
  };

  const isVacaciones = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return vacaciones.includes(formattedDate);
  };

  const isFinCursos = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return FinCursos.includes(formattedDate);
  };

  const isInicioCursos = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return InicioCursos.includes(formattedDate);
  };

  const isReinscripciones = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return Reinscripciones.includes(formattedDate);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (isHoliday(date)) {
        return "holiday";
      }
      if (isVacaciones(date)) {
        return "vacaciones";
      }
      if (isFinCursos(date)) {
        return "FinCursos";
      }
      if (isInicioCursos(date)) {
        return "InicioCursos";
      }
      if (isReinscripciones(date)) {
        return "Reinscripciones";
      }
    }
  };

  return (
    <>
      <Header />
      <SpeechToText />
      <MenuCircular />
      <Box p="2rem">
        <InputGroup>
          <Input
            placeholder="Buscar evento..."
            value={searchTerm}
            onChange={handleSearchChange}
            mb="2rem"
            w={["83%", "87%", "90%", "90%", "95%"]}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            _hover={{ border: "2px solid #0B2447" }}
            borderRadius="0"
            border="2px solid #0B2447"
            p="1.7rem"
            boxShadow="7px 7px 0px 0px #0B2447"
          />
        </InputGroup>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={1}
          mb="1rem"
        >
          <VStack spacing="4px" alignItems="center">
            <Circle size="30px" bg="red" color="white"></Circle>
            <Text>Suspensión de labores</Text>
          </VStack>
          <VStack spacing="4px" alignItems="center">
            <Circle size="30px" bg="blue" color="white"></Circle>
            <Text>Día seleccionado</Text>
          </VStack>
          <VStack spacing="4px" alignItems="center">
            <Circle size="30px" bg="#EEEEEE" color="white"></Circle>
            <Text marginLeft="8px">Vacaciones</Text>
          </VStack>
          <VStack spacing="4px" alignItems="center">
            <Circle size="30px" bg="#16FF00" color="white"></Circle>
            <Text marginLeft="8px">Fin de cursos</Text>
          </VStack>
          <VStack spacing="4px" alignItems="center">
            <Circle size="30px" bg="#00A9FF" color="white"></Circle>
            <Text marginLeft="8px">Inicio de cursos</Text>
          </VStack>
          <VStack spacing="4px" alignItems="center">
            <Circle size="30px" bg="#F875AA" color="white"></Circle>
            <Text marginLeft="8px">Solicitar becas internas</Text>
          </VStack>
        </Grid>
        <SimpleGrid
          spacing={6}
          mb="1.5rem"
          templateColumns={{
            base: "repeat(auto-fill, minmax(250px, 1fr))",
            md: "repeat(auto-fill, minmax(500px, 1fr))",
            sm: "repeat(auto-fill, minmax(250px, 1fr))",
            lg: "repeat(auto-fill, minmax(500px, 1fr))",
            xl: "repeat(auto-fill, minmax(500px, 1fr))",
          }}
        >
          <>
            <GlobalStyles />
            <Calendar
              onChange={handleDayClick}
              value={value}
              tileClassName={tileClassName}
            />
          </>
          {viewMode === "calendar" && selectedDayEvents.length > 0 ? (
            selectedDayEvents.map((event) => (
              <Card key={event.id} p="4">
                <Text fontWeight="bold" fontSize="xl">
                  {event.title}
                </Text>
                <p>{event.date.join(" ")}</p>
                <p>{event.description.join(" ")}</p>
              </Card>
            ))
          ) : viewMode === "search" && filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <CardCalendario
                key={card.id}
                title={card.title}
                date={card.date}
                description={card.description}
              />
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
                  <Heading size="md" textAlign="justify">
                    Calendario Académico
                  </Heading>

                  <Text py="2" textAlign="justify">
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
  
  .holiday {
    background-color: red; 
    border-radius: 200px; 
    color: white;
    &:hover {
      background-color: red;
    }
  }

  .vacaciones {
    background-color: #EEEEEE; 
    color: black;
    &:hover {
      background-color: #EEEEEE;
    }
  }
  .FinCursos {
    background-color: #16FF00; 
    border-radius: 200px; 
    color: black;
    &:hover {
      background-color: #16FF00;
    }
  }

  .InicioCursos {
    background-color: #00A9FF; 
    border-radius: 200px; 
    color: black;
    &:hover {
      background-color: #00A9FF;
    }
  }

  .Reinscripciones {
    background-color: #F875AA; 
    border-radius: 200px; 
    color: black;
    &:hover {
      background-color: #F875AA;
    }
  }
`;
