import { useState, useEffect } from "react";
import { Input, Box, Text, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Autocomplete = ({ options, onSelect }) => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue.trim() === "") {
      setShowOptions(false);
    } else {
      const filtered = options.filter((option) =>
        option.text.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    }
  };

  const handleSelectOption = (option) => {
    navigate(option.url);
    setQuery(option.text);
    onSelect(option);
    setFilteredOptions([]);
    setShowOptions(false);
  };

  useEffect(() => {
    let timer;
    if (query === "") {
      timer = setTimeout(() => {
        setShowOptions(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Box position="relative">
      <Input
        _hover={{ border: "2px solid #0B2447" }}
        borderRadius="0"
        border="2px solid #0B2447"
        p="1.7rem"
        boxShadow="7px 7px 0px 0px #0B2447"
        w="70vw"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      {showOptions && filteredOptions.length > 0 && (
        <List
          overflowY="scroll"
          p="0"
          position="absolute"
          width="100%"
          boxShadow="md"
          backgroundColor="white"
          zIndex={1}
        >
          {filteredOptions.map((option) => (
            <ListItem
              key={option.id}
              onClick={() => handleSelectOption(option)}
              cursor="pointer"
              _hover={{ bg: "blue.100" }}
              p={1}
            >
              <Text>{option.text}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Autocomplete;
