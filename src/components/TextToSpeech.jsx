import { useState, useEffect } from 'react'
import { Flex, Button, Box } from '@chakra-ui/react'

export function TextToSpeech({ text }) {
	const [flag, setFlag] = useState(false)
	const [synth, setSynth] = useState(speechSynthesis)

	const onClickPlay = () => {
		if (!flag) {
			setFlag(true)

			let utterance = new SpeechSynthesisUtterance(
				text +
					'Finalmente, en el pie de página, se repite el logo de la universidad con las opciones de navegación y acceso a más información como Centro de ayuda, Términos y condiciones, Aviso de privacidad y Mapa del sitio, todo esto sobre un fondo verde.'
			)
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
	}, [flag, text])

	return (
		<Box mt='2rem'>
			<Flex gap='2rem'>
				<Button onClick={onClickPlay}>Play</Button>
				<Button onClick={onClickPause}>Pause</Button>
				<Button onClick={onClickStop}>Stop</Button>
			</Flex>
		</Box>
	)
}
