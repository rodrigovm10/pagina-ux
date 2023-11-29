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

		if (
			(/d[oó]nde.*encuentro.*informaci[oó]n.*titulaci[oó]n/i.test(lastMessage) && lastIsUser) ||
			(/d[oó]nde.*hay.*informaci[oó]n.*titulaci[oó]n/i.test(lastMessage) && lastIsUser) ||
			(/d[oó]nde.*ver.*informaci[oó]n.*titulaci[oó]n/i.test(lastMessage) && lastIsUser)
		) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Para ver información sobre la titulación es dentro del centro de ayuda, busca el apartado de "Titulación", y ahí encontrarás más acerca de la titulación. En caso de requerir información extra contactate con el asesor de la titulación.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (
			(/d[oó]nde.*encuentro.*informaci[oó]n.*becas/i.test(lastMessage) && lastIsUser) ||
			(/d[oó]nde.*hay.*informaci[oó]n.*becas/i.test(lastMessage) && lastIsUser) ||
			(/d[oó]nde.*ver.*informaci[oó]n.*becas/i.test(lastMessage) && lastIsUser)
		) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Para ver información sobre las becas puedes dirigirte a la página de becas o dentro del centro de ayuda. En caso de requerir información extra contactate con el asesor de las becas.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (
			(/d[oó]nde.*encuentro.*informaci[oó]n.*movilidad estudiantil/i.test(lastMessage) && lastIsUser) ||
			(/d[oó]nde.*hay.*informaci[oó]n.*movilidad estudiantil/i.test(lastMessage) && lastIsUser) ||
			(/d[oó]nde.*ver.*informaci[oó]n.*movilidad estudiantil/i.test(lastMessage) && lastIsUser)
		) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Para ver información sobre las becas puedes dirigirte a la página de becas o dentro del centro de ayuda. En caso de requerir información extra contactate con el asesor de las becas.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (/d[oó]nde.*est[aá]n.*las.*becas/i.test(lastMessage) && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Las becas las puedes encontrar en el apartado de Becas dentro de la página, dirigite a la barra de navegación y busca el apartado "Becas", da clic y ahí encontrarás todas la información.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (/d[oó]nde.*ver.*resultados.*becas/i.test(lastMessage) && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Los resultados de las becas puedes consultarlo con alguno de los asesores de las becas, para poder contactar con ellos dentro del centro de ayuda, busca el apartado que tiene como título "Becas" y da clic en la subsección que tiene como nombre "Asesores en el área de becas".
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (
			(/d[oó]nde.*est[aá]n.*las.*ofertas laborales/i.test(lastMessage) && lastIsUser) ||
			(/d[oó]nde.*est[aá]n.*las.*ofertas de trabajo/i.test(lastMessage) && lastIsUser)
		) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Las ofertas laborales las puedes encontrar en el apartado de bolsa de trabajo dentro de la página, dirigite a la barra de navegación busca el apartado "Bolsa de trabajo", da clic y ahí encontrarás todas la información.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (/dd[oó]nde.*est[aá].*el.*bolsa de trabajo/i.test(lastMessage) && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `La bolsa de trabajo la puedes encontrar en el apartado de bolsa de trabajo dentro de la página, dirigite a la barra de navegación busca el apartado "Bolsa de trabajo", da clic y ahí encontrarás todas la información.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (/d[oó]nde.*est[aá].*el.*calendario/i.test(lastMessage) && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `El calendario lo puedes encontrar en el apartado de calendario dentro de la página, dirigite a la barra de navegación busca el apartado "Calendario", da clic y ahí encontrarás toda la información. Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (/d[oó]nde.*est[aá].*el.*centro de ayuda/i.test(lastMessage) && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Justo ahora te encuentras en el centro de ayuda.
					Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (lastMessage.includes('nada') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `No hay problema si no tienes ninuguna duda o pregunta. En caso de que en algún momento tengas una no dudes en hacerla.`,
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

		if (lastMessage.includes('bolsa de trabajo') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Dentro de la bolsa de trabajo podrás encontrar ofertas de empleo que algunas de las empresas asociadas a la UTNG publican. Echa un vistazo y ve si tu perfil califica a las vacantes. Si tienes alguna otra duda, no dudes en hacerla.`,
					isUser: false
				}
			])
			return
		}

		if (lastMessage.includes('becas') && lastIsUser) {
			setMessages(prevMessages => [
				...prevMessages,
				{
					text: `Dentro de las becas pordrás ver las que estan disponibles dentro de la UTNG, revisa bien las fechas para que no te pierdas de ninuguna. Si tienes alguna otra duda, no dudes en hacerla.`,
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
