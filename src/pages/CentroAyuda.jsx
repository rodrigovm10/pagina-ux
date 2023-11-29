import { Box, Flex } from '@chakra-ui/react'
import { CardCentroAyuda } from '../components/CardCentroAyuda'
import { Chat } from '../components/Chat'
import { useOpenChat } from '../hooks/useOpenChat'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'
import { CardInfoCentroAyuda } from '../components/CardInfoCentroAyuda.jsx'
import { MenuCircular } from '../components/MenuCirular.jsx'
import { SpeechToText } from '../components/SpeechToText.jsx'

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
					<MenuCircular />
					<SpeechToText />
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
