import { Grid } from '@chakra-ui/react'
import { CardBecasCentroAyuda } from './CardBecasCentroAyuda'
import { CardTitulacionCentroAyuda } from './CardTitulacionCentroAyuda'

export function CardInfoCentroAyuda() {
	return (
		<Grid
			gridTemplateColumns='repeat(2, 1fr)'
			gap='2rem'>
			<CardBecasCentroAyuda />
			<CardTitulacionCentroAyuda />
		</Grid>
	)
}
