import { Box } from "@chakra-ui/react";
import { Contacto } from "./Contacto";
import { Header } from "../Header";
import { Footer } from "../Footer";
import ScholarshipBanner from "./Inicio";
import Carousel from "./BecasPopulares";

function Becass(params) {
    return(
           <Box>
            <Header/>
            <ScholarshipBanner/>
            <Carousel/>
            <Contacto/>
            <Footer/>
            </Box> 
    )
}

export default Becass;