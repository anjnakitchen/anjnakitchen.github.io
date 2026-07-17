import type { Transition, ViewportOptions } from "framer-motion";

/**
 * Fire scroll reveals before sections reach the viewport edge.
 * (Negative margins delay triggers and leave blank gaps on mobile.)
 */
export const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.06,
  margin: "0px 0px 22% 0px",
};

export const revealTransition: Transition = {
  duration: 0.55,
  ease: [0.25, 0.1, 0.25, 1],
};

export const revealInitial = { opacity: 0 };

export const revealInView = { opacity: 1 };

/** Hero loads on mount — keep motion subtle to avoid mobile jank. */
export const heroTransition = (delay = 0): Transition => ({
  delay,
  duration: 0.65,
  ease: [0.25, 0.1, 0.25, 1],
});
