import type { Locale } from './config';

const translations = {
	es: {
		meta: {
			title: 'Josué Correa | Desarrollador Backend',
			description:
				'Portafolio de Josué Correa, Desarrollador Backend especializado en Laravel, PHP, APIs REST y sistemas financieros modulares.',
		},
		nav: {
			projects: 'Proyectos',
			about: 'Sobre mí',
			experience: 'Experiencia',
			services: 'Servicios',
			stack: 'Tecnologías',
			contact: 'Contacto',
			menu: 'Menú',
			mainLabel: 'Navegación principal',
			languageLabel: 'Ver esta página en inglés',
			homeLabel: 'Josué Correa, inicio',
		},
		hero: {
			name: 'Josué Correa',
			role: 'Desarrollador Backend',
			description:
				'Desarrollador Backend especializado en Laravel, PHP y MySQL. Diseño APIs y sistemas web escalables para automatizar procesos de negocio.',
			projectsCta: 'Ver proyectos',
			contactCta: 'Contáctame',
			location: 'Perú',
			flowLabel: 'Flujo backend',
			flowStatus: '200 OK',
			flowMethod: 'POST',
			flowEndpoint: '/api/v1/proceso-negocio',
			flow: ['Validar solicitud', 'Aplicar reglas de dominio', 'Persistir datos', 'Devolver una respuesta confiable'],
		},
		about: {
			kicker: 'Sobre mí',
			title: 'Código que sostiene procesos reales',
			copy:
				'Ingeniero de Sistemas con experiencia construyendo soluciones financieras con Laravel, React y MySQL. Trabajo desde las reglas del negocio hacia APIs, permisos y flujos operativos confiables, con una estructura preparada para evolucionar sin perder trazabilidad.',
			profileAlt: 'Josué Correa, desarrollador backend especializado en Laravel, PHP y MySQL',
			values: [
				{
					title: 'Separación por dominios',
					description: 'Cada área del negocio vive en su propio módulo, con una frontera pública explícita.',
				},
				{
					title: 'Acceso controlado en el servidor',
					description: 'Sesión, permiso por acción y alcance por sede se validan en el backend, nunca en la interfaz.',
				},
				{
					title: 'Cambios verificados',
					description: 'Las rutas públicas están cubiertas por pruebas: una migración interna no rompe a quien ya consume la API.',
				},
			],
		},
		services: {
			kicker: 'Qué resuelvo',
			title: 'Problemas de operación, no solo de código',
			copy:
				'Cuando el día a día se sostiene con archivos sueltos y mensajes, el problema no es de tecnología: es que nadie sabe cuál es el dato bueno. Ahí es donde entro.',
			items: [
				{
					problem: 'El equipo mueve datos entre Excel, correo y mensajería',
					outcome: 'Un solo sistema donde cada registro queda guardado con fecha y responsable.',
				},
				{
					problem: 'Cada área trabaja con su propia versión de la información',
					outcome: 'Una única fuente de datos, con permisos por rol y por sede.',
				},
				{
					problem: 'Saber qué pasó con un pago obliga a preguntar',
					outcome: 'Historial consultable de cada operación, sin depender de quién estaba de turno.',
				},
			],
		},
		experience: {
			kicker: 'Experiencia',
			title: 'Trabajo aplicado a operaciones financieras reales',
			cvCta: 'Ver CV',
			items: [
				{
					organization: 'Proyecto independiente',
					role: 'Desarrollador de software',
					period: 'Enero de 2026 — Actualidad',
					current: true,
					description: 'Plataforma Integral de Gestión Crediticia',
					highlights: [
						'Arquitectura modular de nueve dominios.',
						'Control de accesos por usuario, rol y sede.',
						'Migración por fases sobre tests de contrato.',
					],
				},
				{
					organization: 'Entidad del sector financiero',
					role: 'Desarrollador web',
					period: 'Abril — diciembre de 2025',
					current: false,
					description: 'Sistema de Gestión de Desembolsos Financieros',
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
					period: 'Enero de 2026 — Actualidad',
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
					period: 'Abril — diciembre de 2025',
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
		stack: {
			kicker: 'Tecnologías y herramientas',
			title: 'Mi stack de desarrollo',
		},
		projects: {
			kicker: 'Proyectos',
			title: 'Dos sistemas financieros: uno en producción, otro en construcción',
			labels: {
				context: 'Contexto',
				solution: 'Solución',
				role: 'Rol',
				decision: 'Decisión técnica',
				evidence: 'Evidencia técnica',
				details: 'Ver detalle técnico',
				caseStudy: 'Ver caso completo',
			},
			items: [
				{
					name: 'Sistema de Gestión de Desembolsos Financieros',
					objective: 'Centralizar el desembolso, la validación de pagos, las cuotas y los reportes financieros.',
					context: 'Operación financiera sostenida por archivos y validaciones manuales, con información dispersa entre distintos responsables.',
					solution: 'Sistema web que ordena el flujo operativo, centraliza la información y mejora la trazabilidad de pagos y desembolsos.',
					role: 'Desarrollador web',
					decision: 'Separación de responsabilidades entre API, reglas de negocio, interfaz y persistencia para reducir acoplamiento y facilitar mantenimiento.',
					metrics: [
						{ value: '−50 %', label: 'Pasos manuales en validación de pagos' },
						{ value: '153', label: 'Endpoints REST en producción' },
						{ value: '21', label: 'Suites de pruebas automatizadas' },
					],
					evidence: [
						'153 endpoints REST sobre sesión JWT: préstamos, pagos, cuotas, cartera, moras y reprogramación.',
						'21 suites de pruebas de funcionalidad, una por controlador crítico: autenticación, clientes, cartera, moras, reprogramación y calculadora.',
						'Reducción del 50 % en pasos manuales de validación de pagos, medida contra el proceso anterior.',
						'Reportes financieros generados desde los registros del sistema, no desde hojas de cálculo paralelas.',
					],
					architecture: {
						version: 'Producción',
						layers: [
							'HTTP / API',
							'Casos de uso',
							'Dominio de desembolsos',
							'Reglas de negocio',
							'Persistencia y auditoría',
						],
					},
				},
				{
					name: 'Plataforma Integral de Gestión Crediticia',
					objective: 'Cubrir el ciclo crediticio completo —admisiones, evaluaciones, créditos y seguimiento de cartera— sobre una base modular que crece por fases.',
					context: 'Nueve dominios de negocio con reglas propias, evaluación diferenciada por tipo de cliente y accesos delimitados por usuario, rol y sede.',
					solution: 'Monolito modular: cada dominio es un módulo con frontera pública propia y dependencias en una sola dirección; las capas internas se completan módulo a módulo.',
					role: 'Desarrollo full stack',
					decision: 'La capa Domain no depende del framework, y ningún módulo entra a las tablas ni a las clases internas de otro: solo consume sus Actions y Queries públicas.',
					metrics: [
						{ value: '9', label: 'Dominios de negocio modulares' },
						{ value: '100 %', label: 'De la API verificada en cada cambio' },
						{ value: '3', label: 'Niveles de acceso: usuario, rol y sede' },
					],
					evidence: [
						'118 rutas públicas congeladas en un test de contrato que fija método, URI, controlador y middleware de cada una.',
						'Nueve dominios definidos, cada uno como módulo independiente con su propia frontera pública.',
						'Autorización en tres niveles: sesión JWT, permiso granular por acción y alcance por sede.',
						'Capa Domain sin dependencias del framework; entre módulos solo hay Actions y Queries públicas.',
					],
					apiSample: {
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
					architecture: {
						version: 'En desarrollo',
						layers: [
							'Http · controllers, requests, resources',
							'Application · casos de uso y transacciones',
							'Domain · reglas de negocio',
							'Infrastructure · persistencia y adapters',
						],
					},
				},
			],
		},
		contact: {
			kicker: 'Contacto',
			title: 'Construyamos una solución que pueda crecer',
			copy:
				'¿Tienes un proyecto, propuesta o necesitas apoyo técnico? Puedes escribirme y revisamos cómo puedo ayudarte.',
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
			},
			email: 'Email',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			x: 'X',
			open: 'Abrir',
		},
		errors: {
			notFound: {
				metaTitle: 'Página no encontrada | Josué Correa',
				title: 'Página no encontrada',
				description:
					'¡Hola! Lo sentimos, pero no pudimos encontrar lo que buscabas. Verifica que la dirección URL sea correcta.',
				action: 'Ir a inicio',
			},
		},
	},
	en: {
		meta: {
			title: 'Josue Correa | Backend Developer',
			description:
				'Portfolio of Josue Correa, a Backend Developer specialized in Laravel, PHP, REST APIs and modular financial systems.',
		},
			nav: {
			projects: 'Projects',
			about: 'About',
			experience: 'Experience',
			services: 'Services',
			stack: 'Technologies',
			contact: 'Contact',
			menu: 'Menu',
			mainLabel: 'Main navigation',
			languageLabel: 'Ver esta página en español',
			homeLabel: 'Josue Correa, home',
		},
		hero: {
			name: 'Josue Correa',
			role: 'Backend Developer',
			description:
				'Backend Developer specialized in Laravel, PHP and MySQL. I design APIs and scalable web systems to automate business processes.',
			projectsCta: 'View projects',
			contactCta: 'Get in touch',
			location: 'Peru',
			flowLabel: 'Backend flow',
			flowStatus: '200 OK',
			flowMethod: 'POST',
			flowEndpoint: '/api/v1/business-process',
			flow: ['Validate request', 'Apply domain rules', 'Persist data', 'Return reliable response'],
		},
		about: {
			kicker: 'About',
			title: 'Code that powers real-world processes',
			copy:
				'Systems Engineer experienced in building financial solutions with Laravel, React and MySQL. I work from business rules toward reliable APIs, permissions and operational workflows, using structures designed to evolve without losing traceability.',
			profileAlt: 'Josue Correa, backend developer specialized in Laravel, PHP and MySQL',
			values: [
				{
					title: 'Separation by domain',
					description: 'Every business area lives in its own module, behind an explicit public boundary.',
				},
				{
					title: 'Access enforced on the server',
					description: 'Session, per-action permission and branch scope are checked in the backend, never in the interface.',
				},
				{
					title: 'Verified changes',
					description: 'Public routes are covered by tests: an internal migration never breaks an existing API consumer.',
				},
			],
		},
		services: {
			kicker: 'What I solve',
			title: 'Operational problems, not just code',
			copy:
				'When daily work runs on loose files and messages, the problem is not technology: nobody knows which copy of the data is the good one. That is where I come in.',
			items: [
				{
					problem: 'The team moves data between spreadsheets, email and chat',
					outcome: 'One system where every record is stored with a date and an owner.',
				},
				{
					problem: 'Each area works from its own version of the information',
					outcome: 'A single source of data, with permissions by role and by branch.',
				},
				{
					problem: 'Finding out what happened to a payment means asking around',
					outcome: 'A searchable history of every operation, independent of who was on shift.',
				},
			],
		},
		experience: {
			kicker: 'Experience',
			title: 'Engineering applied to real financial operations',
			cvCta: 'View CV',
			items: [
				{
					organization: 'Independent project',
					role: 'Software Developer',
					period: 'January 2026 — Present',
					current: true,
					description: 'End-to-End Credit Management Platform',
					highlights: [
						'Modular architecture across nine domains.',
						'Access control by user, role and branch.',
						'Phased migration backed by contract tests.',
					],
				},
				{
					organization: 'Financial-sector organization',
					role: 'Web Developer',
					period: 'April — December 2025',
					current: false,
					description: 'Financial Disbursement Management System',
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
					period: 'January 2026 — Present',
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
					period: 'April — December 2025',
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
		stack: {
			kicker: 'Technologies and tools',
			title: 'My development stack',
		},
		projects: {
			kicker: 'Projects',
			title: 'Two financial systems: one in production, one being built',
			labels: {
				context: 'Context',
				solution: 'Solution',
				role: 'Role',
				decision: 'Technical decision',
				evidence: 'Technical evidence',
				details: 'View technical detail',
				caseStudy: 'View full case study',
			},
			items: [
				{
					name: 'Financial Disbursement Management System',
					objective: 'Centralize disbursements, payment validation, installments and financial reporting.',
					context: 'A financial operation supported by local files and manual checks, with information scattered across different roles.',
					solution: 'A web system that structures the operational flow, centralizes information and improves payment and disbursement traceability.',
					role: 'Web Developer',
					decision: 'Separated the API, business rules, interface and persistence responsibilities to reduce coupling and simplify maintenance.',
					metrics: [
						{ value: '−50%', label: 'Manual steps in payment validation' },
						{ value: '153', label: 'REST endpoints in production' },
						{ value: '21', label: 'Automated test suites' },
					],
					evidence: [
						'153 REST endpoints behind a JWT session: loans, payments, installments, portfolio, arrears and rescheduling.',
						'21 feature test suites, one per critical controller: authentication, clients, portfolio, arrears, rescheduling and calculator.',
						'Manual payment-validation steps cut by 50%, measured against the previous process.',
						'Financial reports generated from system records instead of parallel spreadsheets.',
					],
					architecture: {
						version: 'Production',
						layers: [
							'HTTP / API',
							'Use cases',
							'Disbursements domain',
							'Business rules',
							'Persistence and audit',
						],
					},
				},
				{
					name: 'End-to-End Credit Management Platform',
					objective: 'Cover the full credit lifecycle — admissions, evaluations, credits and portfolio tracking — on a modular base that grows in phases.',
					context: 'Nine business domains with their own rules, evaluation that differs by client type, and access scoped by user, role and branch.',
					solution: 'A modular monolith: each domain is a module with its own public boundary and dependencies running one way; the internal layers land module by module.',
					role: 'Full-stack development',
					decision: 'The Domain layer does not depend on the framework, and no module reaches into another module’s tables or internal classes: it only consumes its public Actions and Queries.',
					metrics: [
						{ value: '9', label: 'Modular business domains' },
						{ value: '100%', label: 'Of the API verified on every change' },
						{ value: '3', label: 'Access scopes: user, role and branch' },
					],
					evidence: [
						'118 public routes frozen in a contract test that pins the method, URI, controller and middleware of each one.',
						'Nine domains defined, each an independent module with its own public boundary.',
						'Authorization at three levels: JWT session, granular per-action permission and branch scope.',
						'Domain layer free of framework dependencies; modules talk only through public Actions and Queries.',
					],
					apiSample: {
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
					architecture: {
						version: 'In development',
						layers: [
							'Http · controllers, requests, resources',
							'Application · use cases and transactions',
							'Domain · business rules',
							'Infrastructure · persistence and adapters',
						],
					},
				},
			],
		},
		contact: {
			kicker: 'Contact',
			title: 'Let’s build a solution ready to grow',
			copy:
				'Have a project, a proposal or need technical support? Send me a message and we can review how I can help.',
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
			},
			email: 'Email',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			x: 'X',
			open: 'Open',
		},
		errors: {
			notFound: {
				metaTitle: 'Page not found | Josue Correa',
				title: 'Page not found',
				description:
					'Hello! We could not find what you were looking for. Check that the URL is correct and try again.',
				action: 'Go home',
			},
		},
	},
} as const;

export const useTranslations = (locale: Locale) => translations[locale];