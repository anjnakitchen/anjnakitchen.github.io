/** Smooth, eased scroll to an in-page section (used for hero anchors). */
export function smoothScrollToId(
  id: string,
  options?: { offset?: number; duration?: number },
) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = options?.offset ?? 72;
  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY - offset;
  const distance = endY - startY;
  const duration =
    options?.duration ??
    Math.min(1600, Math.max(1000, Math.abs(distance) * 0.85));

  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (time: number) => {
    if (startTime === null) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
