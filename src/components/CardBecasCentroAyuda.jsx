import { Heading, Text, Card, CardHeader, CardBody } from '@chakra-ui/react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CardBecasCentroAyuda() {
	const [selectedText, setSelectedText] = useState(null)

	const handleShowInformation = text => {
		setSelectedText(selectedText === text ? null : text)
	}
	return (
		<Card w='25rem'>
			<CardHeader
				px='0'
				pb='0'>
				<Heading
					pb='1rem'
					size='md'
					textAlign='center'
					borderBottom='1px solid #d3dce3'>
					Becas
				</Heading>
			</CardHeader>
			<CardBody px='0'>
				<div>
					<Text
						onClick={() => handleShowInformation('Becas con las que contamos')}
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
						Becas con las que contamos
						<AnimatePresence>
							{selectedText === 'Becas con las que contamos' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}>
									<Text
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'
										pb='1rem'>
										Apoyo alimenticio Apoyo deportivo y cultural, apoyo por necesidad apremiante
									</Text>
								</motion.div>
							)}
						</AnimatePresence>
					</Text>
				</div>
				<div>
					<Text
						onClick={() => handleShowInformation('Asesores en el área de becas')}
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
						Asesores en el área de becas
						<AnimatePresence>
							{selectedText === 'Asesores en el área de becas' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}>
									<Text
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'>
										<span style={{ fontWeight: 'bold' }}>Nombre: </span>Diana Berenice Cuellar González <br />
										<span style={{ fontWeight: 'bold' }}>Correo: </span>diana.cuellar@utng.com.mx <br />
										<span style={{ fontWeight: 'bold' }}>Número de télefono: </span>18 2 55 00 ext. 1254 <br />
										<span style={{ fontWeight: 'bold' }}>Horario de atención: </span> Lunes a viernes de 8:00 a 16:00
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
