import { useNavigate } from 'react-router-dom'

export function useRedirection() {
	const navigate = useNavigate()
	const redirectWithVoice = text => {
		const keywordToRoute = {
			becas: '/becas',
			'bolsa de trabajo': '/bolsa-de-trabajo',
			'centro de ayuda': '/centro-de-ayuda',
			calendario: '/calendario',
			'pagina principal': '/',
			'página principal': '/',
			incio: '/',
			ínicio: '/'
		}

		console.log(text)

		for (const [keyword, route] of Object.entries(keywordToRoute)) {
			if (text.includes(keyword)) {
				navigate(route)
				break
			}
		}
	}

	return { redirectWithVoice }
}
