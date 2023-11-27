import { Box, Text } from '@chakra-ui/react'
import { ChatOpen } from './ChatOpen'

export function Chat({ isOpen, handleClickOpen }) {
	return !isOpen ? (
		<Box
			onClick={handleClickOpen}
			as='button'
			bg='#00259A'
			borderRadius='0.3rem'
			p='0.2rem'
			w={{ base: '12rem', lg: '20rem' }}
			cursor='pointer'>
			<Text
				color='#fff'
				m='0'>
				Chat
			</Text>
		</Box>
	) : (
		<ChatOpen onClick={handleClickOpen} />
	)
}
