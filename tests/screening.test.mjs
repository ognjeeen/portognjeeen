import assert from 'node:assert/strict';
import test from 'node:test';
import { getScreeningScene } from '../lib/screening.ts';

test('each new poster stays visible before its app starts opening', () => {
  assert.deepEqual(getScreeningScene(0.12, 2), { project: 0, reveal: 0 });
  assert.deepEqual(getScreeningScene(0.62, 2), { project: 1, reveal: 0 });
});

test('scrolling through both projects and back restores their posters and previews', () => {
  assert.deepEqual(getScreeningScene(0, 2), { project: 0, reveal: 0 });
  assert.deepEqual(getScreeningScene(0.3, 2), { project: 0, reveal: 1 });
  assert.deepEqual(getScreeningScene(0.5, 2), { project: 1, reveal: 0 });
  assert.deepEqual(getScreeningScene(0.8, 2), { project: 1, reveal: 1 });
  assert.deepEqual(getScreeningScene(1, 2), { project: 1, reveal: 1 });
  assert.deepEqual(getScreeningScene(0.5, 2), { project: 1, reveal: 0 });
  assert.deepEqual(getScreeningScene(0.48, 2), { project: 0, reveal: 0 });
  assert.deepEqual(getScreeningScene(0.3, 2), { project: 0, reveal: 1 });
  assert.deepEqual(getScreeningScene(0, 2), { project: 0, reveal: 0 });
});
