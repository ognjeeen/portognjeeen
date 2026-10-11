import type { ReactNode } from 'react';

const paths = {
  underline: { viewBox: '0 0 100 10', d: 'M2 6C30 2 70 8 98 4' },
  circle: { viewBox: '0 0 100 40', d: 'M60 4C20 2 2 12 4 22s30 16 56 14 40-8 38-18S70 1 40 6' },
  highlight: { viewBox: '0 0 100 10', d: 'M1 5C30 4 70 6 99 5' },
};

// A pencil mark on the screenplay. CinemaMotion draws it once it enters the viewport.
export default function ScriptMark({ children, kind = 'underline' }: {
  children: ReactNode;
  kind?: keyof typeof paths;
}) {
  const { viewBox, d } = paths[kind];
  return (
    <span className={`script-mark script-mark-${kind}`}>
      {children}
      <svg viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="100" d={d} />
      </svg>
    </span>
  );
}
