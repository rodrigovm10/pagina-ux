import { Image, Flex, Heading, Text } from '@chakra-ui/react'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'
import imgPrincipal from '../assets/inicioUni.jpg';
import Autocomplete from '../components/Autocomplete.jsx'
import { OPTIONS_AUTOCOMPLETE_PAGINA_P } from '../utilities/constants.js'
import '../styles/card.css'
import { MenuCircular } from '../components/MenuCirular.jsx'
import { SpeechToText } from '../components/SpeechToText.jsx'
import { CardPPrincipal } from '../components/CardPPrincipal.jsx'
import Mapa from '../components/Mapas.js/Mapa.jsx'

export function PaginaPrincipal() {
	const handleSelect = selectedOption => {
		console.log(`Selected: ${selectedOption}`)
	}
	return (
		<>
			<Header />
			<Flex
				maxW='80vw'
				m='0 auto'
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				mt='2rem'
				gap={{ base: '1.3rem', lg: '2rem' }}>
				<Heading
					as='h1'
					size={{ base: 'md', lg: 'xl' }}
					textAlign='center'>
					¡Bienvenidos a la Universidad Tecnológica del Norte de Guanajuato!
				</Heading>
				<SpeechToText />
				<MenuCircular />
				<form>
					<Autocomplete
						options={OPTIONS_AUTOCOMPLETE_PAGINA_P}
						onSelect={handleSelect}
					/>
				</form>

				<Image
					src={imgPrincipal}
					objectFit='contain'
					maxW='50vw'
					w='90rem'
				/>

				<Text
					w='68vw'
					fontSize='1.1rem'
					textAlign='justify'>
					La educación va más allá de la memorización; es un camino para inspirar, innovar y transformar. Cada libro que
					abres te lleva a un nuevo mundo, y cada práctica que realizas te ayuda a moldear el tuyo. Estamos emocionados
					de que te unas a nuestra comunidad y compartas nuestro compromiso con la excelencia académica y los valores
					fundamentales que nos guían.
				</Text>
				<Flex
					flexDir={{ base: 'column', lg: 'row' }}
					gap={{ base: '1rem', lg: '2rem' }}
					alignItems={{ base: 'center', lg: 'stretch' }}>
					<CardPPrincipal
						title={'Misión'}
						wLg='15rem'
						wMd='10rem'
						wBase='15rem'
						text='Somos una institución de Educación Superior Tecnológica dedicada a la formación integral de profesionales
							líderes en los niveles de Técnico Superior Universitario y Licenciatura, ofreciendo programas educativos
							de excelencia.'
					/>
					<CardPPrincipal
						title={'Visión'}
						wLg='30rem'
						wMd='10rem'
						wBase='15rem'
						text='Para el año 2026, la Universidad Tecnológica del Norte de Guanajuato se destacará a nivel nacional e
							internacional por la formación de egresados altamente competitivos que se integran exitosamente al ámbito
							laboral, destacando por su sólida formación humana e integral. Nos enfocamos en promover la igualdad y la
							no discriminación, el desarrollo sostenible y la preservación del medio ambiente, así como el respeto de
							los derechos humanos.'
					/>
					<CardPPrincipal
						title={'Valores'}
						wLg='15rem'
						wMd='10rem'
						wBase='15rem'
						text='Valores'
						text2='Trabajo'
						text3='Comunicación'
						text4='Honestidad'
						text5='Respeto'
					/>
				</Flex>
				<Mapa />
			</Flex>
			<Footer />
		</>
	)
}
