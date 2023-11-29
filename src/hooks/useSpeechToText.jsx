import { useState } from 'react'
import { useRedirection } from './useRedirection'

export function useSpeechToText() {
	const [text, setText] = useState('')
	const { redirectWithVoice } = useRedirection()
	const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition()

	// recognition.continuous = true
	// recognition.lang = 'es-ES'
	// recognition.interimResult = false

	const listenToVoice = () => {
		recognition.lang = 'es-ES'

		recognition.onresult = event => {
			const command = event.results[0][0].transcript.toLowerCase()
			setText(text)
			redirectWithVoice(command)
		}
		recognition.start()
	}

	return { text, listenToVoice }
}
