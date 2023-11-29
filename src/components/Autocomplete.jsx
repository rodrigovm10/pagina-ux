import { useState, useEffect, useRef } from "react";
import { Input, Box, Text, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Autocomplete = ({ options, onSelect }) => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showOptions, setShowOptions] = useState(true);
  const navigate = useNavigate();
  const listRef = useRef(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    setSelectedIndex(-1);

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

  const handleKeyDown = (event) => {
    if (
      event.key === "ArrowDown" &&
      selectedIndex < filteredOptions.length - 1
    ) {
      setSelectedIndex(selectedIndex + 1);
    } else if (event.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (event.key === "Enter" && selectedIndex !== -1) {
      handleSelectOption(filteredOptions[selectedIndex]);
    }
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

  useEffect(() => {
    if (selectedIndex >= 0 && listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex];
      selectedElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedIndex]);

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
        onKeyDown={handleKeyDown}
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
          ref={listRef}
        >
          {filteredOptions.map((option, index) => (
            <ListItem
              key={option.id}
              onClick={() => handleSelectOption(option)}
              cursor="pointer"
              _hover={{ bg: "blue.100" }}
              p={1}
              bg={selectedIndex === index ? "gray.100" : undefined}
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
