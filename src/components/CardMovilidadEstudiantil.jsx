import { Heading, Text, Card, CardHeader, CardBody } from '@chakra-ui/react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CardMovilidadEstudiantil() {
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
					Movilidad estudiantil
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
						// borderBottom={'1px solid #d3dce3'}
						_hover={{
							color: '#007BFF'
						}}>
						¿Qué necesito para postularme a la beca?
						<AnimatePresence>
							{selectedText === 'Periodo' && (
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
										Para postularse a la beca el alumno debe mantener los siguientes compromisos: <br />
										<span style={{ fontWeight: 'bold' }}>1.- </span> Ser un alumno regular y vigente en las carreras de
										Técnico Superior Universitario
										<br />
										<span style={{ fontWeight: 'bold' }}>2.- </span> Contar y mantener un promedio de 9
										<br />
										<span style={{ fontWeight: 'bold' }}>3.- </span> Cursar y aprobar los niveles del curso de fránces
										que oferta la UTNG
										<br />
										<span style={{ fontWeight: 'bold' }}>4.- </span> Acreditar el examen de francés requerido por la
										Coordinación de Universidades Tecnológicas.
										<br />
										<span style={{ fontWeight: 'bold' }}>5.- </span> Acreditar la entrevista final con el comité
										franco-mexicano en la última etapa del proceso de selección.
										<br />
										<span style={{ fontWeight: 'bold' }}>6.- </span> Presentar la documentación requerida paara los
										trámites correspondientes a su estancia en el extranjero y los que solicite la CGUTyP.
										<br />
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
