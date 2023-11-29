import { Box } from "@chakra-ui/react";
import { Contacto } from "./Contacto";
import { Header } from "../Header";
import { Footer } from "../Footer";
import ScholarshipBanner from "./Inicio";
import Carousel from "./BecasPopulares";
import { MenuCircular } from "../../components/MenuCirular.jsx";
import { SpeechToText } from "../../components/SpeechToText.jsx";

function Becass(params) {
  return (
    <Box>
      <Header />
      <ScholarshipBanner />
      <SpeechToText />
      <MenuCircular />
      <Carousel />
      <Contacto />
      <Footer />
    </Box>
  );
}

export default Becass;
