export function getScreeningScene(progress: number, projectCount: number) {
  const position = Math.max(0, Math.min(1, progress)) * projectCount;
  const project = Math.min(projectCount - 1, Math.floor(position));
  const phase = position - project;
  const opening = Math.max(0, Math.min(1, (phase - 0.28) / (0.6 - 0.28)));
  const closing = project < projectCount - 1
    ? Math.max(0, Math.min(1, (0.96 - phase) / (0.96 - 0.8)))
    : 1;

  return { project, reveal: Math.min(opening, closing) };
}
