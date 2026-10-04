export interface NavItem {
	id: string;
	label: string;
	href: string;
	scrollTarget?: string;
	/** The page sits inside this section (a case study inside the projects), so the nav marks it. */
	current?: boolean;
}
