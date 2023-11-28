import { useState, useEffect } from 'react'

export const SpeechToText = () => {
	const [transcript, setTranscript] = useState(null)
	const [recognition, setRecognition] = useState(null)

	useEffect(() => {
		if ('SpeechRecognition' in window) {
			const recognitionInstance = new window.SpeechRecognition()

			recognitionInstance.onresult = event => {
				const result = event.results[0][0].transcript
				setTranscript(result)
			}

			recognitionInstance.onerror = event => {
				console.error('Speech recognition error:', event.error)
				recognitionInstance.stop()
			}

			setRecognition(recognitionInstance)

			return () => {
				recognitionInstance.stop()
			}
		} else {
			console.error('SpeechRecognition is not supported in this browser.')
		}
	}, [])

	const startListeningHandler = () => {
		if (recognition) {
			recognition.start()
		}
	}

	const stopListeningHandler = () => {
		if (recognition) {
			recognition.stop()
		}
	}

	return (
		<div>
			<h1>Speech to Text</h1>
			<button onClick={startListeningHandler}>Start Listening</button>
			<button onClick={stopListeningHandler}>Stop Listening</button>
			<p>{transcript}</p>
		</div>
	)
}
