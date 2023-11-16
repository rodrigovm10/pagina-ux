import { Flex, Link } from '@chakra-ui/react'

export function NavFlotante() {
  return (
    <Flex
      position='fixed'
      bottom={40}
      right={5}
      flexDirection='column'>
      <Link
        href='#'
        textAlign='center'>
        Portal
      </Link>
      <Link href='#'>Biblioteca virtual</Link>
    </Flex>
  )
}
