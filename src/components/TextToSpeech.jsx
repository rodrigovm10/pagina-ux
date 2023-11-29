import { Flex, Box } from '@chakra-ui/react'
import { Pause, Play, Stop } from '../assets/Icons'
import { useTextToSpeech } from '../hooks/useTextToSpeech'

export function TextToSpeech({ text }) {
	const { onClickPause, onClickPlay, onClickStop } = useTextToSpeech({ text })
	return (
		<Box mt='2rem'>
			<Flex gap='2rem'>
				<Box
					onClick={onClickPlay}
					cursor='pointer'>
					<Play />
				</Box>
				<Box
					onClick={onClickPause}
					cursor='pointer'>
					<Pause />
				</Box>
				<Box
					onClick={onClickStop}
					cursor='pointer'>
					<Stop />
				</Box>
			</Flex>
		</Box>
	)
}
