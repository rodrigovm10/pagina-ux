import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CentroAyuda } from './pages/CentroAyuda'
import { Calendario } from '../src/components/Calendario.jsx'
import { Reinscripciones } from '../src/components/Reinscripsiones.jsx'

import { PaginaPrincipal } from './pages/PaginaPrincipal.jsx'
import BolsaTrabajo from './pages/BolsaTrabajo.jsx'
import UserWayWidget from './UserWayWidget.jsx'
import Becass from './components/Becas/Becas.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <PaginaPrincipal />
	},
	{
		path: '/centro-de-ayuda',
		element: <CentroAyuda />
	},
	{
		path: '/calendario',
		element: <Calendario />
	},
	{
		path: '/reinscripciones',
		element: <Reinscripciones />
	},
	{
		path: '/bolsa-de-trabajo',
		element: <BolsaTrabajo />
	},
	{
		path: '/becas',
		element: <Becass />
	},
	{
		path: '/estadias',
		element: <p>Pagina no existente</p>
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider>
		<UserWayWidget />
		<RouterProvider router={router} />
	</ChakraProvider>
)
