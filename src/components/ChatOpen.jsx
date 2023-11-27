import { Box, Flex, Text } from '@chakra-ui/react'
import { useChat } from '../hooks/useChat'
import { InputChat } from './InputChat'
import { ChatMessages } from './ChatMessages'
import { AnimatePresence, motion } from 'framer-motion'

export function ChatOpen({ onClick }) {
	const { messages, message, handleChange, handleSend, sendMessage } = useChat()
	return (
		<AnimatePresence>
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: 'auto', opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<Box
					bg='#fff'
					border='1px solid #000'
					boxShadow='2xl'
					borderRadius={3}
					w='20rem'
					h='20rem'
					display='flex'
					flexDirection='column'
					justifyContent='center'
					position='relative'>
					<Flex
						justifyContent='center'
						alignItems='center'
						pt='1rem'
						onClick={onClick}
						bg='#00259A'
						cursor='pointer'>
						<Text
							fontWeight='500'
							fontSize='1.2rem'
							color='#fff'>
							Soporte
						</Text>
					</Flex>
					<ChatMessages messages={messages} />
					<InputChat
						message={message}
						handleChange={handleChange}
						handleSend={handleSend}
						sendMessage={sendMessage}
					/>
				</Box>
			</motion.div>
		</AnimatePresence>
	)
}
