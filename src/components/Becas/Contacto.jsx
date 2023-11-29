import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react"

import { MdPhone } from 'react-icons/md';

import logo from '../../assets/logoutng.webp';

export const Contacto = () => {
    return(
        <Box
          maxW='100%'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          bg='#159b80'
          p={10}>
          <Flex
            align='center'
            justify='space-between'>
            <Flex align='center'>
              <Image
                src={logo}
                alt='Logo'
              />
              <Box ml='3'>
                <Text fontWeight='bold'>Diana Berenice Cuellar González</Text>
                <Link
                  href='mailto:diana.cuellar@utng.edu.mx'
                  isExternal>
                  diana.cuellar@utng.edu.mx
                </Link>
                <Text fontSize='sm'>Atención de lunes a viernes de 8:00 a 16:00 hrs</Text>
              </Box>
            </Flex>
            <Box textAlign='right'>
              <Text>Tel:18 2 55 00 ext. 1254</Text>
              <Icon
                as={MdPhone}
                boxSize='6'
              />
            </Box>
          </Flex>
        </Box>
    )
}