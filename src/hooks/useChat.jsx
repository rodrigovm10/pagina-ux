import { useEffect, useState } from 'react'

export function useChat() {
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([{ text: '¿En qué puedo ayudarte?', isUser: false }])

	useEffect(() => {
		let lastMessage = messages[messages.length - 1].text
		let lastIsUser = messages[messages.length - 1].isUser

		if (
			(lastMessage.startsWith('hola') && lastIsUser) ||
			(lastMessage.startsWith('buenos') && lastIsUser) ||
			(lastMessage.startsWith('buenas') && lastIsUser)
		) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Buen dia, espero poder ayudarte en las preguntas o dudas que tengas.`,
					isUser: false
				}
			])
			return
		}

		if (lastMessage.includes('centro de ayuda') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Dentro del centro de ayuda encontrarás algunas de las dudas que los alumnos pueden tener, pueden utilizar el chat o dirigirse a las taretas a visualizar las dudas que puedan tener.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (lastMessage.includes('calendario') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Dentro del calendario podrás encontrar todo tipo de eventos que sucedan en la UTNG, separado por mes.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (lastMessage.includes('servicios escolares') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Servicios escolares podrás encontrarlo dentro de la instrución en el edifico V. Dentro de este edificio contarás con cuatro ventanillas. La primera de control escolar, la segunda de coordinación de ingenieria, la tercera de becas y la última de titulación.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (
			(lastMessage.includes('ayuda de un asesor') && lastIsUser) ||
			(lastMessage.includes('asesor') && lastIsUser) ||
			(lastMessage.includes('asesor especializada') && lastIsUser)
		) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Para recibir ayuda más especializada, favor de en el siguiente mensaje escribir su correo, y uno de los asesores se comunicara contigo.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (lastMessage.includes('@') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `En el menor tiempo posible recibiras una respuesta por parte de los asesores.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (lastMessage.includes('gracias') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Estoy para ayudarte.
					
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		} else if (lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `No puedo responder a eso.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
		}
	}, [messages, message])

	const handleChange = e => {
		setMessage(e.target.value)
	}

	const handleSend = (message, e) => {
		e.preventDefault()
		sendMessage(message, true)
	}

	const sendMessage = (message, isUser = false) => {
		setMessages(prevMessages => [...prevMessages, { text: message, isUser }])
		setMessage('')
	}

	const deleteChat = () => {
		setMessages([{ text: '¿En qué puedo ayudarte?', isUser: false }])
	}

	return { messages, message, handleChange, handleSend, sendMessage, deleteChat }
}
