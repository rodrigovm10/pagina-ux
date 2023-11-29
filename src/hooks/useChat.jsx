import { useEffect, useState } from 'react'

export function useChat() {
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState(['¿En qué puedo ayudarte?'])

	useEffect(() => {
		let lastMessage = messages[messages.length - 1]
		lastMessage = lastMessage.toLowerCase()
		if (lastMessage.startsWith('hola') || lastMessage.startsWith('buenos') || lastMessage.startsWith('buenas')) {
			setMessages(prevMessages => [
				...prevMessages,
				`Buen dia, espero poder ayudarte en las preguntas o dudas que tengas.`
			])
			return
		}
		if (lastMessage.includes('centrx de ayuda')) {
			setMessages(prevMessages => [
				...prevMessages,
				`Dentro del centro de ayuda encontrarás algunas de las dudas que los alumnos pueden tener, pueden utilizar el chat o dirigirse a las taretas a visualizar las dudas que puedan tener.`
			])
			return
		}
	}, [messages])

	const handleChange = e => {
		setMessage(e.target.value)
	}

	const handleSend = (message, e) => {
		e.preventDefault()
		sendMessage(message)
	}
	const sendMessage = message => {
		setMessages(prevMessages => [...prevMessages, message])
		setMessage('')
	}

	const deleteChat = () => {
		setMessages('¿En qué puedo ayudarte?')
	}

	return { messages, message, handleChange, handleSend, sendMessage, deleteChat }
}
