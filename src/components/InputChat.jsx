import { Flex, Input } from '@chakra-ui/react'
import { Send } from '../assets/Icons'

export function InputChat({ message, handleSend, handleChange, sendMessage }) {
	return (
		<Flex
			borderTop='1px solid rgba(0, 0, 0, 0.6)'
			flexDir='column'
			alignSelf='flexEnd'
			alignContent='flex-end'
			mt='auto'
			mb={'0.2rem'}>
			<form onSubmit={e => handleSend(message, e)}>
				<Input
					_focus={{ boxShadow: 'none' }}
					border='none'
					borderRadius='none'
					placeholder='Enviar un mensaje...'
					value={message}
					onChange={handleChange}
					color=' rgba(0, 0, 0, 1)'
					bg='#fff'
					p='0.5rem'
				/>
			</form>

			<Flex
				onClick={() => sendMessage(message)}
				alignSelf='flex-end'
				// w='1.8rem'
				cursor='pointer'>
				<Send />
			</Flex>
		</Flex>
	)
}
