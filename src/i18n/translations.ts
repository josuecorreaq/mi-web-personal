import type { Locale } from './config';

const translations = {
	es: {
		meta: {
			title: 'Josué Correa | Desarrollador Backend en Piura, Perú',
			description:
				'Josué Correa Quispe, desarrollador backend en Piura, Perú. Convierto procesos manuales en sistemas claros con Laravel, PHP y MySQL. Presencial o remoto.',
		},
		nav: {
			services: 'Servicios',
			projects: 'Proyectos',
			approach: 'Enfoque',
			trajectory: 'Trayectoria',
			contact: 'Contacto',
			cv: 'CV',
			cvLabel: 'Ver CV',
			menu: 'Menú',
			mainLabel: 'Navegación principal',
			languageLabel: 'Ver esta página en inglés',
			homeLabel: 'Josué Correa, inicio',
		},
		hero: {
			lead: 'Soy Josué Correa, desarrollador backend.',
			statement: 'Convierto procesos manuales en sistemas claros que crecen',
			statementMark: 'sin romperse',
			contactCta: 'Contáctame',
			projectsCta: 'Ver proyectos',
			profileAlt: 'Retrato de Josué Correa',
			facts: [
				{ label: 'Ubicación', value: 'Piura, Perú', icon: 'location' },
				{ label: 'Disponibilidad', value: 'Presencial o remoto', icon: 'circle-check' },
			],
		},
		approach: {
			titleLead: 'El problema casi nunca es la tecnología.',
			titleRest: 'Es que nadie sabe cuál es el dato bueno.',
			changesLabel: 'Qué cambia en el día a día',
			changes: [
				{
					from: 'De datos repartidos entre Excel, correo y mensajería',
					to: 'a un solo sistema donde cada registro tiene fecha y responsable.',
				},
				{
					from: 'De una versión de la información por área',
					to: 'a una única fuente de datos, con permisos por rol.',
				},
				{
					from: 'De preguntar quién cambió qué',
					to: 'a un historial consultable de cada operación.',
				},
			],
			principlesLabel: 'Cómo lo construyo',
			principles: [
				{
					title: 'Separación por dominios',
					description: 'Cada área del negocio en su módulo, con fronteras claras.',
				},
				{
					title: 'Acceso controlado en el servidor',
					description: 'Permisos validados en el servidor, nunca en la interfaz.',
				},
				{
					title: 'Cambios verificados',
					description: 'Rutas cubiertas por pruebas: cambiar no rompe lo que ya funciona.',
				},
			],
		},
		experience: {
			title: 'Trayectoria',
			copy: 'De un sistema en producción a una arquitectura que crece por fases.',
			currentLabel: 'En curso',
			items: [
				{
					year: '2026',
					range: 'De enero a hoy',
					current: true,
					role: 'Desarrollador de software',
					organization: 'Proyecto independiente',
					project: 'Plataforma Integral de Gestión Crediticia',
					highlights: [
						'Arquitectura modular de nueve dominios.',
						'Control de accesos por usuario, rol y sede.',
						'Migración por fases sobre tests de contrato.',
					],
				},
				{
					year: '2025',
					range: 'De abril a diciembre',
					current: false,
					role: 'Desarrollador web',
					organization: 'Entidad del sector financiero',
					project: 'Sistema de Gestión de Desembolsos',
					highlights: [
						'APIs REST con Laravel y frontend en React.',
						'Operación centralizada y trazable, sin archivos locales.',
						'Soporte de incidencias con el sistema en producción.',
					],
				},
			],
		},
		cv: {
			modalTitle: 'Curriculum vitae',
			close: 'Cerrar',
			loading: 'Cargando el CV…',
			loadError: 'No se pudo cargar el CV. Revisa tu conexión y vuelve a abrirlo.',
			name: 'Josué Andrés Correa Quispe',
			role: 'Ingeniero de Sistemas · Desarrollador Backend',
			location: 'Piura, Perú',
			email: 'contacto@josuecorreaq.com',
			linkedin: 'linkedin.com/in/josuecorreaqu',
			github: 'github.com/josuecorreaq',
			summary:
				'Ingeniero de Sistemas y desarrollador web con experiencia en Laravel, React y MySQL. Desarrollo APIs REST y sistemas orientados a automatizar procesos, garantizar la consistencia de datos y facilitar el mantenimiento y crecimiento de las aplicaciones.',
			sections: {
				experience: 'Experiencia',
				education: 'Educación',
				skills: 'Habilidades técnicas',
				languages: 'Idiomas',
				competencies: 'Competencias',
			},
			experience: [
				{
					organization: 'Proyecto independiente',
					location: 'Piura, Perú',
					role: 'Desarrollador de software',
					period: 'Enero de 2026 a la actualidad',
					bullets: [
						'Desarrollo una plataforma integral de gestión crediticia con Laravel, React y MySQL, cubriendo admisiones, evaluaciones, créditos y seguimiento de cartera.',
						'Diseñé la arquitectura como monolito modular: nueve dominios con frontera pública propia y dependencias en una sola dirección, migrando cada módulo a las capas Http, Application, Domain e Infrastructure.',
						'Implementé autorización por usuario, rol y sede, con evaluación diferenciada según el tipo de cliente.',
						'Sostengo la migración progresiva con un test de contrato que congela las rutas públicas de la API, de modo que reestructurar un módulo no rompe al frontend.',
					],
				},
				{
					organization: 'Entidad del sector financiero',
					location: 'Piura, Perú',
					role: 'Desarrollador web',
					period: 'Abril a diciembre de 2025',
					bullets: [
						'Implementé un sistema web para la gestión de préstamos, pagos y reportería financiera, migrando procesos operativos manuales hacia una plataforma centralizada y trazable.',
						'Digitalicé el flujo de desembolso, validación de pagos y seguimiento de cuotas, eliminando la dependencia de archivos locales y mejorando el acceso a la información para caja, asesores, operadores y administradores.',
						'Reduje en 50 % los pasos manuales del proceso de validación de pagos, reemplazando notificaciones internas y actualizaciones manuales por registros centralizados en el sistema.',
						'Desarrollé APIs REST con Laravel y componentes reutilizables en React para la gestión de préstamos, pagos, cuotas y reportes financieros.',
						'Estructuré módulos backend y frontend aplicando separación de responsabilidades, clean code y buenas prácticas, mejorando la mantenibilidad y escalabilidad del sistema.',
						'Resolví incidencias y requerimientos de lógica de negocio, priorizando seguridad, consistencia de datos y continuidad operativa.',
					],
				},
			],
			education: [
				{
					institution: 'Universidad César Vallejo',
					location: 'Piura, Perú',
					degree: 'Título profesional de Ingeniero de Sistemas',
					period: 'Mayo de 2026',
				},
				{
					institution: 'Universidad César Vallejo',
					location: 'Piura, Perú',
					degree: 'Bachiller en Ingeniería de Sistemas',
					period: 'Febrero de 2026',
				},
			],
			educationNote: 'Estudios realizados entre 2021 y 2025.',
			skills: [
				{ label: 'Lenguajes', value: 'PHP' },
				{ label: 'Frameworks y bibliotecas', value: 'Laravel, React, JavaScript, Tailwind CSS' },
				{ label: 'Bases de datos', value: 'MySQL' },
				{ label: 'Herramientas y tecnologías', value: 'Docker, Git' },
				{
					label: 'Prácticas de desarrollo',
					value: 'Clean code, separación de responsabilidades, reutilización de componentes, arquitectura mantenible',
				},
			],
			languages: [
				{ label: 'Español', value: 'Nativo' },
				{ label: 'Inglés', value: 'Intermedio' },
			],
			competencies: [
				'Trabajo en equipo',
				'Análisis y resolución de problemas',
				'Comunicación con stakeholders',
				'Adaptabilidad',
				'Mejora continua',
			],
		},
		projects: {
			title: 'Proyectos',
			copy: 'Dos sistemas en operación real. Uno en producción, otro en construcción.',
			labels: {
				architecture: 'Arquitectura',
				layers: 'capas',
				viewProject: 'Ver proyecto completo',
				inspectHint: 'Selecciona una capa para ver de qué depende.',
				dependsOn: 'Depende de',
				noDependencies: 'No depende de ninguna capa',
			},
			items: [
				{
					name: 'Sistema de Gestión de Desembolsos Financieros',
					year: '2025',
					client: 'Sector financiero',
					coreLayer: 2,
					objective: 'Centralizar el desembolso, la validación de pagos, las cuotas y los reportes financieros.',
					context: 'Operación financiera sostenida por archivos y validaciones manuales, con información dispersa entre distintos responsables.',
					solution: 'Sistema web que ordena el flujo operativo, centraliza la información y mejora la trazabilidad de pagos y desembolsos.',
					role: 'Desarrollador web',
					decision: 'Separación de responsabilidades entre API, reglas de negocio, interfaz y persistencia para reducir acoplamiento y facilitar mantenimiento.',
					metrics: [
						{ value: '−50 %', label: 'Pasos manuales en validación de pagos' },
						{ value: '147', label: 'Endpoints REST en producción' },
						{ value: '21', label: 'Suites de pruebas automatizadas' },
					],
					evidence: [
						'147 endpoints REST sobre sesión JWT: préstamos, pagos, cuotas, cartera, moras y reprogramación.',
						'21 suites de pruebas unitarias y de funcionalidad sobre las reglas críticas: autenticación, pagos, moras, cartera, reprogramación y calculadora.',
						'Reducción del 50 % en pasos manuales de validación de pagos, medida contra el proceso anterior.',
						'Reportes financieros generados desde los registros del sistema, no desde hojas de cálculo paralelas.',
					],
					architecture: {
						version: 'Producción',
						layers: [
							{
								name: 'HTTP / API',
								rule: 'Expone los 147 endpoints REST sobre sesión JWT y entrega cada petición a un caso de uso, sin decidir nada del negocio.',
								dependsOn: [1],
							},
							{
								name: 'Casos de uso',
								rule: 'Coordina cada operación de principio a fin (desembolso, pago, cuota, reprogramación) apoyándose en el dominio.',
								dependsOn: [2],
							},
							{
								name: 'Dominio de desembolsos',
								rule: 'Modela préstamos, pagos, cuotas, cartera y moras: el centro que el resto del sistema rodea.',
								dependsOn: [3],
							},
							{
								name: 'Reglas de negocio',
								rule: 'Reúne las validaciones de pagos que antes se hacían a mano, para que se apliquen siempre igual.',
								dependsOn: [4],
							},
							{
								name: 'Persistencia y auditoría',
								rule: 'Guarda cada operación con fecha y responsable; los reportes financieros salen de estos registros.',
								dependsOn: [],
							},
						],
					},
				},
				{
					name: 'Plataforma Integral de Gestión Crediticia',
					year: '2026',
					client: 'Proyecto independiente',
					coreLayer: 2,
					objective: 'Cubrir el ciclo crediticio completo, de la admisión y la evaluación hasta los créditos y el seguimiento de cartera, sobre una base modular que crece por fases.',
					context: 'Nueve dominios de negocio con reglas propias, evaluación diferenciada por tipo de cliente y accesos delimitados por usuario, rol y sede.',
					solution: 'Monolito modular: cada dominio es un módulo con frontera pública propia y dependencias en una sola dirección; las capas internas se completan módulo a módulo.',
					role: 'Desarrollo full stack',
					decision: 'La capa Domain no depende del framework, y ningún módulo entra a las tablas ni a las clases internas de otro: solo consume sus Actions y Queries públicas.',
					metrics: [
						{ value: '9', label: 'Dominios de negocio modulares' },
						{ value: '110', label: 'Tests que vigilan las fronteras entre módulos' },
						{ value: '3', label: 'Niveles de acceso: usuario, rol y sede' },
					],
					evidence: [
						'143 de las 152 rutas de la API congeladas en un test de contrato que fija método, URI, controlador y middleware de cada una.',
						'110 tests de arquitectura: ningún módulo importa la infraestructura de otro ni toca sus tablas con consultas crudas, y el grafo de dependencias entre módulos no tiene ciclos.',
						'Autorización en tres niveles: sesión JWT, permiso granular por acción y alcance por sede.',
						'Capa Domain sin HTTP, DB, Auth ni Eloquent; entre módulos solo hay Actions y Queries públicas.',
					],
					samples: [
						{
							label: 'Extracto del test de contrato',
							caption:
								'Cada fila fija método, URI, controlador y middleware. Si una migración los cambia, el test falla antes que el frontend.',
							rows: [
								'// RouteContractTest.php',
								'',
								"['GET', 'api/v1/proceso-negocio',",
								'  ProcesoNegocioController@index,',
								"  ['jwt', 'permiso:proceso.listar']],",
								'',
								"['PATCH', 'api/v1/proceso-negocio/{id}',",
								'  ProcesoNegocioController@update,',
								"  ['jwt', 'permiso:proceso.editar']],",
							],
						},
						{
							label: 'Extracto de los tests de arquitectura',
							caption:
								'Las fronteras entre módulos no dependen de la disciplina: 110 tests fallan si un módulo importa la infraestructura de otro o toca sus tablas.',
							rows: [
								'// ModuleDependencyBoundaryTest.php',
								'test_credit_flow_module_dependency_graph_is_acyclic',
								'test_cross_module_dependency_inventory_stays_fixed',
								'',
								'// ControllerHttpBoundaryTest.php',
								'test_http_layer_does_not_execute_unallowlisted_persistence_operations',
								'test_http_layer_does_not_use_the_service_locator',
								'',
								'// TableOwnershipBoundaryTest.php',
								'test_ninguna_consulta_cruda_toca_una_tabla_de_otro_owner',
								'test_la_lista_de_excepciones_sigue_vacia',
							],
						},
					],
					architecture: {
						version: 'En desarrollo',
						layers: [
							{
								name: 'Http',
								detail: 'controllers, requests, resources',
								rule: 'Valida la entrada con requests, responde con resources y delega en un caso de uso, sin reglas de negocio profundas.',
								dependsOn: [1],
							},
							{
								name: 'Application',
								detail: 'casos de uso y transacciones',
								rule: 'Ejecuta cada caso de uso dentro de su transacción y persiste a través de Infrastructure. Otros módulos solo entran por sus Actions y Queries públicas.',
								dependsOn: [2, 3],
							},
							{
								name: 'Domain',
								detail: 'reglas de negocio',
								rule: 'Sin HTTP, DB, Auth ni Eloquent: las demás capas dependen de ella, nunca al revés.',
								dependsOn: [],
							},
							{
								name: 'Infrastructure',
								detail: 'persistencia y adapters',
								rule: 'Eloquent, consultas optimizadas y adapters. Conoce el dominio; el dominio no la conoce a ella.',
								dependsOn: [2],
							},
						],
					},
				},
			],
		},
		services: {
			meta: {
				title: 'Sistemas web a medida y APIs en Piura, Perú | Josué Correa',
				description:
					'Desarrollo sistemas web a medida y APIs REST con Laravel, PHP y MySQL. Presencial en Piura, remoto en todo Perú y el extranjero. Cotización por alcance.',
			},
			label: 'Servicios',
			teaser: 'Sistemas web a medida y APIs para empresas en Piura, en todo Perú y en el extranjero.',
			teaserAction: 'Ver servicios',
			hero: {
				title: 'Sistemas web a medida y APIs',
				lead: 'Para empresas en Piura, en todo Perú y en el extranjero.',
				cta: 'Cuéntame tu proyecto',
				facts: [
					{ label: 'Ubicación', value: 'Piura, Perú', icon: 'location' },
					{ label: 'Modalidad', value: 'Presencial en Piura o remoto', icon: 'circle-check' },
				],
			},
			offer: {
				items: [
					{
						id: 'sistemas-web-a-medida',
						name: 'Sistemas web a medida',
						summary: 'Aplicaciones de gestión hechas a la medida de tu proceso, desde el registro diario hasta los reportes.',
						description:
							'Cuando la operación vive repartida entre Excel, correo y mensajería, construyo un solo sistema donde cada registro tiene fecha y responsable.',
						points: [
							'Un sistema en lugar de hojas de cálculo y mensajes sueltos.',
							'Permisos por rol: cada persona ve y hace solo lo que le corresponde.',
							'Historial consultable de cada operación.',
							'Reportes y PDFs generados desde los datos del sistema.',
						],
					},
					{
						id: 'apis-rest-e-integraciones',
						name: 'APIs REST e integraciones',
						summary: 'APIs para tu frontend web y para conectar los sistemas que tu negocio ya usa.',
						description:
							'Diseño APIs que sostienen un frontend web y conectan los sistemas que ya usa tu negocio, para que los datos viajen solos en lugar de copiarse a mano.',
						points: [
							'APIs REST para frontends web, con autenticación y permisos validados en el servidor.',
							'Integración entre sistemas internos que hoy no se comunican.',
							'Reportes y PDFs servidos desde la API.',
							'Rutas cubiertas por pruebas, para cambiar el sistema sin romper a quien lo consume.',
						],
					},
				],
			},
			process: {
				title: 'Cómo trabajo',
				label: 'Proceso',
				stages: 'etapas',
				caption: 'Cada entrega es software funcionando que revisas antes de pasar a la siguiente etapa.',
				steps: [
					{
						title: 'Conversación inicial',
						description:
							'Me cuentas cómo funciona hoy el proceso y qué está fallando. Primero entiendo el negocio, después elijo la tecnología.',
					},
					{
						title: 'Propuesta con alcance y etapas',
						description:
							'Te envío qué se construye, en qué etapas y cuánto cuesta. Sin precios genéricos: la cotización sale del alcance.',
					},
					{
						title: 'Construcción por entregas',
						description: 'Trabajo por etapas y en cada entrega revisas el avance funcionando, no solo un informe.',
					},
					{
						title: 'Puesta en producción',
						description: 'El sistema entra en operación con un periodo de garantía incluido para corregir errores.',
					},
				],
			},
			reach: {
				title: 'Dónde trabajo',
				items: [
					{ label: 'Piura', value: 'Presencial, con reuniones en tu empresa para entender el proceso de cerca.' },
					{ label: 'Resto de Perú', value: 'Remoto, con reuniones por videollamada y entregas en línea.' },
					{ label: 'Extranjero', value: 'Remoto, en la zona horaria de Perú (UTC−5).' },
				],
			},
			evidence: {
				title: 'Sistemas que ya construí',
			},
			faq: {
				title: 'Preguntas frecuentes',
				items: [
					{
						question: '¿Cuánto cuesta un sistema a medida?',
						answer:
							'Depende del alcance. Después de una primera conversación te envío una propuesta con lo que se construye, las etapas y el costo de cada una.',
					},
					{
						question: '¿Cuánto tarda?',
						answer:
							'También depende del alcance. La propuesta fija etapas con fechas, y en cada entrega ves el sistema funcionando.',
					},
					{
						question: '¿Trabajas presencial o remoto?',
						answer:
							'Presencial en Piura. Para el resto de Perú y el extranjero trabajo en remoto, con reuniones por videollamada.',
					},
					{
						question: '¿Qué pasa después de la entrega?',
						answer:
							'Cada proyecto incluye un periodo de garantía para corregir errores; su duración queda definida en la propuesta. Las mejoras y el soporte posteriores se acuerdan aparte.',
					},
					{
						question: '¿Con qué tecnologías trabajas?',
						answer: 'Laravel, PHP y MySQL en el backend, y React en el frontend web. En el desarrollo uso Git y Docker.',
					},
				],
			},
			cta: {
				title: '¿Tienes un proceso que ordenar?',
				copy: 'Cuéntame cómo funciona hoy y qué necesitas que cambie.',
				action: 'Contáctame',
			},
		},
		contact: {
			title: 'Hablemos de tu próximo proyecto.',
			channelsLabel: 'Escríbeme o encuéntrame en',
			form: {
				name: 'Nombre',
				email: 'Email',
				message: 'Mensaje',
				website: 'Sitio web',
				namePlaceholder: 'Tu nombre',
				nameInvalid: 'El nombre no debe contener números.',
				emailPlaceholder: 'tu@email.com',
				messagePlaceholder: 'Cuéntame brevemente qué necesitas construir o mejorar.',
				submit: 'Enviar mensaje',
				sending: 'Enviando...',
				success: 'Mensaje recibido. Te responderé pronto.',
				error: 'No se pudo enviar el mensaje. Inténtalo nuevamente o escríbeme por email.',
				rateLimit: 'Demasiados intentos. Espera unos minutos antes de volver a enviar.',
				turnstileRequired: 'Completa la verificación antes de enviar.',
				turnstileError: 'La verificación expiró o no fue válida. Inténtalo nuevamente.',
				successTitle: 'Mensaje enviado',
				errorTitle: 'No se pudo enviar',
				close: 'Cerrar',
				consentPrefix: 'Al enviar aceptas que use tus datos solo para responderte, según la',
				consentLink: 'política de privacidad',
			},
			email: 'Email',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			x: 'X',
			open: 'Abrir',
		},
		privacy: {
			meta: {
				title: 'Política de privacidad | Josué Correa',
				description:
					'Qué datos recoge josuecorreaq.com, para qué los uso y cómo ejercer tus derechos. Sin cookies de seguimiento ni publicidad.',
			},
			label: 'Privacidad',
			title: 'Política de privacidad',
			lead: 'Qué datos recoge esta web, para qué y qué puedes hacer con ellos.',
			updated: 'Actualizada el',
			contactPrefix: 'Escríbeme a',
			sections: [
				{
					id: 'responsable',
					title: 'Responsable',
					paragraphs: [
						'Josué Correa Quispe, desarrollador de software en Piura, Perú, es el responsable de los datos personales que se recogen en este sitio.',
						'Para navegar por esta web no necesitas darme ningún dato personal. Solo los recibo si decides escribirme.',
					],
					points: [],
					contact: true,
				},
				{
					id: 'marco-legal',
					title: 'Marco legal',
					paragraphs: [
						'Esta política se rige por la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, y su reglamento. En la práctica, eso significa que:',
					],
					points: [
						'Solo recojo los datos necesarios para responderte.',
						'Los uso únicamente para la finalidad por la que me los diste.',
						'Los conservo solo mientras hagan falta y los protejo con medidas técnicas razonables.',
						'Puedes ejercer tus derechos sobre ellos en cualquier momento y de forma gratuita.',
					],
					contact: false,
				},
				{
					id: 'formulario',
					title: 'Formulario de contacto',
					paragraphs: [
						'Si me escribes desde el formulario, recibo tu nombre, tu email y tu mensaje. Los uso solo para responderte y conversar sobre lo que me planteas, por ejemplo para preparar una cotización. No los uso para publicidad y no te suscribo a ningún boletín.',
						'Al enviar el formulario aceptas que trate esos datos con esa única finalidad. Te pido que sean verdaderos, para poder responderte; no hace falta que me des más información de la necesaria.',
						'Los conservo mientras dure la conversación y el tiempo razonable después para darle seguimiento. Cuando ya no son necesarios, los elimino. Puedes pedirme que los borre antes cuando quieras.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'analitica',
					title: 'Analítica',
					paragraphs: [
						'Uso Cloudflare Web Analytics para saber cuántas visitas recibe el sitio y qué páginas se leen. No usa cookies, no guarda tu dirección IP y no te sigue entre sitios. Solo recoge datos agregados como estos:',
					],
					points: [
						'Página visitada y página desde la que llegaste.',
						'Navegador, sistema operativo y tipo de dispositivo.',
						'País aproximado.',
						'Tiempo de carga de la página.',
					],
					contact: false,
				},
				{
					id: 'cookies',
					title: 'Cookies y almacenamiento',
					paragraphs: [
						'Este sitio no usa cookies de seguimiento ni de publicidad.',
						'Tu navegador guarda en su almacenamiento local el tema (claro u oscuro) y el idioma que elegiste, para recordarlos en tu próxima visita. Esa información no sale de tu dispositivo y la puedes borrar limpiando los datos del sitio.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'servidor',
					title: 'Servidor',
					paragraphs: [
						'Como cualquier web, el servidor que aloja este sitio registra datos técnicos de cada petición, como la dirección IP, la fecha y la página solicitada. Sirven para mantener el sitio seguro y detectar fallos, y se conservan por un tiempo limitado.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'proveedores',
					title: 'Proveedores',
					paragraphs: [
						'No vendo, alquilo ni cedo tus datos. Para que la web funcione me apoyo en algunos proveedores, que solo los tratan para prestar su servicio:',
					],
					points: [
						'Cloudflare, para la analítica de visitas y para comprobar con Turnstile que el formulario lo envía una persona y no un bot.',
						'El proveedor de hosting donde se alojan la web y el servicio que recibe los mensajes.',
						'El proveedor de correo con el que recibo tu mensaje y te respondo.',
					],
					contact: false,
				},
				{
					id: 'transferencia',
					title: 'Fuera del Perú',
					paragraphs: [
						'Algunos de estos proveedores, como Cloudflare, tienen servidores fuera del Perú, por lo que tus datos pueden tratarse en otros países. Trabajo con proveedores que ofrecen un nivel de protección adecuado.',
						'Solo comunicaría tus datos a una autoridad si una ley o una orden judicial me lo exige.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'seguridad',
					title: 'Seguridad',
					paragraphs: [
						'Toda la web funciona por HTTPS, con cabeceras de seguridad estrictas, verificación contra bots y límite de envíos en el formulario. Hago lo razonable para proteger tus datos, pero ninguna transmisión por internet es completamente segura.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'enlaces',
					title: 'Enlaces a otros sitios',
					paragraphs: [
						'Esta web enlaza a sitios de terceros como GitHub, LinkedIn y X. Cuando los visitas, se aplican sus propias políticas de privacidad, no esta.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'menores',
					title: 'Menores de edad',
					paragraphs: [
						'Esta web está dirigida a empresas y profesionales. Si me entero de que un menor de edad me envió sus datos sin autorización de sus padres o tutores, los elimino.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'derechos',
					title: 'Tus derechos',
					paragraphs: [
						'Puedes pedirme acceder a tus datos, rectificarlos, cancelarlos, oponerte a su uso o revocar tu consentimiento (derechos ARCO). Es gratuito.',
						'Escríbeme con el asunto «Protección de datos personales», indica qué quieres hacer y los datos que me diste para poder ubicarlos. Si hace falta verificar que eres el titular, te lo pediré. Respondo dentro de los plazos que fija la ley.',
						'Si consideras que no atendí tu solicitud, puedes acudir a la Autoridad Nacional de Protección de Datos Personales o al Poder Judicial mediante un proceso de hábeas data.',
					],
					points: [],
					contact: true,
				},
				{
					id: 'cambios',
					title: 'Cambios',
					paragraphs: [
						'Si cambia algo de lo que se describe aquí, actualizaré esta página y la fecha que aparece arriba.',
					],
					points: [],
					contact: false,
				},
			],
		},
		errors: {
			notFound: {
				metaTitle: 'Página no encontrada | Josué Correa',
				title: 'Página no encontrada',
				description: 'La dirección que buscas no existe o cambió de lugar.',
				action: 'Volver al inicio',
				projects: 'Ver proyectos',
			},
		},
	},
	en: {
		meta: {
			title: 'Josue Correa | Backend Developer, Peru (Remote)',
			description:
				'Josue Correa Quispe, backend developer based in Piura, Peru. I turn manual processes into clear systems with Laravel, PHP and MySQL. On-site or remote.',
		},
		nav: {
			services: 'Services',
			projects: 'Projects',
			approach: 'Approach',
			trajectory: 'Experience',
			contact: 'Contact',
			cv: 'CV',
			cvLabel: 'View CV',
			menu: 'Menu',
			mainLabel: 'Main navigation',
			languageLabel: 'Ver esta página en español',
			homeLabel: 'Josue Correa, home',
		},
		hero: {
			lead: 'I’m Josue Correa, a backend developer.',
			statement: 'I turn manual processes into clear systems that grow',
			statementMark: 'without breaking',
			contactCta: 'Get in touch',
			projectsCta: 'View projects',
			profileAlt: 'Portrait of Josue Correa',
			facts: [
				{ label: 'Location', value: 'Piura, Peru', icon: 'location' },
				{ label: 'Availability', value: 'On-site or remote', icon: 'circle-check' },
			],
		},
		approach: {
			titleLead: 'The problem is rarely the technology.',
			titleRest: 'It’s that nobody knows which data is the right one.',
			changesLabel: 'What changes day to day',
			changes: [
				{
					from: 'From data scattered across spreadsheets, email and chat',
					to: 'to one system where every record has a date and an owner.',
				},
				{
					from: 'From a different version of the truth in each area',
					to: 'to a single source of data, with role-based permissions.',
				},
				{
					from: 'From asking who changed what',
					to: 'to a searchable history of every operation.',
				},
			],
			principlesLabel: 'How I build it',
			principles: [
				{
					title: 'Separation by domain',
					description: 'Each business area in its own module, with clear boundaries.',
				},
				{
					title: 'Access enforced on the server',
					description: 'Permissions checked on the server, never in the interface.',
				},
				{
					title: 'Verified changes',
					description: 'Routes under test: changes don’t break what works.',
				},
			],
		},
		experience: {
			title: 'Experience',
			copy: 'From a system in production to an architecture that grows in phases.',
			currentLabel: 'Ongoing',
			items: [
				{
					year: '2026',
					range: 'January to now',
					current: true,
					role: 'Software Developer',
					organization: 'Independent project',
					project: 'End-to-End Credit Management Platform',
					highlights: [
						'Modular architecture across nine domains.',
						'Access control by user, role and branch.',
						'Phased migration backed by contract tests.',
					],
				},
				{
					year: '2025',
					range: 'April to December',
					current: false,
					role: 'Web Developer',
					organization: 'Financial-sector organization',
					project: 'Disbursement Management System',
					highlights: [
						'REST APIs with Laravel and a React frontend.',
						'Centralized, traceable operation with no local files.',
						'Incident support with the system in production.',
					],
				},
			],
		},
		cv: {
			modalTitle: 'Curriculum vitae',
			close: 'Close',
			loading: 'Loading the CV…',
			loadError: 'The CV could not be loaded. Check your connection and open it again.',
			name: 'Josue Andres Correa Quispe',
			role: 'Systems Engineer · Backend Developer',
			location: 'Piura, Peru',
			email: 'contacto@josuecorreaq.com',
			linkedin: 'linkedin.com/in/josuecorreaqu',
			github: 'github.com/josuecorreaq',
			summary:
				'Systems Engineer and web developer experienced in Laravel, React and MySQL. I build REST APIs and systems that automate processes, guarantee data consistency and keep applications maintainable as they grow.',
			sections: {
				experience: 'Experience',
				education: 'Education',
				skills: 'Technical skills',
				languages: 'Languages',
				competencies: 'Competencies',
			},
			experience: [
				{
					organization: 'Independent project',
					location: 'Piura, Peru',
					role: 'Software Developer',
					period: 'January 2026 to present',
					bullets: [
						'Building an end-to-end credit management platform with Laravel, React and MySQL, covering admissions, evaluations, credits and portfolio tracking.',
						'Designed the architecture as a modular monolith: nine domains with their own public boundary and dependencies running one way, migrating each module to the Http, Application, Domain and Infrastructure layers.',
						'Implemented authorization by user, role and branch, with evaluation that differs by client type.',
						'Sustain the phased migration with a contract test that freezes the public API routes, so restructuring a module never breaks the frontend.',
					],
				},
				{
					organization: 'Financial-sector organization',
					location: 'Piura, Peru',
					role: 'Web Developer',
					period: 'April to December 2025',
					bullets: [
						'Built a web system for loan, payment and financial reporting management, migrating manual operational processes to a centralized and traceable platform.',
						'Digitized the disbursement, payment-validation and installment-tracking flow, removing the dependency on local files and improving information access for cashiers, advisors, operators and administrators.',
						'Reduced manual steps in the payment-validation process by 50%, replacing internal notifications and manual updates with centralized records in the system.',
						'Developed REST APIs with Laravel and reusable React components for loans, payments, installments and financial reports.',
						'Structured backend and frontend modules applying separation of concerns, clean code and best practices, improving maintainability and scalability.',
						'Resolved incidents and business-logic requirements, prioritizing security, data consistency and operational continuity.',
					],
				},
			],
			education: [
				{
					institution: 'Universidad César Vallejo',
					location: 'Piura, Peru',
					degree: 'Professional degree in Systems Engineering',
					period: 'May 2026',
				},
				{
					institution: 'Universidad César Vallejo',
					location: 'Piura, Peru',
					degree: 'Bachelor in Systems Engineering',
					period: 'February 2026',
				},
			],
			educationNote: 'Studies completed between 2021 and 2025.',
			skills: [
				{ label: 'Languages', value: 'PHP' },
				{ label: 'Frameworks and libraries', value: 'Laravel, React, JavaScript, Tailwind CSS' },
				{ label: 'Databases', value: 'MySQL' },
				{ label: 'Tools and technologies', value: 'Docker, Git' },
				{
					label: 'Development practices',
					value: 'Clean code, separation of concerns, component reuse, maintainable architecture',
				},
			],
			languages: [
				{ label: 'Spanish', value: 'Native' },
				{ label: 'English', value: 'Intermediate' },
			],
			competencies: [
				'Teamwork',
				'Analysis and problem solving',
				'Stakeholder communication',
				'Adaptability',
				'Continuous improvement',
			],
		},
		projects: {
			title: 'Projects',
			copy: 'Two systems in real operation. One in production, one being built.',
			labels: {
				architecture: 'Architecture',
				layers: 'layers',
				viewProject: 'View full project',
				inspectHint: 'Select a layer to see what it depends on.',
				dependsOn: 'Depends on',
				noDependencies: 'Depends on no other layer',
			},
			items: [
				{
					name: 'Financial Disbursement Management System',
					year: '2025',
					client: 'Financial sector',
					coreLayer: 2,
					objective: 'Centralize disbursements, payment validation, installments and financial reporting.',
					context: 'A financial operation supported by local files and manual checks, with information scattered across different roles.',
					solution: 'A web system that structures the operational flow, centralizes information and improves payment and disbursement traceability.',
					role: 'Web Developer',
					decision: 'Separated the API, business rules, interface and persistence responsibilities to reduce coupling and simplify maintenance.',
					metrics: [
						{ value: '−50%', label: 'Manual steps in payment validation' },
						{ value: '147', label: 'REST endpoints in production' },
						{ value: '21', label: 'Automated test suites' },
					],
					evidence: [
						'147 REST endpoints behind a JWT session: loans, payments, installments, portfolio, arrears and rescheduling.',
						'21 unit and feature test suites over the critical rules: authentication, payments, arrears, portfolio, rescheduling and calculator.',
						'Manual payment-validation steps cut by 50%, measured against the previous process.',
						'Financial reports generated from system records instead of parallel spreadsheets.',
					],
					architecture: {
						version: 'Production',
						layers: [
							{
								name: 'HTTP / API',
								rule: 'Exposes the 147 REST endpoints behind a JWT session and hands each request to a use case, without making any business decision.',
								dependsOn: [1],
							},
							{
								name: 'Use cases',
								rule: 'Coordinates each operation end to end (disbursement, payment, installment, rescheduling) on top of the domain.',
								dependsOn: [2],
							},
							{
								name: 'Disbursements domain',
								rule: 'Models loans, payments, installments, portfolio and arrears: the core the rest of the system wraps around.',
								dependsOn: [3],
							},
							{
								name: 'Business rules',
								rule: 'Gathers the payment checks that used to be done by hand, so they are always applied the same way.',
								dependsOn: [4],
							},
							{
								name: 'Persistence and audit',
								rule: 'Stores every operation with its date and owner; financial reports are built from these records.',
								dependsOn: [],
							},
						],
					},
				},
				{
					name: 'End-to-End Credit Management Platform',
					year: '2026',
					client: 'Independent project',
					coreLayer: 2,
					objective: 'Cover the full credit lifecycle, from admission and evaluation to credits and portfolio tracking, on a modular base that grows in phases.',
					context: 'Nine business domains with their own rules, evaluation that differs by client type, and access scoped by user, role and branch.',
					solution: 'A modular monolith: each domain is a module with its own public boundary and dependencies running one way; the internal layers land module by module.',
					role: 'Full-stack development',
					decision: 'The Domain layer does not depend on the framework, and no module reaches into another module’s tables or internal classes: it only consumes its public Actions and Queries.',
					metrics: [
						{ value: '9', label: 'Modular business domains' },
						{ value: '110', label: 'Tests guarding the boundaries between modules' },
						{ value: '3', label: 'Access scopes: user, role and branch' },
					],
					evidence: [
						'143 of the 152 API routes frozen in a contract test that pins the method, URI, controller and middleware of each one.',
						'110 architecture tests: no module imports another one’s infrastructure or touches its tables with raw queries, and the dependency graph between modules has no cycles.',
						'Authorization at three levels: JWT session, granular per-action permission and branch scope.',
						'Domain layer free of HTTP, DB, Auth and Eloquent; modules talk only through public Actions and Queries.',
					],
					samples: [
						{
							label: 'Contract test excerpt',
							caption:
								'Each row pins the method, URI, controller and middleware. If a migration changes them, the test fails before the frontend does.',
							rows: [
								'// RouteContractTest.php',
								'',
								"['GET', 'api/v1/business-process',",
								'  BusinessProcessController@index,',
								"  ['jwt', 'permission:process.list']],",
								'',
								"['PATCH', 'api/v1/business-process/{id}',",
								'  BusinessProcessController@update,',
								"  ['jwt', 'permission:process.edit']],",
							],
						},
						{
							label: 'Architecture test excerpt',
							caption:
								'Module boundaries do not rely on discipline: 110 tests fail if a module imports another one’s infrastructure or touches its tables.',
							rows: [
								'// ModuleDependencyBoundaryTest.php',
								'test_credit_flow_module_dependency_graph_is_acyclic',
								'test_cross_module_dependency_inventory_stays_fixed',
								'',
								'// ControllerHttpBoundaryTest.php',
								'test_http_layer_does_not_execute_unallowlisted_persistence_operations',
								'test_http_layer_does_not_use_the_service_locator',
								'',
								'// TableOwnershipBoundaryTest.php',
								'test_ninguna_consulta_cruda_toca_una_tabla_de_otro_owner',
								'test_la_lista_de_excepciones_sigue_vacia',
							],
						},
					],
					architecture: {
						version: 'In development',
						layers: [
							{
								name: 'Http',
								detail: 'controllers, requests, resources',
								rule: 'Validates input with requests, responds with resources and delegates to a use case, with no deep business rules.',
								dependsOn: [1],
							},
							{
								name: 'Application',
								detail: 'use cases and transactions',
								rule: 'Runs each use case inside its transaction and persists through Infrastructure. Other modules only come in through its public Actions and Queries.',
								dependsOn: [2, 3],
							},
							{
								name: 'Domain',
								detail: 'business rules',
								rule: 'No HTTP, DB, Auth or Eloquent: the other layers depend on it, never the other way around.',
								dependsOn: [],
							},
							{
								name: 'Infrastructure',
								detail: 'persistence and adapters',
								rule: 'Eloquent, optimized queries and adapters. It knows the domain; the domain does not know it.',
								dependsOn: [2],
							},
						],
					},
				},
			],
		},
		services: {
			meta: {
				title: 'Custom Web Systems & APIs | Josue Correa, Peru (Remote)',
				description:
					'Custom web systems and REST APIs built with Laravel, PHP and MySQL for businesses in Peru and abroad. Remote, UTC−5. Quoted by scope.',
			},
			label: 'Services',
			teaser: 'Custom web systems and APIs for businesses in Piura, across Peru and abroad.',
			teaserAction: 'See services',
			hero: {
				title: 'Custom web systems and APIs',
				lead: 'For businesses in Piura, across Peru and abroad.',
				cta: 'Tell me about your project',
				facts: [
					{ label: 'Location', value: 'Piura, Peru', icon: 'location' },
					{ label: 'Work mode', value: 'On-site in Piura or remote', icon: 'circle-check' },
				],
			},
			offer: {
				items: [
					{
						id: 'custom-web-systems',
						name: 'Custom web systems',
						summary: 'Management applications built around your process, from day-to-day records to reports.',
						description:
							'When operations are spread across spreadsheets, email and chat, I build a single system where every record has a date and an owner.',
						points: [
							'One system instead of spreadsheets and scattered messages.',
							'Role-based permissions: each person sees and does only what their role allows.',
							'A searchable history of every operation.',
							'Reports and PDFs generated from the system’s data.',
						],
					},
					{
						id: 'rest-apis-and-integrations',
						name: 'REST APIs and integrations',
						summary: 'APIs for your web frontend and to connect the systems your business already uses.',
						description:
							'I design APIs that power a web frontend and connect the systems your business already uses, so data moves on its own instead of being copied by hand.',
						points: [
							'REST APIs for web frontends, with authentication and permissions enforced on the server.',
							'Integrations between internal systems that don’t talk to each other today.',
							'Reports and PDFs served from the API.',
							'Routes covered by tests, so the system can change without breaking whoever consumes it.',
						],
					},
				],
			},
			process: {
				title: 'How I work',
				label: 'Process',
				stages: 'stages',
				caption: 'Every delivery is working software you review before moving on to the next stage.',
				steps: [
					{
						title: 'Initial conversation',
						description:
							'You walk me through how the process works today and what is failing. I understand the business first, then choose the technology.',
					},
					{
						title: 'Proposal with scope and stages',
						description:
							'I send you what will be built, in which stages and at what cost. No generic prices: the quote comes from the scope.',
					},
					{
						title: 'Built in deliveries',
						description: 'I work in stages, and at each delivery you review working software, not just a report.',
					},
					{
						title: 'Go-live',
						description: 'The system goes into production with an included warranty period to fix defects.',
					},
				],
			},
			reach: {
				title: 'Where I work',
				items: [
					{ label: 'Piura', value: 'On-site, with meetings at your company to understand the process up close.' },
					{ label: 'Rest of Peru', value: 'Remote, with video calls and online deliveries.' },
					{ label: 'Abroad', value: 'Remote, on Peru time (UTC−5), which overlaps with US business hours.' },
				],
			},
			evidence: {
				title: 'Systems I have built',
			},
			faq: {
				title: 'Frequently asked questions',
				items: [
					{
						question: 'How much does a custom system cost?',
						answer:
							'It depends on the scope. After a first conversation I send you a proposal with what will be built, the stages and the cost of each one.',
					},
					{
						question: 'How long does it take?',
						answer:
							'That also depends on the scope. The proposal sets stages with dates, and at each delivery you see the system working.',
					},
					{
						question: 'Do you work on-site or remotely?',
						answer: 'On-site in Piura. For the rest of Peru and clients abroad I work remotely, with video calls.',
					},
					{
						question: 'What happens after delivery?',
						answer:
							'Every project includes a warranty period to fix defects; its length is set in the proposal. Later improvements and support are agreed separately.',
					},
					{
						question: 'Which technologies do you use?',
						answer: 'Laravel, PHP and MySQL on the backend, and React for the web frontend. I use Git and Docker during development.',
					},
				],
			},
			cta: {
				title: 'Have a process that needs order?',
				copy: 'Tell me how it works today and what needs to change.',
				action: 'Get in touch',
			},
		},
		contact: {
			title: 'Let’s talk about your next project.',
			channelsLabel: 'Write to me or find me on',
			form: {
				name: 'Name',
				email: 'Email',
				message: 'Message',
				website: 'Website',
				namePlaceholder: 'Your name',
				nameInvalid: 'Name must not contain numbers.',
				emailPlaceholder: 'you@email.com',
				messagePlaceholder: 'Briefly tell me what you need to build or improve.',
				submit: 'Send message',
				sending: 'Sending...',
				success: 'Message received. I will reply soon.',
				error: 'The message could not be sent. Try again or email me directly.',
				rateLimit: 'Too many attempts. Wait a few minutes before sending again.',
				turnstileRequired: 'Complete the verification before sending.',
				turnstileError: 'The verification expired or was not valid. Try again.',
				successTitle: 'Message sent',
				errorTitle: 'Message not sent',
				close: 'Close',
				consentPrefix: 'By sending, you agree that I use your data only to reply, as described in the',
				consentLink: 'privacy policy',
			},
			email: 'Email',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			x: 'X',
			open: 'Open',
		},
		privacy: {
			meta: {
				title: 'Privacy policy | Josue Correa',
				description:
					'What data josuecorreaq.com collects, what I use it for and how to exercise your rights. No tracking cookies and no advertising.',
			},
			label: 'Privacy',
			title: 'Privacy policy',
			lead: 'What data this site collects, why, and what you can do about it.',
			updated: 'Updated on',
			contactPrefix: 'Write to me at',
			sections: [
				{
					id: 'controller',
					title: 'Who is responsible',
					paragraphs: [
						'Josue Correa Quispe, a software developer based in Piura, Peru, is responsible for the personal data collected on this site.',
						'You do not need to give me any personal data to browse this site. I only receive it if you decide to write to me.',
					],
					points: [],
					contact: true,
				},
				{
					id: 'legal-framework',
					title: 'Legal framework',
					paragraphs: [
						'This policy is governed by Peru’s Personal Data Protection Law (Law No. 29733) and its regulations. In practice, that means:',
					],
					points: [
						'I only collect the data needed to reply to you.',
						'I use it solely for the purpose you gave it to me for.',
						'I keep it only as long as it is needed and protect it with reasonable technical measures.',
						'You can exercise your rights over it at any time, free of charge.',
					],
					contact: false,
				},
				{
					id: 'contact-form',
					title: 'Contact form',
					paragraphs: [
						'If you write to me through the form, I receive your name, your email and your message. I use them only to reply and to discuss what you raise, for example to prepare a quote. I do not use them for advertising or sign you up for any newsletter.',
						'By sending the form you agree that I process that data for that sole purpose. Please make sure it is accurate so I can reply; there is no need to share more than necessary.',
						'I keep it for as long as the conversation lasts and a reasonable time afterwards to follow up. Once it is no longer needed, I delete it. You can ask me to delete it sooner at any time.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'analytics',
					title: 'Analytics',
					paragraphs: [
						'I use Cloudflare Web Analytics to see how many visits the site gets and which pages are read. It uses no cookies, does not store your IP address and does not follow you across sites. It only collects aggregate data such as:',
					],
					points: [
						'The page visited and the page you came from.',
						'Browser, operating system and device type.',
						'Approximate country.',
						'Page load time.',
					],
					contact: false,
				},
				{
					id: 'cookies',
					title: 'Cookies and storage',
					paragraphs: [
						'This site uses no tracking or advertising cookies.',
						'Your browser keeps the theme (light or dark) and the language you chose in its local storage, so they are remembered on your next visit. That information never leaves your device, and you can delete it by clearing the site data.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'server',
					title: 'Server',
					paragraphs: [
						'Like any website, the server hosting this site logs technical data for each request, such as the IP address, the date and the page requested. They keep the site secure and help detect failures, and they are kept for a limited time.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'providers',
					title: 'Service providers',
					paragraphs: [
						'I do not sell, rent or hand over your data. To run the site I rely on a few providers, who only process it to deliver their service:',
					],
					points: [
						'Cloudflare, for visit analytics and for checking with Turnstile that a person, not a bot, sends the form.',
						'The hosting provider where the site and the service that receives messages run.',
						'The email provider I use to receive your message and reply to you.',
					],
					contact: false,
				},
				{
					id: 'transfers',
					title: 'Outside Peru',
					paragraphs: [
						'Some of these providers, such as Cloudflare, have servers outside Peru, so your data may be processed in other countries. I work with providers that offer an adequate level of protection.',
						'I would only disclose your data to an authority if a law or a court order requires it.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'security',
					title: 'Security',
					paragraphs: [
						'The whole site runs over HTTPS, with strict security headers, bot verification and a rate limit on the form. I do what is reasonable to protect your data, but no transmission over the internet is completely secure.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'links',
					title: 'Links to other sites',
					paragraphs: [
						'This site links to third-party sites such as GitHub, LinkedIn and X. When you visit them, their own privacy policies apply, not this one.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'minors',
					title: 'Minors',
					paragraphs: [
						'This site is aimed at businesses and professionals. If I learn that a minor sent me their data without their parents’ or guardians’ consent, I delete it.',
					],
					points: [],
					contact: false,
				},
				{
					id: 'rights',
					title: 'Your rights',
					paragraphs: [
						'You can ask me to access your data, correct it, have it deleted, object to its use or withdraw your consent. It is free of charge.',
						'Write to me with the subject “Personal data protection”, say what you want to do and include the data you gave me so I can find it. If I need to verify that you are the data owner, I will ask. I reply within the time limits set by law.',
						'If you feel your request was not handled, you can contact Peru’s National Personal Data Protection Authority or file a habeas data claim with the courts.',
					],
					points: [],
					contact: true,
				},
				{
					id: 'changes',
					title: 'Changes',
					paragraphs: [
						'If anything described here changes, I will update this page and the date shown at the top.',
					],
					points: [],
					contact: false,
				},
			],
		},
		errors: {
			notFound: {
				metaTitle: 'Page not found | Josue Correa',
				title: 'Page not found',
				description: 'The address you are looking for does not exist or has moved.',
				action: 'Back to home',
				projects: 'View projects',
			},
		},
	},
} as const;

export const useTranslations = (locale: Locale) => translations[locale];