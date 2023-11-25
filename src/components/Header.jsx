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
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import logo from '../assets/logoutng.webp'
import { NAV_HEADER } from '../utilities/constants'
import { Link, useLocation } from 'react-router-dom'
import '../styles/animations.css'

export function Header() {
  const [isLessThan768px] = useMediaQuery('(max-width: 768px)')
  const location = useLocation()
  return (
    <Flex
      bg='#00259A'
      p='1.5rem'
      justifyContent='space-between'
      alignItems='center'>
      <Box>
        <Link to='/'>
          <Image
            cursor='pointer'
            src={logo}
            alt='logo de la utng'
          />
        </Link>
      </Box>
      {isLessThan768px ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='outline'
            color='white'
          />
          <MenuList>
            {NAV_HEADER.map((nav, i) => (
              <Link
                key={i}
                to={nav.to}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>{nav.navName}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Flex
          gap='1rem'
          alignItems='center'>
          {NAV_HEADER.map((nav, i) => (
            <Box
              key={i}
              color='#fff'
              transition='all ease-out 0.4s'
              opacity={location.pathname === nav.to ? '1' : '0.8'}
              _hover={{ opacity: '1', transform: 'translateY(-5px)' }}>
              <Link
                to={nav.to}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <Text borderBottom={location.pathname === nav.to ? '2px solid #fff' : ''}>{nav.navName}</Text>
              </Link>
            </Box>
          ))}
        </Flex>
      )}
    </Flex>
  )
}
