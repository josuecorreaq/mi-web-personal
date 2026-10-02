
const modals = document.querySelectorAll<HTMLDialogElement>('[data-cv-modal]');

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
	trigger.addEventListener('click', () => {
		const modal =
			trigger.closest('[lang]')?.querySelector<HTMLDialogElement>('[data-cv-modal]') ?? modals[0];

		if (modal && !modal.open) {
			modal.showModal();
		}
	});
});
