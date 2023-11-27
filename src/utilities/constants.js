export const NAV_HEADER = [
	{ to: '/', navName: 'Inicio' },
	{ to: '/becas', navName: 'Becas' },
	{ to: '/estadias', navName: 'Estadías' },
	{ to: '/calendario', navName: 'Calendario' },
	{ to: '/reinscripciones', navName: 'Reinscripciones' },
	{ to: '/bolsa-de-trabajo', navName: 'Bolsa de trabajo' },
	{ to: '/movilidad-estudiantil', navName: 'Movilidad estudiantil' }
]

export const NAV_FOOTER = [
	{ to: '/', navName: 'Inicio' },
	{ to: '/centro-de-ayuda', navName: 'Centro de ayuda' },
	{ to: '/terminos-y-condiciones', navName: 'Términos y condiciones' },
	{ to: '/aviso-de-privacidad', navName: 'Aviso de privacidad' }
]

export const CARDS_CALENDAR = [
	{
		id: 1,
		title: 'Feria de Empleo y Prácticas Profesionales',
		date: ['Fecha: ', '1 noviembre'],
		description: ['Actividades: ', ' Stands de empresas, entrevistas en el lugar, talleres de desarrollo profesional.']
	},
	{
		id: 2,
		title: 'Festival Cultural de Invierno',
		date: ['Fecha: ', '2 noviembre'],
		description: [
			'Actividades: ',
			' Puestos de comida internacional, actuaciones musicales y danzas, exposiciones de arte.'
		]
	},
	{
		id: 3,
		title: 'Seminario de Estrés y Manejo del Tiempo',
		date: ['Fecha: ', '3 noviembre'],
		description: ['Actividades: ', 'Sesiones de asesoramiento, técnicas de relajación, planificación del tiempo']
	},
	{
		id: 4,
		title: 'Torneo Deportivo Interfacultades',
		date: ['Fecha: ', '6 noviembre'],
		description: [
			'Actividades: ',
			'Competencias en diferentes deportes, ceremonia de premiación, actividades recreativas.'
		]
	},
	{
		id: 5,
		title: 'Exposición de Proyectos de Fin de Semestre',
		date: ['Fecha: ', '7 noviembre'],
		description: [
			'Actividades: ',
			'Presentaciones de proyectos, demostraciones prácticas, sesiones de retroalimentación.'
		]
	},
	{
		id: 6,
		title: 'Taller de Escritura Creativa',
		date: ['Fecha: ', '8 noviembre'],
		description: [
			'Actividades: ',
			'Puestos de comida internacional, actuaciones musicales y danzas, exposiciones de arte.'
		]
	},
	{
		id: 7,
		title: 'Maratón de Código y Hackathon',
		date: ['Fecha: ', '9 noviembre'],
		description: [
			'Actividades: ',
			'Desarrollo de proyectos de software, talleres de programación, premiación a las mejores soluciones.'
		]
	},
	{
		id: 8,
		title: 'Conferencia Sobre React por la Empresa Optimen',
		date: ['Fecha: ', '12 diciembre'],
		description: ['Actividades: ', 'Presentaciones técnicas, sesión de preguntas y respuestas, y un taller práctico.']
	}
]

export const TEXTS_CARD = [
	{
		id: 1,
		title: 'Becas',
		cards: [
			{
				id: 1,
				title: 'Becas con las que contamos',
				description: 'Apoyo alimenticio Apoyo deportivo y cultural, apoyo por necesidad apremiante'
			},
			{
				id: 2,
				title: 'Asesores en el área de becas',
				description: 'Diana Berenice Cuellar González - diana.cuellar@utng.com.mx - 18 2 55 00 ext. 1254'
			}
		]
	},
	{
		id: 2,
		title: 'Servicios escolares',
		cards: [
			{
				id: 1,
				title: '¿Dónde se encuentra?',
				description: 'Servicios escolares lo podrás encontrar en el edificio V, segunda caja.'
			},
			{
				id: 2,
				title: 'Asesores en el área de servicios escolares',
				description: `
          Diana Berenice Cuellar González
          diana.cuellar@utng.com.mx
          18 2 55 00 ext. 1254
          Lunes - viernes de 8:00 a 16:00`
			}
		]
	},
	{
		id: 3,
		title: 'SIGA',
		cards: [
			{
				id: 1,
				title: 'Recuperar contraseña',
				description:
					'Para recuperar la contraseña es necesario seguir los siguientes pasos:\n' +
					'1.- Dirigirse al SIGA\n' +
					'2.- Dar clic en entrar\n' +
					'3.- Dar clic en ¿Olvidaste tu contraseña?\n' +
					'4.- Escribir el correo con el cual estás registrado en el SIGA\n' +
					'5.- Una vez ingresado el correo, dar clic en recuperar\n' +
					'6.- Ingresar a su correo y volver a iniciar sesión'
			},
			{
				id: 2,
				title: 'Asesor en el área de servicios escolares?',
				description: 'Diana Berenice Cuellar González - diana.cuellar@utng.com.mx - 18 2 55 00 ext. 1254'
			}
		]
	}
]
