
const modals = document.querySelectorAll<HTMLDialogElement>('[data-cv-modal]');

// The CV lives in a page partial (src/pages/partials/cv) and each dialog fetches it once, as soon as
// someone reaches for the button, so pages that may never open it don't carry it.
const loads = new WeakMap<HTMLDialogElement, Promise<void>>();

const loadCv = (modal: HTMLDialogElement) => {
	const content = modal.querySelector<HTMLElement>('[data-cv-content]');

	if (loads.has(modal) || !content?.dataset.src) return;

	const status = content.querySelector<HTMLElement>('[data-cv-status]');

	if (status) {
		status.textContent = content.dataset.loadingMessage ?? '';
	}

	const load = fetch(content.dataset.src)
		.then((response) => {
			if (!response.ok) throw new Error(`CV request failed with ${response.status}`);

			return response.text();
		})
		.then((markup) => {
			content.innerHTML = markup;
			content.setAttribute('aria-busy', 'false');
		})
		.catch(() => {
			// Forget the attempt so opening the dialog again retries it.
			loads.delete(modal);

			if (status) {
				status.textContent = content.dataset.errorMessage ?? '';
			}
		});

	loads.set(modal, load);
};

const modalFor = (trigger: HTMLElement) =>
	trigger.closest('[lang]')?.querySelector<HTMLDialogElement>('[data-cv-modal]') ?? modals[0];

modals.forEach((modal) => {
	const closeButton = modal.querySelector<HTMLButtonElement>('[data-cv-modal-close]');

	closeButton?.addEventListener('click', () => modal.close());

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			modal.close();
		}
	});
});

document.querySelectorAll<HTMLElement>('[data-cv-open]').forEach((trigger) => {
	// Hover, keyboard focus or a touch start the request before the click lands.
	const prefetch = () => {
		const modal = modalFor(trigger);

		if (modal) loadCv(modal);
	};

	trigger.addEventListener('pointerenter', prefetch);
	trigger.addEventListener('focus', prefetch);
	trigger.addEventListener('touchstart', prefetch, { passive: true });

	trigger.addEventListener('click', () => {
		const modal = modalFor(trigger);

		if (!modal || modal.open) return;

		loadCv(modal);
		modal.showModal();
	});
});
