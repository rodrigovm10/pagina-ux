import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import centroAyuda from '../assets/centro-ayuda.jpg'

export function CardCentroAyuda({ handleClickOpen }) {
	return (
		<Flex
			position='relative'
			alignItems='flex-end'
			gap='2rem'>
			<Stack
				// bg={{
				//   base: 'rgba(255, 255, 255, 0)',
				//   sm: 'rgba(255, 255, 255, 0.75)',
				//   md: 'rgba(255, 255, 255, 0.75)',
				//   lg: 'rgba(255, 255, 255, 0.75)'
				// }}
				// h={{ base: '100%', md: '100%', lg: '100%' }}
				position='absolute'
				top='0'
				p='3rem'
				w='24rem'
				left='70'
				zIndex='1'
				justifyContent='center'
				alignItems='center'>
				<Text
					fontSize='1.2rem'
					fontWeight='500'>
					Te damos la bienvenida al centro de ayuda de la UTNG
				</Text>
				<Heading
					opacity={{ base: 0, sm: 1, md: 1, lg: 1, xl: 1 }}
					as='h2'
					size='2xl'
					lineHeight='60px'
					wordBreak='break-word'
					color='#3e3e3'>
					¿Qué podemos hacer por ti?
				</Heading>
				<Button
					opacity={{ base: 0, sm: 1, md: 1, lg: 1, xl: 1 }}
					onClick={handleClickOpen}
					// w='10rem'
					p='1rem 5rem'
					textAlign='center'
					bg='#00259A'
					_hover={{
						color: 'rgba(255, 255, 255,1)',
						backgroundColor: '#00259A',
						boxShadow: '0 4px 16px #001F7E',
						transition: 'all 0.2s ease'
					}}
					color='#fff'>
					Iniciar Conversación
				</Button>
			</Stack>
			<Image
				border='1px solid #000'
				backdropFilter='blur(100px)'
				src={centroAyuda}
				alt='centroAyuda'
				w='100%'
				h={{ sm: '10vh', md: '50vh', lg: '75vh' }}
				objectFit='cover'
				position='relative'
				zIndex='0'
			/>
		</Flex>
	)
}
