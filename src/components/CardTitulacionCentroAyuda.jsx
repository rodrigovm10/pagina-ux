import { Heading, Text, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CardTitulacionCentroAyuda() {
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
          Titulación
        </Heading>
      </CardHeader>
      <CardBody px="0">
        <div>
          <Text
            onClick={() => handleShowInformation("Requisitos")}
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
            Requisitos para el proceso de titulación
            <AnimatePresence>
              {selectedText === "Requisitos" && (
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
                    <span style={{ fontWeight: "bold" }}>1.-</span> Carta de
                    acreditación de estadías original. (D-SAC-03) <br />
                    <span style={{ fontWeight: "bold" }}>2.-</span> Un (1)
                    reporte o memoria de estadía en formato electrónico (CD) por
                    proyecto (firmado por el asesor académico y especificando su
                    número de cédula profesional). <br />
                    <span style={{ fontWeight: "bold" }}>3.-</span>Formato de
                    liberación de adeudos y responsabilidades
                    F-BSE-08(Descargar). <br />
                    <span style={{ fontWeight: "bold" }}>4.-</span>2 fotografías
                    tamaño título y 6 fotografías tamaño infantil.
                    <br />
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>
          </Text>
        </div>
        <div>
          <Text
            onClick={() => handleShowInformation("Costo")}
            cursor="pointer"
            mb={"auto"}
            mt={"1rem"}
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
            Costo titulación
            <AnimatePresence>
              {selectedText === "Costo" && (
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
                    $2,287.00
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>
          </Text>
        </div>
        <div>
          <Text
            onClick={() => handleShowInformation("Características")}
            cursor="pointer"
            mb={"auto"}
            mt={"1rem"}
            px="1rem"
            pb="1rem"
            color={selectedText === "" ? "#007BFF" : "#00259A"}
            fontWeight="500"
            borderBottom={"1px solid #d3dce3"}
            fontSize="1.1rem"
            _hover={{
              color: "#007BFF",
            }}
          >
            Características de las fotografías
            <AnimatePresence>
              {selectedText === "Características" && (
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
                  >
                    <span style={{ fontWeight: "bold" }}>Tamaño título: </span>{" "}
                    Ovaladas (6 x 9 cm)
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                      Tamaño infantil:{" "}
                    </span>{" "}
                    (2 x 2.5cm)
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                      Características:{" "}
                    </span>
                    Recientes, blanco y negro, fondo blanco, con retoque,
                    impresas en papel mate, con pegamento adherible, debidamente
                    recortadas. De frente, rostro serio, frente y orejas
                    despejadas.
                    <br />
                    <span style={{ fontWeight: "bold" }}>Ojo: </span>(NO
                    DIGITALES, NO INSTANTÁNEAS O URGENTES)
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>
          </Text>
        </div>
        <div>
          <Text
            onClick={() => handleShowInformation("Asesor")}
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
            Asesor en el área de titulación
            <AnimatePresence>
              {selectedText === "Asesor" && (
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
                  >
                    <span style={{ fontWeight: "bold" }}>Nombre: </span>Itzel
                    Ivone Jiménez Gutiérrez.
                    <br />
                    <span style={{ fontWeight: "bold" }}>Correo: </span>{" "}
                    itzel.jimenez@utng.edu.mx
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                      Número de télefono:{" "}
                    </span>
                    Tel:18 2 55 00 ext. 1251
                    <br />
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
