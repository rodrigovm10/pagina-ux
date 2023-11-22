import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logoutng.webp";
import { NAV_HEADER } from "../utilities/constants";
import { Link } from "react-router-dom";

export function Header() {
  const [isLessThan768px] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      bg="#00259A"
      p="1.5rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Image src={logo} alt="logo de la utng" />
      </Box>
      {isLessThan768px ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
          />
          <MenuList>
            {NAV_HEADER.map((nav, i) => (
              <Link
                key={i}
                to={nav.to}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem>{nav.navName}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Flex gap="1rem" alignItems="center">
          {NAV_HEADER.map((nav, i) => (
            <Text
              color="#fff"
              opacity="0.8"
              _hover={{ opacity: "1" }}
              key={i}
              href="#"
            >
              <Link to={nav.to}>{nav.navName}</Link>
            </Text>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
