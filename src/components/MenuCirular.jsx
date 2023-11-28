import { Box, Button } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { TextToSpeech } from './TextToSpeech'
import { useLocation } from 'react-router-dom'
import { TEXTS_TO_SPEECH } from '../utilities/constants'
export const MenuCircular = () => {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Box
			right={0}
			top={20}
			position='fixed'
			textAlign='center'
			mt='10'>
			<Box
				color='#fff'
				bgColor='#00259A'
				w='40px'
				h='40px'
				borderRadius='100%'
				onClick={handleToggle}>
				a
			</Box>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.3 }}
						position='absolute'
						top='50%'
						left='50%'
						transform='translate(-50%, -50%)'>
						<TextToSpeech text={TEXTS_TO_SPEECH[location.pathname]} />
					</motion.div>
				)}
			</AnimatePresence>
		</Box>
	)
}
