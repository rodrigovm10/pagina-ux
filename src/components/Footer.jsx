import { Box, Flex, Grid, GridItem, Image, Link } from '@chakra-ui/react'
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
      <Grid
        gridTemplateRows={2}
        gap='1rem'
        alignItems='center'>
        <GridItem>
          <Flex gap='1rem'>
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
          </Flex>
        </GridItem>
        <Flex justifyContent='center'>
          <Link
            w='100%'
            href='#'
            textAlign='center'
            bg='#00259A'
            color='#fff'
            p='0.1rem 2rem'>
            Mapa del sitio
          </Link>
        </Flex>
      </Grid>
    </Flex>
  )
}
