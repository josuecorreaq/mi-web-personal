// Single source for the profile links rendered in the UI and referenced by the Person schema.
export const social = {
	email: 'contacto@josuecorreaq.com',
	linkedin: {
		handle: 'linkedin.com/in/josuecorreaqu',
		url: 'https://www.linkedin.com/in/josuecorreaqu',
	},
	github: {
		handle: 'github.com/josuecorreaq',
		url: 'https://github.com/josuecorreaq',
	},
	x: {
		handle: 'x.com/josuecorreaqu',
		url: 'https://x.com/josuecorreaqu',
	},
} as const;

export const socialProfileUrls = [social.linkedin.url, social.github.url, social.x.url];
