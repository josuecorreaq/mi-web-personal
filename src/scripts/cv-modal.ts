
const modal = document.querySelector<HTMLDialogElement>('[data-cv-modal]');

if (modal) {
	const closeButton = modal.querySelector<HTMLButtonElement>('[data-cv-modal-close]');

	closeButton?.addEventListener('click', () => modal.close());

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			modal.close();
		}
	});

	document.querySelectorAll<HTMLElement>('[data-cv-open]').forEach((trigger) => {
		trigger.addEventListener('click', () => {
			if (!modal.open) {
				modal.showModal();
			}
		});
	});
}
