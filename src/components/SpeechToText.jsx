import { Button } from '@chakra-ui/react'
import { useRef, useState } from 'react'

export const SpeechToText = () => {
	const [text, setText] = useState('')
	const [listening, setListening] = useState(false)

	const btnStartRef = useRef(null)
	const btnStopRef = useRef(null)
	const textAreaRef = useRef(null)
	const recognition = new window.webkitSpeechRecognition()

	recognition.continuous = true
	recognition.lang = 'es-ES'
	recognition.interimResult = false

	const handleStart = () => {
		recognition.start()
		setListening(true)
		console.log('listening...')
	}

	const handleStop = () => {
		recognition.abort()
		setListening(false)
		console.log(listening)
	}

	recognition.onresult = event => {
		const texto = event.results[event.results.length - 1][0].transcript
		setText(texto)
		textAreaRef.current.value = texto
		leerTexto(texto)
		console.log(texto)
	}

	const leerTexto = text => {
		const speech = new window.SpeechSynthesisUtterance(text)
		console.log(text)
		speech.volume = 1
		speech.rate = 0.5
		speech.pitch = 0.4
		speech.lang = 'es-ES'

		window.speechSynthesis.speak(speech)
	}

	return (
		<div>
			<Button
				ref={btnStartRef}
				onClick={handleStart}
				disabled={listening}>
				Start listening
			</Button>
			<Button
				ref={btnStopRef}
				onClick={handleStop}
				disabled={!listening}>
				Stop listening
			</Button>
			<p
				ref={textAreaRef}
				value={text}>
				{text}
			</p>
		</div>
	)
}
