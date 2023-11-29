import { Box, Button, Circle, useDisclosure } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { TextToSpeech } from './TextToSpeech'
import { TEXTS_TO_SPEECH } from '../utilities/constants'
import { Speaker } from '../assets/Icons'
import { useLocation } from 'react-router-dom'

export const MenuCircular = () => {
	const { isOpen, onToggle } = useDisclosure()
	const handleToggle = () => onToggle()
	const location = useLocation()

	const textKeys = Object.keys(TEXTS_TO_SPEECH) // Usando TEXTS_TO_SPEECH directamente

	const calculatePosition = (index, total) => {
		const angle = (360 / total) * index
		const radius = 60
		return {
			x: Math.cos((angle * Math.PI) / 180) * radius,
			y: Math.sin((angle * Math.PI) / 180) * radius
		}
	}

	return (
		<Box
			position='fixed'
			right='20px'
			bottom='20px'
			textAlign='center'>
			<Button
				onClick={handleToggle}
				borderRadius='50%'
				p='10px'
				boxShadow='lg'>
				<Speaker />
			</Button>

			<AnimatePresence>
				{isOpen &&
					textKeys.map((key, index) => {
						const position = calculatePosition(index, textKeys.length)
						return (
							<motion.div
								key={key}
								initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
								animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
								exit={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
								transition={{ duration: 0.3 }}
								style={{
									position: 'absolute',
									bottom: `calc(5% - ${position.y}px)`,
									right: `calc(5% - ${position.x}px)`,
									transform: 'translate(50%, 50%)'
								}}>
								<TextToSpeech text={TEXTS_TO_SPEECH[key]} />
							</motion.div>
						)
					})}
			</AnimatePresence>
		</Box>
	)
}
