import { Heading, Text, Card, CardHeader, CardBody } from '@chakra-ui/react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CardInfoChat() {
	const [selectedText, setSelectedText] = useState(null)

	const handleShowInformation = text => {
		setSelectedText(selectedText === text ? null : text)
	}
	return (
		<Card w='23rem'>
			<CardHeader
				px='0'
				pb='0'>
				<Heading
					pb='1rem'
					size='md'
					textAlign='center'
					borderBottom='1px solid #d3dce3'>
					Chat de la UTNG
				</Heading>
			</CardHeader>
			<CardBody px='0'>
				<div>
					<Text
						onClick={() => handleShowInformation('Descripcion')}
						cursor='pointer'
						mb={'auto'}
						mt={'auto'}
						px='1rem'
						pb='1rem'
						color={selectedText === '' ? '#007BFF' : '#00259A'}
						fontWeight='500'
						fontSize='1.1rem'
						borderBottom={'1px solid #d3dce3'}
						_hover={{
							color: '#007BFF'
						}}>
						Uso del chat
						<AnimatePresence>
							{selectedText === 'Descripcion' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}>
									<Text
										fontSize='1rem'
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'
										pb='1rem'>
										Utiliza el chat para resolver alguna de tus dudas que no hayas encontrado. Nuestro equipo de
										asesores te brindará la información que requieras.
									</Text>
								</motion.div>
							)}
						</AnimatePresence>
					</Text>
				</div>
				<div>
					<Text
						onClick={() => handleShowInformation('Como')}
						cursor='pointer'
						mb={'auto'}
						mt={'1rem'}
						px='1rem'
						pb='1rem'
						color={selectedText === '' ? '#007BFF' : '#00259A'}
						fontWeight='500'
						fontSize='1.1rem'
						_hover={{
							color: '#007BFF'
						}}>
						¿Comó usar el chat?
						<AnimatePresence>
							{selectedText === 'Como' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}>
									<Text
										fontSize='1rem'
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'>
										<span style={{ fontWeight: 'bold' }}>1.- </span>
										{"Dirigite hasta arriba y da clic en el botón 'Iniciar conversación'"}
										<br />
										<span style={{ fontWeight: 'bold' }}>2.- </span>En la parte de abajo a la derecha se abrira el chat.
										<br />
										<span style={{ fontWeight: 'bold' }}>3.1.- </span>Selecciona una opción de la cual tengas dudas.
										<br />
										<span style={{ fontWeight: 'bold' }}>3.2.- </span>
										{"En caso de seleccionar la opción 'Otros', responder a la respuesta proporcionada por el chat."}
										<br />
										<span style={{ fontWeight: 'bold' }}>4.- </span>Proporciona un correo y serás respondido para llevar
										un seguimiento de tu duda.
									</Text>
								</motion.div>
							)}
						</AnimatePresence>
					</Text>
				</div>
			</CardBody>
		</Card>
	)
}
