import assert from 'node:assert/strict';
import test from 'node:test';
import { getScreeningScene } from '../lib/screening.ts';
import * as screening from '../lib/screening.ts';

test('project navigation lands on a settled poster or fully visible app with the same opening duration', () => {
  for (let project = 0; project < 2; project++) {
    assert.deepEqual(getScreeningScene(screening.getScreeningTarget(project, false, 2), 2), { project, reveal: 0 });
    assert.deepEqual(getScreeningScene(screening.getScreeningTarget(project, true, 2), 2), { project, reveal: 1 });
  }
  assert.equal(screening.getScreeningDistance(2), 4.7);
  for (const [movie, widget, expected] of [[0.6, 3.7, 0], [0.975, 4.075, 0.5], [1.35, 4.45, 1]]) {
    assert.ok(Math.abs(getScreeningScene(movie / 4.7, 2).reveal - expected) < 1e-10);
    assert.ok(Math.abs(getScreeningScene(widget / 4.7, 2).reveal - expected) < 1e-10);
  }
});

test('projects have a separate scroll-controlled handoff after the first poster settles', () => {
  // Short screenshot holds preserve the banner and handoff distances.
  assert.deepEqual(getScreeningScene(2.4 / 4.7, 2), { project: 0, reveal: 0 });
  const leaving = getScreeningScene(2.65 / 4.7, 2);
  assert.equal(leaving.project, 0);
  assert.equal(leaving.reveal, 0);
  assert.equal(leaving.transition?.from, 0);
  assert.equal(leaving.transition?.to, 1);
  assert.ok(Math.abs(leaving.transition.progress - 0.25) < 1e-10);
  const entering = getScreeningScene(2.95 / 4.7, 2);
  assert.equal(entering.project, 1);
  assert.equal(entering.reveal, 0);
  assert.ok(Math.abs(entering.transition.progress - 0.75) < 1e-10);
});

test('each new poster stays visible before its app starts opening', () => {
  assert.deepEqual(getScreeningScene(0.3 / 4.7, 2), { project: 0, reveal: 0 });
  assert.deepEqual(getScreeningScene(3.4 / 4.7, 2), { project: 1, reveal: 0 });
});

test('scrolling through both projects and back restores their posters and previews', () => {
  assert.deepEqual(getScreeningScene(0, 2), { project: 0, reveal: 0 });
  assert.deepEqual(getScreeningScene(0.3, 2), { project: 0, reveal: 1 });
  assert.deepEqual(getScreeningScene(3.4 / 4.7, 2), { project: 1, reveal: 0 });
  assert.deepEqual(getScreeningScene(4.6 / 4.7, 2), { project: 1, reveal: 1 });
  assert.deepEqual(getScreeningScene(1, 2), { project: 1, reveal: 1 });
  assert.deepEqual(getScreeningScene(3.4 / 4.7, 2), { project: 1, reveal: 0 });
  assert.deepEqual(getScreeningScene(2.4 / 4.7, 2), { project: 0, reveal: 0 });
  assert.deepEqual(getScreeningScene(0.3, 2), { project: 0, reveal: 1 });
  assert.deepEqual(getScreeningScene(0, 2), { project: 0, reveal: 0 });
});
