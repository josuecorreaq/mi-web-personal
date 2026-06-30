type TurnstileApi = {
	reset: (container?: string | HTMLElement) => void;
};

type ValidationResponse = {
	errors?: Record<string, unknown>;
};

type ContactModalType = 'success' | 'error';

const TURNSTILE_API_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
const DIGIT_PATTERN = /\p{N}/gu;
const FOCUSABLE_SELECTOR = [
	'a[href]',
	'button:not([disabled])',
	'input:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[tabindex]:not([tabindex="-1"])',
].join(',');

const getTurnstile = () => (window as Window & { turnstile?: TurnstileApi }).turnstile;

const loadTurnstile = () => {
	const hasTurnstileWidget = document.querySelector('[data-turnstile-enabled="true"] .cf-turnstile');

	if (!hasTurnstileWidget || document.querySelector(`script[src="${TURNSTILE_API_URL}"]`)) {
		return;
	}

	const script = document.createElement('script');
	script.src = TURNSTILE_API_URL;
	script.async = true;
	script.defer = true;
	document.head.append(script);
};

const resetTurnstile = (form: HTMLFormElement) => {
	const widget = form.querySelector<HTMLElement>('.cf-turnstile');
	const turnstile = getTurnstile();

	if (!widget || !turnstile) return;

	turnstile.reset(widget);
};

const readJsonSafely = async (response: Response): Promise<ValidationResponse | null> => {
	try {
		return (await response.json()) as ValidationResponse;
	} catch {
		return null;
	}
};

const bindContactForm = (form: HTMLFormElement) => {
	const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
	const submitText = form.querySelector<HTMLElement>('[data-submit-text]');
	const status = form.querySelector<HTMLElement>('[data-contact-status]');
	const modal = form.querySelector<HTMLElement>('[data-contact-modal]');
	const modalPanel = form.querySelector<HTMLElement>('[data-contact-modal-panel]');
	const modalTitle = form.querySelector<HTMLElement>('[data-contact-modal-title]');
	const modalMessage = form.querySelector<HTMLElement>('[data-contact-modal-message]');
	const modalSuccessIcon = form.querySelector<HTMLElement>('[data-contact-modal-success-icon]');
	const modalErrorIcon = form.querySelector<HTMLElement>('[data-contact-modal-error-icon]');
	const modalClose = form.querySelector<HTMLButtonElement>('[data-contact-modal-close]');
	const submitLabel = form.dataset.submitLabel ?? submitText?.textContent ?? '';
	const sendingLabel = form.dataset.sendingLabel ?? submitLabel;
	const isTurnstileEnabled = form.dataset.turnstileEnabled === 'true';
	let modalFocusReturn: HTMLElement | null = null;

	const setStatus = (message = '') => {
		if (!status) return;

		status.textContent = message;
	};

	const getFocusableModalElements = () =>
		Array.from(modal?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? []).filter(
			(element) => !element.hasAttribute('hidden') && !element.getAttribute('aria-hidden'),
		);

	const closeModal = () => {
		if (!modal) return;

		modal.hidden = true;
		modalFocusReturn?.focus();
		modalFocusReturn = null;
	};

	const showStatus = (message: string | undefined, type: ContactModalType) => {
		const safeMessage = message ?? '';

		setStatus(safeMessage);

		if (!modal || !modalTitle || !modalMessage || !modalSuccessIcon || !modalErrorIcon) return;

		modalFocusReturn = document.activeElement instanceof HTMLElement ? document.activeElement : submitButton;
		modalTitle.textContent =
			type === 'success' ? form.dataset.modalSuccessTitle ?? '' : form.dataset.modalErrorTitle ?? '';
		modalMessage.textContent = safeMessage;
		modalSuccessIcon.hidden = type !== 'success';
		modalErrorIcon.hidden = type !== 'error';
		modal.hidden = false;

		requestAnimationFrame(() => {
			(modalClose ?? modalPanel)?.focus();
		});
	};

	const setSubmitting = (isSubmitting: boolean) => {
		if (submitButton) {
			submitButton.disabled = isSubmitting;
		}

		if (submitText) {
			submitText.textContent = isSubmitting ? sendingLabel : submitLabel;
		}
	};

	modalClose?.addEventListener('click', closeModal);
	modal?.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});
	modal?.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeModal();
			return;
		}

		if (event.key !== 'Tab') return;

		const focusableElements = getFocusableModalElements();
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		if (!firstElement || !lastElement) return;

		if (event.shiftKey && document.activeElement === firstElement) {
			event.preventDefault();
			lastElement.focus();
			return;
		}

		if (!event.shiftKey && document.activeElement === lastElement) {
			event.preventDefault();
			firstElement.focus();
		}
	});

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		if (!form.reportValidity()) return;

		const formData = new FormData(form);
		const token = formData.get('cf-turnstile-response')?.toString() ?? '';

		if (isTurnstileEnabled && !token) {
			showStatus(form.dataset.turnstileRequiredMessage, 'error');
			return;
		}

		if (token) {
			// Avoid browser autofill false positives on the hidden honeypot field.
			formData.set('website', '');
		}

		formData.set('turnstile_token', token);
		formData.delete('cf-turnstile-response');

		setSubmitting(true);
		setStatus('');

		try {
			const response = await fetch(form.dataset.endpoint ?? form.action, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(Object.fromEntries(formData.entries())),
			});
			const responseBody = await readJsonSafely(response);
			const errors = responseBody?.errors ?? {};

			if (response.ok) {
				form.reset();
				resetTurnstile(form);
				showStatus(form.dataset.successMessage, 'success');
				return;
			}

			if (response.status === 429) {
				showStatus(form.dataset.rateLimitMessage ?? form.dataset.errorMessage, 'error');
				return;
			}

			if ('turnstile_token' in errors) {
				resetTurnstile(form);
				showStatus(form.dataset.turnstileErrorMessage ?? form.dataset.errorMessage, 'error');
				return;
			}

			showStatus(form.dataset.errorMessage, 'error');
		} catch {
			showStatus(form.dataset.errorMessage, 'error');
		} finally {
			setSubmitting(false);
		}
	});
};

document.querySelectorAll<HTMLInputElement>('[data-no-digits]').forEach((input) => {
	input.addEventListener('input', () => {
		input.value = input.value.replace(DIGIT_PATTERN, '');
	});
});

loadTurnstile();
document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach(bindContactForm);