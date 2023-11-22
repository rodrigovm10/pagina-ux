import { useEffect, useState } from 'react'

export function useChat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(['¿En qué puedo ayudarte?'])

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage === 'No puedo responder esa pregunta. Favor de contactar con Tal, para aclaraciones') return
    if (lastMessage === '¿Que puedo encontrar en el calendario?') {
      setMessages(prevMessages => [...prevMessages, 'Eventos y noticias del mes actual'])
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

  return { messages, message, handleChange, handleSend, sendMessage }
}
