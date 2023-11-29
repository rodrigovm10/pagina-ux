import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function useRedirection() {
	const navigate = useNavigate()
	const redirectWithVoice = text => {
		const keywordToRoute = {
			becas: '/becas',
			'bolsa de trabajo': '/bolsa-de-trabajo',
			'centro de ayuda': '/centro-de-ayuda',
			calendario: '/calendario',
			'pagina principal': '/'
		}

		let commandRecognized = false

		for (const [keyword, route] of Object.entries(keywordToRoute)) {
			if (text.includes(keyword)) {
				navigate(route)
				commandRecognized = true
				break
			}
		}

		if (!commandRecognized) {
			console.log('mal')
			toast.error('¡Comando no reconocido!', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light'
			})
		}
	}

	return { redirectWithVoice }
}
