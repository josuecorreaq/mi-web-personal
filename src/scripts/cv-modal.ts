import { trapFocus } from './focus-trap';

const bindCvModal = (modal: HTMLElement) => {
	const panel = modal.querySelector<HTMLElement>('[data-cv-modal-panel]');
	const closeButton = modal.querySelector<HTMLButtonElement>('[data-cv-modal-close]');
	let focusReturn: HTMLElement | null = null;
	let previousBodyOverflow = '';

	const openModal = (trigger: HTMLElement) => {
		focusReturn = trigger;
		previousBodyOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		modal.hidden = false;
		// Focus synchronously: the panel is already in the DOM, and a rAF callback
		// would never run if the tab is not compositing frames.
		(closeButton ?? panel)?.focus();
	};

	const closeModal = () => {
		if (modal.hidden) return;

		modal.hidden = true;
		document.body.style.overflow = previousBodyOverflow;
		focusReturn?.focus();
		focusReturn = null;
	};

	closeButton?.addEventListener('click', closeModal);

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	modal.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeModal();
			return;
		}

		trapFocus(modal, event);
	});

	document.querySelectorAll<HTMLElement>('[data-cv-open]').forEach((trigger) => {
		trigger.addEventListener('click', () => openModal(trigger));
	});
};

document.querySelectorAll<HTMLElement>('[data-cv-modal]').forEach(bindCvModal);
