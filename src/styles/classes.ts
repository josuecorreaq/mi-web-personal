// Layout recipes shared by the detail pages (case studies and services). They stay literal strings so
// Tailwind finds them when it scans the source.

/** Two-column row: title on the left, content on the right; stacked when the container is under 56rem. */
export const detailRow = {
	row: 'flex flex-wrap items-start gap-x-16 gap-y-5',
	title: 'min-w-0 flex-[0_1_20rem] text-balance type-row-title',
	body: 'min-w-0 flex-[1_1_32rem]',
	prose: 'max-w-[38em] text-pretty text-lg leading-[1.7] text-muted',
} as const;

/** Small monospace label above a heading or a group. */
export const monoLabel = 'font-mono text-[0.8125rem] text-muted';

/** Header bar and caption of the ruled figures (architecture diagram, process). */
export const figureBar = 'flex justify-between gap-3 border-b border-line px-4 py-3 font-mono text-[0.78rem] text-muted';
export const figureCaption = 'border-t border-line px-4 py-3.5 text-sm leading-relaxed text-pretty text-muted';
