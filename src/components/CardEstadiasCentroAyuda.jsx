import { Heading, Text, Card, CardHeader, CardBody } from '@chakra-ui/react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CardEstadiasCentroAyuda() {
	const [selectedText, setSelectedText] = useState(null)

	const handleShowInformation = text => {
		setSelectedText(selectedText === text ? null : text)
	}
	return (
		<Card
			w='23rem'
			mb='3rem'
			transition='transform 0.3s ease-out, box-shadow 0.3s ease-in-out'
			_hover={{ transform: 'translateY(-10px)', boxShadow: '5px 5px #00259A' }}
			boxShadow='2xl'
		>
			<CardHeader
				px='0'
				pb='0'
			>
				<Heading
					pb='1rem'
					size='md'
					textAlign='center'
					borderBottom='1px solid #d3dce3'
				>
					Estadías
				</Heading>
			</CardHeader>
			<CardBody px='0'>
				<div>
					<Text
						onClick={() => handleShowInformation('Periodo')}
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
						}}
					>
						Periodo de estadías
						<AnimatePresence>
							{selectedText === 'Periodo' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<Text
										fontSize='1rem'
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'
										pb='1rem'
									>
										<span style={{ fontWeight: 'bold' }}>Cuatrimestre Enero - Abril:</span> Estadías de ingeniería
										<br />
										<span style={{ fontWeight: 'bold' }}>Cuatriestre Mayo - Agosto:</span> Estadías de TSU - Estadías de
										ingeniería
										<br />
									</Text>
								</motion.div>
							)}
						</AnimatePresence>
					</Text>
				</div>
				<div>
					<Text
						onClick={() => handleShowInformation('Tiempo')}
						cursor='pointer'
						mb={'auto'}
						mt={'1rem'}
						px='1rem'
						pb='1rem'
						color={selectedText === '' ? '#007BFF' : '#00259A'}
						fontWeight='500'
						fontSize='1.1rem'
						borderBottom={'1px solid #d3dce3'}
						_hover={{
							color: '#007BFF'
						}}
					>
						Duración de estadías
						<AnimatePresence>
							{selectedText === 'Tiempo' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<Text
										fontSize='1rem'
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'
										pb='1rem'
									>
										Trece a quince semanas, con un mínimo de 480 horas y un máximo de 525 horas.
									</Text>
								</motion.div>
							)}
						</AnimatePresence>
					</Text>
				</div>
				<div>
					<Text
						onClick={() => handleShowInformation('Registro')}
						cursor='pointer'
						mb={'auto'}
						mt={'1rem'}
						px='1rem'
						pb='1rem'
						color={selectedText === '' ? '#007BFF' : '#00259A'}
						fontWeight='500'
						fontSize='1.1rem'
						borderBottom={'1px solid #d3dce3'}
						_hover={{
							color: '#007BFF'
						}}
					>
						Registro de empresa buscada por el estudiante
						<AnimatePresence>
							{selectedText === 'Registro' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<Text
										fontSize='1rem'
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'
										pb='1rem'
									>
										En caso de traer una empresa por tu cuenta debe estar validada por tu coordinador y llevar los
										siguientes datos al área de practicas y estadías ubicada en el edificio C planta baja. <br />
										<span style={{ fontWeight: 'bold' }}>1.- </span> Nombre de la empresa <br />
										<span style={{ fontWeight: 'bold' }}>2.- </span> Dirección y ciudad de la empresa <br />
										<span style={{ fontWeight: 'bold' }}>3.- </span> Nombre del contacto
										<br />
										<span style={{ fontWeight: 'bold' }}>4.- </span> Cargo del contacto
										<br />
										<span style={{ fontWeight: 'bold' }}>5.- </span> Teléfono y e-mail del contacto
										<br />
									</Text>
								</motion.div>
							)}
						</AnimatePresence>
					</Text>
				</div>
				<div>
					<Text
						onClick={() => handleShowInformation('Asesor')}
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
						}}
					>
						Asesor en el área de estadías
						<AnimatePresence>
							{selectedText === 'Asesor' && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<Text
										fontSize='1rem'
										textAlign='justify'
										fontWeight='400'
										color='rgba(0, 0, 0, 0.74)'
									>
										<span style={{ fontWeight: 'bold' }}>Nombre: </span>Jorge Rogelio García.
										<br />
										<span style={{ fontWeight: 'bold' }}>Correo: </span> jorge.garcia@utng.edu.mx
										<br />
										<span style={{ fontWeight: 'bold' }}>Número de télefono: </span>
										Tel:18 2 55 00 ext. 1355
										<br />
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
