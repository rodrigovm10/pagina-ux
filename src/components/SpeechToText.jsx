import React, { useState } from "react";
import { Button, Box, Circle } from "@chakra-ui/react";
import { useSpeechToText } from "../hooks/useSpeechToText";
import { MdMic } from "react-icons/md";

export const SpeechToText = () => {
  const { listenToVoice } = useSpeechToText();
  const [isListening, setIsListening] = useState(false);

  const handleClick = () => {
    setIsListening(!isListening);
    listenToVoice();
  };

  return (
    <Box>
      <Button
        position="fixed"
        top={40}
        right="4"
        leftIcon={<MdMic color={isListening ? "black" : "blue"} size="24px" />}
        colorScheme="white"
        borderRadius="full"
        size="lg"
        onClick={handleClick}
      ></Button>
    </Box>
  );
};
