import { Button } from '@chakra-ui/react'
import { useSpeechToText } from '../hooks/useSpeechToText'

export const SpeechToText = () => {
	const { listenToVoice, text } = useSpeechToText()

	return (
		<div>
			<Button onClick={listenToVoice}>Start listening</Button>
			{/* <Button
		}>
				Stop listening
			</Button> */}
			<p>{text}</p>
		</div>
	)
}
