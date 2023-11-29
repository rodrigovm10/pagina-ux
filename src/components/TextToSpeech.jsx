import { Flex, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'
import { useTextToSpeech } from '../hooks/useTextToSpeech'

export function TextToSpeech({ text }) {
	const { onClickPause, onClickPlay, onClickStop } = useTextToSpeech({ text })
	const bgColor = useColorModeValue('white', 'gray.800')
	const colorScheme = useColorModeValue('purple', 'orange')

	return (
		<Flex
			// position='fixed'
			bottom='2rem'
			right='-10'
			zIndex='100'
			gap='2rem'
			p='2'
			bg={bgColor}
			borderRadius='lg'
			boxShadow='md'>
			<IconButton
				icon={<FaPlay />}
				onClick={onClickPlay}
				aria-label='Play'
				colorScheme={colorScheme}
				isRound
			/>
			<IconButton
				icon={<FaPause />}
				onClick={onClickPause}
				aria-label='Pause'
				colorScheme={colorScheme}
				isRound
			/>
			<IconButton
				icon={<FaStop />}
				onClick={onClickStop}
				aria-label='Stop'
				colorScheme={colorScheme}
				isRound
			/>
		</Flex>
	)
}
