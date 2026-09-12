import type { ReactNode } from 'react';

export default function ScriptMark({ children, kind = 'underline' }: {
  children: ReactNode;
  kind?: 'underline' | 'circle' | 'highlight';
}) {
  return (
    <span className={`script-mark script-mark-${kind}`}>
      {children}
      <svg className="script-ink" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" aria-hidden="true">
        {kind === 'circle' ? (
          <path pathLength="100" d="M85 5C62-1 17 0 5 13S7 36 40 37 96 35 98 22 84 1 55 3" />
        ) : kind === 'highlight' ? (
          <path pathLength="100" d="M3 24Q30 20 50 23T97 20" />
        ) : (
          <>
            <path pathLength="100" d="M2 28Q23 23 48 27T98 24" />
            <path className="script-ink-retrace" pathLength="100" d="M7 34Q40 29 66 32T95 29" />
          </>
        )}
      </svg>
    </span>
  );
}
