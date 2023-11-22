import { useState } from 'react'

export function useOpenChat() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, handleClickOpen }
}
