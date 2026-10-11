export type TileJitter = { rotate: number; x: number; y: number };

const round = (value: number) => Math.round(value * 100) / 100;

function hash(text: string) {
  let value = 2166136261;
  for (let index = 0; index < text.length; index++) {
    value = Math.imul(value ^ text.charCodeAt(index), 16777619);
  }
  return value >>> 0;
}

// Letterboard letters sit slightly crooked. The offset is derived from the text,
// so server and client render the same sign.
export function tileJitter(text: string, index: number): TileJitter {
  let seed = hash(`${text}:${index}`);
  const next = () => {
    seed = Math.imul(seed ^ (seed >>> 15), 2246822507) >>> 0;
    seed = Math.imul(seed ^ (seed >>> 13), 3266489909) >>> 0;
    return ((seed ^ (seed >>> 16)) >>> 0) / 4294967296;
  };
  return {
    rotate: round(next() * 4.4 - 2.2),
    x: round(next() * 2 - 1),
    y: round(next() * 3 - 1.5),
  };
}

export const COUNTER_DASH = '-';

// Tiles for a footage counter: every digit gets a tile and ranges get a dash.
// An open range (a current role) ends with a dash.
export function counterTiles(years: number[], open = false) {
  const tiles = years.flatMap((year, index) => [
    ...(index > 0 ? [COUNTER_DASH] : []),
    ...String(year),
  ]);
  return open ? [...tiles, COUNTER_DASH] : tiles;
}

// The counter rolls up from an earlier year and eases into the real one.
export function rollYear(target: number, progress: number, from = 1990) {
  const clamped = Math.min(1, Math.max(0, progress));
  const eased = 1 - Math.pow(1 - clamped, 3);
  return Math.round(from + (target - from) * eased);
}
