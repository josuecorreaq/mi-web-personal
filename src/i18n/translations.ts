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
				'Soy Ingeniero de Sistemas con experiencia desarrollando aplicaciones web de extremo a extremo. Trabajo principalmente con Laravel, React y MySQL, transformando procesos complejos en soluciones claras, seguras y mantenibles. Priorizo una arquitectura sólida, reglas de negocio bien definidas y una experiencia de usuario consistente.',
			values: ['Arquitectura clara', 'Seguridad por diseño', 'Mantenimiento sostenible'],
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
			},
		},
		contact: {
			kicker: 'Contacto',
			title: 'Construyamos una solución que pueda crecer',
			copy:
				'¿Tienes un proyecto, propuesta o necesitas apoyo técnico? Puedes escribirme y revisamos cómo puedo ayudarte.',
			email: 'Email',
			linkedin: 'LinkedIn',
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
				'I am a Systems Engineer with experience developing end-to-end web applications. I work mainly with Laravel, React and MySQL, turning complex processes into clear, secure and maintainable solutions. I prioritize solid architecture, well-defined business rules and a consistent user experience.',
			values: ['Clear architecture', 'Security by design', 'Sustainable maintenance'],
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
			},
		},
		contact: {
			kicker: 'Contact',
			title: 'Let’s build a solution ready to grow',
			copy:
				'Have a project, a proposal or need technical support? Send me a message and we can review how I can help.',
			email: 'Email',
			linkedin: 'LinkedIn',
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
