import { Box, Button } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { TextToSpeech } from './TextToSpeech'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { TEXTS_TO_SPEECH } from '../utilities/constants'
export const MenuCircular = () => {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	useEffect(() => {
		console.log(location.pathname)
	}, [location])

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Box
			textAlign='center'
			mt='10'>
			<Button onClick={handleToggle}>Toggle Menu</Button>

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
