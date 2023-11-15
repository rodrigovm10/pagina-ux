import { Box, Flex, Image, Link } from '@chakra-ui/react'
import logo from '../assets/logoutng.webp'
import { NAV_FOOTER } from '../utilities/constants'
export function Footer() {
  return (
    <Flex
      bg='#00A887'
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
        {NAV_FOOTER.map((nav, i) => (
          <Link
            color='#fff'
            opacity='0.8'
            _hover={{ opacity: '1' }}
            key={i}
            href='#'>
            {nav}
          </Link>
        ))}
        {/* <Box
          bg='#00259A'
          color='#fff'
          p='0.1rem 2rem'>
          Mapa del sitio
        </Box> */}
      </Flex>
    </Flex>
  )
}
