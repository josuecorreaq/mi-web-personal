// Plays a figure's build-up once, the first time enough of it is in view: every `[data-at]` element
// inside gets `data-shown` at `data-at` milliseconds. The figure styles both states, so the script
// only flips attributes (the CSP forbids inline styles). Without motion the figure stays as built.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export interface FigureSequence {
	/** Hides the steps and plays them again from the start. */
	replay: () => void;
}

export const sequenceFigure = (figure: HTMLElement): FigureSequence | null => {
	const steps = Array.from(figure.querySelectorAll<HTMLElement>('[data-at]'));

	if (steps.length === 0 || reduceMotion.matches || !('IntersectionObserver' in window)) return null;

	let timers: number[] = [];

	const play = () => {
		timers.forEach((timer) => window.clearTimeout(timer));
		timers = [];
		figure.dataset.sequence = '';
		steps.forEach((step) => delete step.dataset.shown);

		// Two frames so the hidden state is painted before the first step transitions out of it.
		requestAnimationFrame(() =>
			requestAnimationFrame(() => {
				steps.forEach((step) => {
					timers.push(
						window.setTimeout(() => {
							step.dataset.shown = '';
						}, Number(step.dataset.at) || 0),
					);
				});
			}),
		);
	};

	// A figure already in view on load is left alone: hiding it now would only make it flash. One that
	// only peeks in at the bottom edge still plays once the visitor scrolls to it.
	const box = figure.getBoundingClientRect();
	if (box.top < window.innerHeight * 0.8 && box.bottom > 0) return { replay: play };

	figure.dataset.sequence = '';

	// Tall figures (phones) never reach a high ratio, so half a screen of figure counts as well.
	const observer = new IntersectionObserver(
		(entries) => {
			const ready = entries.some(
				(entry) =>
					entry.isIntersecting &&
					(entry.intersectionRatio >= 0.4 || entry.intersectionRect.height >= window.innerHeight * 0.5),
			);

			if (!ready) return;
			observer.disconnect();
			play();
		},
		{ threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] },
	);

	observer.observe(figure);

	return { replay: play };
};
