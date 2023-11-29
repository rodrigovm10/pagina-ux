import { Button, Box } from '@chakra-ui/react'
import { useSpeechToText } from '../hooks/useSpeechToText'
import { MdMic } from 'react-icons/md'

export const SpeechToText = () => {
	const { listenToVoice, stopListening, isListening } = useSpeechToText()

	const handleClick = () => {
		if (isListening) {
			stopListening()
		} else {
			listenToVoice()
		}
	}

	return (
		<Box>
			<Button
				position='fixed'
				top={40}
				right='-5'
				leftIcon={
					<MdMic
						color={isListening ? 'red' : 'black'}
						size='24px'
					/>
				}
				colorScheme='white'
				borderRadius='full'
				size='lg'
				onClick={handleClick}></Button>
		</Box>
	)
}
