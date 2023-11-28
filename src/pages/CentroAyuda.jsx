import { Box, Flex } from '@chakra-ui/react'
import { CardCentroAyuda } from '../components/CardCentroAyuda'
import { Chat } from '../components/Chat'
import { useOpenChat } from '../hooks/useOpenChat'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'
import { CardInfoCentroAyuda } from '../components/CardInfoCentroAyuda.jsx'
import { TextToSpeech } from '../components/TextToSpeech.jsx'

export function CentroAyuda() {
	const { isOpen, handleClickOpen } = useOpenChat()
	return (
		<>
			<Header />
			<CardCentroAyuda handleClickOpen={handleClickOpen} />
			<Box bg='#f3f7fa'>
				<Flex
					w='90%'
					m='0 auto'
					alignItems='center'
					justifyContent='center'
					flexDir='column'
					gap='2rem'
					mb='2rem'>
					<CardInfoCentroAyuda />
					<TextToSpeech
						text={`
					
					Primer apartado 'Uso del chat'. Descripción del apartado: 
					Utiliza el chat para resolver alguna de tus dudas que no hayas encontrado. Nuestro equipo de asesores te brindará la información que requieras.
					Segundo apartado '¿Comó usar el chat?'. Descripción del apartado:
						1.- Dirigite hasta arriba y da clic en el botón 'Iniciar conversación'
						2.- En la parte de abajo a la derecha se abrira el chat.
						3.1.- Selecciona una opción de la cual tengas dudas.
						3.2.- En caso de seleccionar la opción 'Otros', responder a la respuesta proporcionada por el chat.
						4.- Proporciona un correo y serás respondido para llevar un seguimiento de tu duda.
					`}
					/>
					<Box
						position={'fixed'}
						bottom={0}
						right={{ base: 45, md: 0, lg: 0 }}
						zIndex={1}
						alignSelf={{ base: 'center', lg: 'flex-end' }}>
						<Chat
							isOpen={isOpen}
							handleClickOpen={handleClickOpen}
						/>
					</Box>
				</Flex>
			</Box>

			<Footer />
		</>
	)
}
