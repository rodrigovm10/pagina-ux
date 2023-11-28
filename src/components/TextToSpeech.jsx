import { useState, useEffect } from 'react'
import { Flex, Button, Box } from '@chakra-ui/react'

export function TextToSpeech({ text }) {
	const [flag, setFlag] = useState(false)
	const [synth, setSynth] = useState(speechSynthesis)

	const onClickPlay = () => {
		if (!flag) {
			setFlag(true)

			let utterance = new SpeechSynthesisUtterance(text)
			utterance.voice = synth.getVoices()[0]
			utterance.onend = () => {
				setFlag(false)
			}

			if (synth.paused) {
				synth.resume()
			} else {
				synth.speak(utterance)
			}
		}
	}

	const onClickPause = () => {
		if (synth.speaking && !synth.paused) {
			setFlag(false)
			synth.pause()
		}
	}

	const onClickStop = () => {
		if (synth.speaking) {
			synth.cancel()
			setFlag(false)
		}
	}

	useEffect(() => {
		if ('speechSynthesis' in window) {
			setSynth(speechSynthesis)
		}
	}, [flag])

	return (
		<Box>
			<Flex>
				<Button onClick={onClickPlay}>Play</Button>
				<Button onClick={onClickPause}>Pause</Button>
				<Button onClick={onClickStop}>Stop</Button>
			</Flex>
		</Box>
	)
}
