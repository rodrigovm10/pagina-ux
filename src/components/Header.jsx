import { Box, Flex, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logoutng.webp'
import { NAV_HEADER } from '../utilities/constants'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <Flex
      bg='#00259A'
      p='1.5rem'
      justifyContent='space-between'
      alignItems='center'>
      <Box>
        <Image
          src={logo}
          alt='logo de la utng'
        />
      </Box>
      <Flex
        gap='1rem'
        alignItems='center'>
        {NAV_HEADER.map((nav, i) => (
          <Text
            color='#fff'
            opacity='0.8'
            _hover={{ opacity: '1' }}
            key={i}
            href='#'>
            <Link to={nav.to}>{nav.navName}</Link>
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}
