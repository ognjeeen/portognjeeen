// Distances are measured in viewport heights, independent of wheel speed.
const PROJECT_DISTANCE = 2.5;
const TRANSITION_DISTANCE = 0.6;
const OPEN_START = 0.6;
const OPEN_END = 1.35;
const CLOSE_START = 1.6;
const CLOSE_END = 2.2;
const clamp = (value: number) => Math.max(0, Math.min(1, value));

export type ScreeningScene = {
  project: number;
  reveal: number;
  transition?: { from: number; to: number; progress: number };
};

export function getScreeningDistance(projectCount: number) {
  // The last screenshot releases the pin after its hold, without an unused closing phase.
  return Math.max(0, projectCount - 1) * (PROJECT_DISTANCE + TRANSITION_DISTANCE)
    + (projectCount > 0 ? CLOSE_START : 0);
}

export function getScreeningTarget(project: number, app: boolean, projectCount: number) {
  const start = project * (PROJECT_DISTANCE + TRANSITION_DISTANCE);
  const phase = app ? (OPEN_END + CLOSE_START) / 2 : OPEN_START / 2;
  return (start + phase) / getScreeningDistance(projectCount);
}

export function getScreeningScene(progress: number, projectCount: number): ScreeningScene {
  const position = clamp(progress) * getScreeningDistance(projectCount);
  const stride = PROJECT_DISTANCE + TRANSITION_DISTANCE;
  const project = Math.min(projectCount - 1, Math.floor(position / stride));
  const phase = position - project * stride;

  if (phase > PROJECT_DISTANCE && project < projectCount - 1) {
    const transition = clamp((phase - PROJECT_DISTANCE) / TRANSITION_DISTANCE);
    return {
      project: transition < 0.5 ? project : project + 1,
      reveal: 0,
      transition: { from: project, to: project + 1, progress: transition },
    };
  }

  const opening = clamp((phase - OPEN_START) / (OPEN_END - OPEN_START));
  const closing = project < projectCount - 1
    ? clamp((CLOSE_END - phase) / (CLOSE_END - CLOSE_START))
    : 1;
  return { project, reveal: Math.min(opening, closing) };
}
