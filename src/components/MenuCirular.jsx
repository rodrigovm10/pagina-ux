import { Box, IconButton } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { TextToSpeech } from './TextToSpeech'
import { useLocation } from 'react-router-dom'
import { TEXTS_TO_SPEECH } from '../utilities/constants'
import { Speaker } from '../assets/Icons'

export const MenuCircular = () => {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Box
			position='fixed'
			right='1'
			top='6rem' // Ajustado para que no dependa del margin-top
			zIndex={100}
			cursor='pointer'>
			<IconButton
				aria-label='Toggle menu'
				icon={<Speaker />}
				isRound={true}
				size='lg'
				onClick={handleToggle}
				backgroundColor='#00259A'
				color='gray.200'
				_hover={{ bg: 'gray.500' }}
				boxShadow='0px 4px 10px rgba(0, 0, 0, 0.2)'
			/>

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

/*   return (
    <Box
      position="fixed"
      right="12"
      top="5rem" // Ajustado para que no dependa del margin-top
      zIndex={100}
      cursor="pointer"
    >
      <IconButton
        aria-label="Toggle menu"
        icon={<Speaker />}
        isRound={true}
        size="lg"
        onClick={handleToggle}
        backgroundColor="white"
        color="gray.600"
        _hover={{ bg: "gray.100" }}
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)" }}
          >
            <Box
              mt="4"
              p="4"
              bg="white"
              borderRadius="lg"
              boxShadow="md"
            >
              <TextToSpeech text={TEXTS_TO_SPEECH[location.pathname]} />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  ); */
