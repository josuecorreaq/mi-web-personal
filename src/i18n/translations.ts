import type { Locale } from './config';

const translations = {
	es: {
		meta: {
			title: 'Josué Correa | Desarrollador Backend',
			description:
				'Portafolio de Josué Correa, Ingeniero de Sistemas y Desarrollador Backend especializado en Laravel, PHP, MySQL, React, APIs REST y sistemas web para procesos de negocio.',
		},
		nav: {
			projects: 'Proyectos',
			about: 'Sobre mí',
			stack: 'Tecnologías',
			contact: 'Contacto',
			menu: 'Menú',
			mainLabel: 'Navegación principal',
			homeLabel: 'Josué Correa, inicio',
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
				'Ingeniero de Sistemas con experiencia en Laravel, React y MySQL. Desarrollo aplicaciones web y sistemas internos que ayudan a organizar procesos, automatizar tareas y mejorar la gestión de información. Combino criterio técnico, seguridad y estructura mantenible para construir soluciones claras, confiables y preparadas para crecer.',
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
		stack: {
			kicker: 'Tecnologías y herramientas',
			title: 'Mi stack de desarrollo',
		},
		projects: {
			kicker: 'Proyectos',
			title: 'Soluciones construidas desde el problema, no desde la tecnología',
			name: 'Sistema de Gestión de Desembolsos Financieros',
			context: 'Proceso financiero con múltiples etapas de validación, aprobaciones por rol, control documental y seguimiento de estados operativos durante el ciclo de desembolso.',
			solution: 'Desarrollo de una plataforma para automatizar y controlar el flujo de desembolso, garantizando trazabilidad, consistencia operativa y ejecución eficiente de las reglas de negocio.',
			role: 'Desarrollador Backend',
			objective: 'Automatizar y controlar el proceso de desembolso y seguimiento de clientes.',
			decision: 'Implementación de una arquitectura en capas, desacoplando la lógica de negocio de la infraestructura y el framework para mejorar mantenibilidad, escalabilidad y capacidad de pruebas.',
			evidence:
				'El caso de estudio resume un sistema backend orientado a procesos financieros donde Laravel, PHP y MySQL sostienen validaciones, reglas de negocio, estados operativos y auditoría de datos. La solución organiza el flujo en capas para que cada etapa del desembolso pueda validarse, persistirse y revisarse con menor acoplamiento entre interfaz, dominio e infraestructura.',
			status: 'Caso de estudio',
			architecture: {
				title: 'Mapa de arquitectura',
				version: 'v1.0',
				layers: [
					'HTTP / API',
					'Casos de Uso',
					'Dominio de Desembolsos',
					'Reglas de Negocio',
					'Persistencia y Auditoría',
				],
			},
			labels: {
				context: 'Contexto',
				solution: 'Solución',
				role: 'Rol',
				decision: 'Decisión técnica',
				evidence: 'Evidencia técnica',
			},
		},
		contact: {
			kicker: 'Contacto',
			title: 'Construyamos una solución que pueda crecer',
			copy:
				'¿Tienes un proyecto, propuesta o necesitas apoyo técnico? Puedes escribirme y revisamos cómo puedo ayudarte.',
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
				'Portfolio of Josue Correa, a Systems Engineer and Backend Developer specialized in Laravel, PHP, MySQL, React, REST APIs and web systems for business processes.',
		},
		nav: {
			projects: 'Projects',
			about: 'About',
			stack: 'Technologies',
			contact: 'Contact',
			menu: 'Menu',
			mainLabel: 'Main navigation',
			homeLabel: 'Josue Correa, home',
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
				'Systems Engineer with experience in Laravel, React and MySQL. I build web applications and internal systems that help organize processes, automate tasks and improve information management. I combine technical judgment, security and maintainable structure to build clear, reliable solutions ready to grow.',
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
		stack: {
			kicker: 'Technologies and tools',
			title: 'My development stack',
		},
		projects: {
			kicker: 'Projects',
			title: 'Solutions shaped by the problem, not by the technology',
			name: 'Financial Disbursement Management System',
			context: 'A financial process with multiple validation stages, role-based approvals, document control and operational status tracking throughout the disbursement lifecycle.',
			solution: 'Development of a platform to automate and control the disbursement workflow, ensuring traceability, operational consistency and efficient execution of business rules.',
			role: 'Backend Developer',
			objective: 'Automate and control the disbursement process and client tracking.',
			decision: 'Implementation of a layered architecture that decouples business logic from infrastructure and the framework to improve maintainability, scalability and testability.',
			evidence:
				'This case study describes a backend system for financial processes where Laravel, PHP and MySQL support validations, business rules, operational statuses and data auditing. The solution organizes the workflow into layers so each disbursement stage can be validated, persisted and reviewed with less coupling between the interface, domain and infrastructure.',
			status: 'Case study',
			architecture: {
				title: 'Architecture map',
				version: 'v1.0',
				layers: [
					'HTTP / API',
					'Use Cases',
					'Disbursement Domain',
					'Business Rules',
					'Persistence and Auditing',
				],
			},
			labels: {
				context: 'Context',
				solution: 'Solution',
				role: 'Role',
				decision: 'Technical decision',
				evidence: 'Technical evidence',
			},
		},
		contact: {
			kicker: 'Contact',
			title: 'Let’s build a solution ready to grow',
			copy:
				'Have a project, a proposal or need technical support? Send me a message and we can review how I can help.',
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