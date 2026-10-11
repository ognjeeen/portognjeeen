import type { CSSProperties } from 'react';
import { tileJitter } from '@/lib/cinema';

type Heading = 'h1' | 'h2';

// Splits text into individual letterboard tiles. The heading keeps the readable
// text in aria-label; tiles are decoration for screen readers.
export default function Letterboard({ lines, as: Tag = 'h2', id, className }: {
  lines: string[];
  as?: Heading;
  id?: string;
  className?: string;
}) {
  const label = lines.join(' ');
  let index = 0;

  return (
    <Tag className={className} id={id} aria-label={label} data-tiles>
      {lines.map((line, row) => (
        <span className="board-row" key={row} aria-hidden="true">
          {line.split(' ').map((word, wordIndex) => (
            <span className="word" key={wordIndex}>
              {[...word].map((letter) => {
                const { rotate, x, y } = tileJitter(label, index++);
                const style = { '--r': `${rotate}deg`, '--tx': `${x}px`, '--ty': `${y}px` } as CSSProperties;
                return <span className="tile" style={style} key={index}>{letter}</span>;
              })}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
