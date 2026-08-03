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
			stack: 'Tecnologías',
			contact: 'Contacto',
			menu: 'Menú',
			mainLabel: 'Navegación principal',
			homeLabel: 'Josué Correa, inicio',
		},
		footer: {
			builtWith: 'Hecho con Astro y <3',
		},
		hero: {
			name: 'Josué Correa',
			role: 'Desarrollador Backend',
			description:
				'Desarrollador Backend especializado en Laravel, PHP y MySQL. Diseño APIs y sistemas web escalables para automatizar procesos de negocio.',
			primaryCta: 'Ver proyectos',
			secondaryCta: 'Contactar',
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
					title: 'Arquitectura clara',
					description: 'Estructura bien definida desde el inicio.',
				},
				{
					title: 'Seguridad por diseño',
					description: 'Validaciones y protección integradas.',
				},
				{
					title: 'Mantenimiento sostenible',
					description: 'Código legible y escalable a largo plazo.',
				},
			],
		},
		experience: {
			kicker: 'Experiencia',
			title: 'Trabajo aplicado a operaciones financieras reales',
			organization: 'Entidad del sector financiero',
			role: 'Desarrollador web',
			period: 'Abril — diciembre de 2025',
			description:
				'Desarrollo de un sistema para reemplazar procesos manuales de desembolso, pagos, cuotas y reportes por una operación centralizada y trazable.',
			highlights: [
				'Reducción del 50 % en pasos manuales de validación de pagos.',
				'APIs REST con Laravel y componentes reutilizables con React.',
				'Módulos separados, validaciones de negocio y control de consistencia de datos.',
			],
			cvCta: 'Ver CV',
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
			title: 'Dos sistemas, dos etapas de una misma especialización',
			labels: {
				context: 'Contexto',
				solution: 'Solución',
				role: 'Rol',
				decision: 'Decisión técnica',
				evidence: 'Evidencia técnica',
			},
			items: [
				{
					name: 'Sistema de Gestión de Desembolsos Financieros',
					objective: 'Centralizar el desembolso, la validación de pagos, las cuotas y los reportes financieros.',
					context: 'Operación financiera sostenida por archivos y validaciones manuales, con información dispersa entre distintos responsables.',
					solution: 'Sistema web que ordena el flujo operativo, centraliza la información y mejora la trazabilidad de pagos y desembolsos.',
					role: 'Desarrollador web con enfoque backend',
					decision: 'Separación de responsabilidades entre API, reglas de negocio, interfaz y persistencia para reducir acoplamiento y facilitar mantenimiento.',
					evidence: 'Reducción del 50 % en pasos manuales de validación de pagos, con acceso centralizado a la información operativa.',
					architecture: {
						title: 'Arquitectura implementada',
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
					objective: 'Cubrir el ciclo crediticio completo —admisión, evaluación, garantías y cartera— sobre una base modular que crece por fases.',
					context: 'Nueve dominios de negocio con reglas propias, evaluación diferenciada por tipo de cliente y accesos delimitados por usuario, rol y sede.',
					solution: 'Monolito modular: cada dominio es un módulo con cuatro capas internas y dependencias en una sola dirección, para crecer sin acoplar.',
					role: 'Desarrollo full stack y definición de la arquitectura modular',
					decision: 'La capa Domain no depende del framework, y ningún módulo entra a las tablas ni a las clases internas de otro: solo consume sus Actions y Queries públicas.',
					evidence: 'La migración avanza por fases con un test de contrato que congela las rutas públicas de la API: reestructurar un módulo no rompe a sus consumidores.',
					architecture: {
						title: 'Estructura del sistema',
						version: 'En desarrollo',
						layers: [
							'Http · controllers, requests, resources',
							'Application · casos de uso y transacciones',
							'Domain · reglas de negocio puras',
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
			stack: 'Technologies',
			contact: 'Contact',
			menu: 'Menu',
			mainLabel: 'Main navigation',
			homeLabel: 'Josue Correa, home',
		},
		footer: {
			builtWith: 'Built with Astro and <3',
		},
		hero: {
			name: 'Josue Correa',
			role: 'Backend Developer',
			description:
				'Backend Developer specialized in Laravel, PHP and MySQL. I design APIs and scalable web systems to automate business processes.',
			primaryCta: 'View projects',
			secondaryCta: 'Get in touch',
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
					title: 'Clear architecture',
					description: 'Structure defined clearly from the start.',
				},
				{
					title: 'Security by design',
					description: 'Integrated validation and protection.',
				},
				{
					title: 'Sustainable maintenance',
					description: 'Readable, scalable code for the long term.',
				},
			],
		},
		experience: {
			kicker: 'Experience',
			title: 'Engineering applied to real financial operations',
			organization: 'Financial-sector organization',
			role: 'Web Developer',
			period: 'April — December 2025',
			description:
				'Developed a system that replaced manual disbursement, payment, installment and reporting processes with a centralized and traceable operation.',
			highlights: [
				'Reduced manual payment-validation steps by 50%.',
				'Built REST APIs with Laravel and reusable components with React.',
				'Separated modules, business validation and data-consistency controls.',
			],
			cvCta: 'View CV',
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
			title: 'Two systems, two stages of the same specialization',
			labels: {
				context: 'Context',
				solution: 'Solution',
				role: 'Role',
				decision: 'Technical decision',
				evidence: 'Technical evidence',
			},
			items: [
				{
					name: 'Financial Disbursement Management System',
					objective: 'Centralize disbursements, payment validation, installments and financial reporting.',
					context: 'A financial operation supported by local files and manual checks, with information scattered across different roles.',
					solution: 'A web system that structures the operational flow, centralizes information and improves payment and disbursement traceability.',
					role: 'Web Developer with a backend focus',
					decision: 'Separated the API, business rules, interface and persistence responsibilities to reduce coupling and simplify maintenance.',
					evidence: 'Reduced manual payment-validation steps by 50% while centralizing access to operational information.',
					architecture: {
						title: 'Implemented architecture',
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
					objective: 'Cover the full credit lifecycle — admission, evaluation, guarantees and portfolio — on a modular base that grows in phases.',
					context: 'Nine business domains with their own rules, evaluation that differs by client type, and access scoped by user, role and branch.',
					solution: 'A modular monolith: each domain is a module with four internal layers and dependencies running one way, so it grows without coupling.',
					role: 'Full-stack development and modular architecture definition',
					decision: 'The Domain layer does not depend on the framework, and no module reaches into another module’s tables or internal classes: it only consumes its public Actions and Queries.',
					evidence: 'The migration advances in phases behind a contract test that freezes the public API routes: restructuring a module never breaks its consumers.',
					architecture: {
						title: 'System structure',
						version: 'In development',
						layers: [
							'Http · controllers, requests, resources',
							'Application · use cases and transactions',
							'Domain · pure business rules',
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
