import React, { useState } from "react";
import { IconButton, Tooltip, useToast } from "@chakra-ui/react";
import { MdMic, MdMicOff } from "react-icons/md";
import { useSpeechToText } from "../hooks/useSpeechToText";

export const SpeechToText = () => {
  const { listenToVoice } = useSpeechToText();
  const [isListening, setIsListening] = useState(false);
  const toast = useToast();

   const handleClick = () => {
    setIsListening(!isListening);
    listenToVoice();
    if (!isListening) {
      // Solo muestra la alerta cuando se activa el micrófono
      toast({
        title: "Microphone is on.",
        description: "Listening...",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Tooltip label={isListening ? "Mic is on" : "Haz clic para empezar hablar"} hasArrow placement="left">
      <IconButton
        position="fixed"
        zIndex={100}
        top={40}
        right="1"
        icon={isListening ? <MdMicOff /> : <MdMic />}
        isRound={true}
        size="lg"
        onClick={handleClick}
        bg={isListening ? "red.500" : "#00259A"} // Fondo rojo cuando está escuchando, blanco de lo contrario
        color={isListening ? "white" : "gray.200"} // Ícono blanco cuando está escuchando, gris oscuro de lo contrario
        _hover={{
          bg: isListening ? "red.600" : "gray.500",
        }}
        _active={{
          bg: isListening ? "red.700" : "gray.200",
        }}
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)" // Sombra opcional para el botón
        aria-label={isListening ? "Stop listening" : "Start listening"} 
      />
    </Tooltip>
  );
};
