import { useState } from 'react'
import { useRedirection } from './useRedirection'

export function useSpeechToText() {
	const [text, setText] = useState('')
	const [isListening, setIsListening] = useState(false)
	const { redirectWithVoice } = useRedirection()
	const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)()

	const listenToVoice = () => {
		recognition.lang = 'es-ES'

		recognition.onstart = () => {
			setIsListening(true)
		}

		recognition.onresult = event => {
			const command = event.results[0][0].transcript.toLowerCase()
			setText(command)
			redirectWithVoice(command)
		}

		recognition.onend = () => {
			setIsListening(false)
		}

		recognition.start()
	}

	const stopListening = () => {
		recognition.stop()
		setIsListening(false)
	}

	return { text, listenToVoice, isListening, stopListening }
}
