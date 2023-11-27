import { Grid } from '@chakra-ui/react'
import { CardBecasCentroAyuda } from './CardBecasCentroAyuda'
import { CardTitulacionCentroAyuda } from './CardTitulacionCentroAyuda'
import { CardEstadiasCentroAyuda } from './CardEstadiasCentroAyuda'
import { CardMovilidadEstudiantil } from './CardMovilidadEstudiantil'
import { CardInfoChat } from './CardInfoChat'

export function CardInfoCentroAyuda() {
	return (
		<Grid
			mt='5rem'
			gridTemplateColumns='repeat(2, 1fr)'
			gap='5rem'>
			<CardBecasCentroAyuda />
			<CardTitulacionCentroAyuda />
			<CardEstadiasCentroAyuda />
			<CardMovilidadEstudiantil />
			<CardInfoChat />
		</Grid>
	)
}
