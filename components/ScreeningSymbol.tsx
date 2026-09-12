export default function ScreeningSymbol() {
  return (
    <svg className="screening-symbol" viewBox="0 0 310 310" fill="none" aria-hidden="true">
      <ellipse className="symbol-orbit-a" cx="155" cy="155" rx="108" ry="141" stroke="currentColor" strokeOpacity=".4" transform="rotate(48 155 155)" />
      <ellipse className="symbol-orbit-b" cx="155" cy="155" rx="108" ry="141" stroke="currentColor" strokeOpacity=".4" transform="rotate(-48 155 155)" />
      <circle className="symbol-gauge" cx="155" cy="155" r="115" stroke="currentColor" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="74 100" transform="rotate(-90 155 155)" opacity="0" />
      <circle className="symbol-gauge" cx="155" cy="155" r="87" stroke="currentColor" strokeWidth="8" strokeLinecap="round" pathLength="100" strokeDasharray="42 100" transform="rotate(-90 155 155)" opacity="0" />
      <rect className="symbol-core" x="78" y="78" width="154" height="154" rx="77" fill="currentColor" />
      <g className="symbol-turn">
        <g className="symbol-holes">
          <circle cx="155" cy="155" r="8" />
          <circle cx="155" cy="111" r="19" />
          <circle cx="199" cy="155" r="19" />
          <circle cx="155" cy="199" r="19" />
          <circle cx="111" cy="155" r="19" />
        </g>
      </g>
      <path className="symbol-widget-lines" d="M134 143h42m-42 12h30m-30 12h17" strokeWidth="4" strokeLinecap="round" opacity="0" />
    </svg>
  );
}
