import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logoutng.webp'
import { NAV_FOOTER } from '../utilities/constants'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <Flex
      w='100%'
      bg='#00A887'
      p='1.5rem'
      justifyContent='space-between'
      flexDir={{ base: 'column', lg: 'row' }}
      gap={{ sm: '6rem', md: '2rem', lg: '1rem' }}
      alignItems='center'>
      <Box>
        <Image
          src={logo}
          alt='logo de la utng'
        />
      </Box>
      <Grid
        gridTemplateRows={2}
        gap={{ base: '6rem', md: '3rem', lg: '1.2rem' }}
        alignItems='center'>
        <GridItem>
          <Flex
            gap='1rem'
            flexDir={{ sm: 'column', md: 'row', lg: 'row' }}>
            {NAV_FOOTER.map((nav, i) => (
              <Text
                textAlign={{ base: 'center', lg: 'left' }}
                color='#fff'
                opacity='0.8'
                _hover={{ opacity: '1' }}
                key={i}
                href='#'>
                <Link to={nav.to}>{nav.navName}</Link>
              </Text>
            ))}
          </Flex>
        </GridItem>
        <Flex justifyContent='center'>
          <Link to={'/'}>
            <Text
              display='inline-block'
              w={{ base: '15rem', md: '30rem', lg: '30rem' }}
              href='#'
              textAlign='center'
              bg='#00259A'
              color='#fff'
              p='0.1rem 2rem'>
              Mapa del sitio
            </Text>
          </Link>
        </Flex>
      </Grid>
    </Flex>
  )
}
