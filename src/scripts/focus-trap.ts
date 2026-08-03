const FOCUSABLE_SELECTOR = [
	'a[href]',
	'button:not([disabled])',
	'input:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[tabindex]:not([tabindex="-1"])',
].join(',');

export const getFocusableElements = (container: HTMLElement) =>
	Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
		(element) => element.offsetParent !== null,
	);

/** Keeps Tab cycling inside an open dialog. Returns true when the event was handled. */
export const trapFocus = (container: HTMLElement, event: KeyboardEvent) => {
	if (event.key !== 'Tab') return false;

	const focusableElements = getFocusableElements(container);
	const firstElement = focusableElements[0];
	const lastElement = focusableElements[focusableElements.length - 1];

	if (!firstElement || !lastElement) return false;

	if (event.shiftKey && document.activeElement === firstElement) {
		event.preventDefault();
		lastElement.focus();
		return true;
	}

	if (!event.shiftKey && document.activeElement === lastElement) {
		event.preventDefault();
		firstElement.focus();
		return true;
	}

	return false;
};
