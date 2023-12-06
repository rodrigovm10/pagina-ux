import { Heading, Text, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CardBecasCentroAyuda() {
  const [selectedText, setSelectedText] = useState(null);

  const handleShowInformation = (text) => {
    setSelectedText(selectedText === text ? null : text);
  };
  return (
    <Card
      w="23rem"
      mb="3rem"
      transition="transform 0.3s ease-out, box-shadow 0.3s ease-in-out"
      sx={{ border: "2px solid #00259A" }}
      _hover={{ transform: "translateY(-10px)", boxShadow: "5px 5px #00259A" }}
      boxShadow="2xl"
    >
      <CardHeader px="0" pb="0">
        <Heading
          pb="1rem"
          size="md"
          textAlign="center"
          borderBottom="1px solid #d3dce3"
        >
          Becas
        </Heading>
      </CardHeader>
      <CardBody px="0">
        <div>
          <Text
            onClick={() => handleShowInformation("Becas con las que contamos")}
            cursor="pointer"
            mb={"auto"}
            mt={"auto"}
            px="1rem"
            pb="1rem"
            color={selectedText === "" ? "#007BFF" : "#00259A"}
            fontWeight="500"
            fontSize="1.1rem"
            borderBottom={"1px solid #d3dce3"}
            _hover={{
              color: "#007BFF",
            }}
          >
            Becas con las que contamos
            <AnimatePresence>
              {selectedText === "Becas con las que contamos" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text
                    fontSize="1rem"
                    textAlign="justify"
                    fontWeight="400"
                    color="rgba(0, 0, 0, 0.74)"
                    pb="1rem"
                  >
                    <span style={{ fontWeight: "bold" }}>1.-</span> Apoyo
                    alimenticio <br />
                    <span style={{ fontWeight: "bold" }}>2.-</span> Apoyo
                    deportivo y cultural <br />
                    <span style={{ fontWeight: "bold" }}>3.-</span> Apoyo apoyo
                    por necesidad apremiante
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>
          </Text>
        </div>
        <div>
          <Text
            onClick={() =>
              handleShowInformation("Asesores en el área de becas")
            }
            cursor="pointer"
            mb={"auto"}
            mt={"1rem"}
            px="1rem"
            pb="1rem"
            color={selectedText === "" ? "#007BFF" : "#00259A"}
            fontWeight="500"
            fontSize="1.1rem"
            _hover={{
              color: "#007BFF",
            }}
          >
            Asesores en el área de becas
            <AnimatePresence>
              {selectedText === "Asesores en el área de becas" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text
                    fontSize="1rem"
                    textAlign="justify"
                    fontWeight="400"
                    color="rgba(0, 0, 0, 0.74)"
                    borderBottom={"1px solid #d3dce3"}
                    pb="1rem"
                  >
                    <span style={{ fontWeight: "bold" }}>Nombre: </span>Diana
                    Berenice Cuellar González <br />
                    <span style={{ fontWeight: "bold" }}>Correo: </span>
                    diana.cuellar@utng.com.mx <br />
                    <span style={{ fontWeight: "bold" }}>
                      Número de télefono:{" "}
                    </span>
                    18 2 55 00 ext. 1254 <br />
                    <span style={{ fontWeight: "bold" }}>
                      Horario de atención:{" "}
                    </span>{" "}
                    Lunes a viernes de 8:00 a 16:00
                  </Text>
                  <Text
                    fontSize="1rem"
                    textAlign="justify"
                    fontWeight="400"
                    color="rgba(0, 0, 0, 0.74)"
                  >
                    <span style={{ fontWeight: "bold" }}>Nombre: </span>Lucía
                    Isabel López Aguilar
                    <br />
                    <span style={{ fontWeight: "bold" }}>Correo: </span>
                    lucia.lopez@utng.edu.mx
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                      Número de télefono:{" "}
                    </span>
                    18 2 55 00 ext. 1254 <br />
                    <span style={{ fontWeight: "bold" }}>
                      Horario de atención:{" "}
                    </span>{" "}
                    Lunes a viernes de 8:00 a 16:00
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>
          </Text>
        </div>
      </CardBody>
    </Card>
  );
}
