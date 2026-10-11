import assert from 'node:assert/strict';
import test from 'node:test';
import { COUNTER_DASH, counterTiles, rollYear, tileJitter } from '../lib/cinema.ts';

test('letterboard tiles get the same small offset on every render', () => {
  assert.deepEqual(tileJitter('Now showing', 3), tileJitter('Now showing', 3));
  assert.notDeepEqual(tileJitter('Now showing', 3), tileJitter('Now showing', 4));
  for (let index = 0; index < 200; index++) {
    const { rotate, x, y } = tileJitter('A developer with a plot twist.', index);
    assert.ok(Math.abs(rotate) <= 2.2);
    assert.ok(Math.abs(x) <= 1);
    assert.ok(Math.abs(y) <= 1.5);
  }
});

test('footage counter shows every digit with a dash between years', () => {
  assert.deepEqual(counterTiles([2022]), ['2', '0', '2', '2']);
  assert.deepEqual(counterTiles([2022, 2024]), ['2', '0', '2', '2', COUNTER_DASH, '2', '0', '2', '4']);
  assert.deepEqual(counterTiles([2025], true), ['2', '0', '2', '5', COUNTER_DASH]);
});

test('footage counter rolls up and stops on the real year', () => {
  assert.equal(rollYear(2024, 0), 1990);
  assert.equal(rollYear(2024, 1), 2024);
  assert.equal(rollYear(2024, 2), 2024);
  assert.ok(rollYear(2024, 0.5) > 1990 && rollYear(2024, 0.5) < 2024);
});
