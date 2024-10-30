import { expect, test } from 'vitest';
import { Slugs } from './slugs';

test('Make Slug from a text', async () => {
  const newTextSlugged = await Slugs.textToSlug('This is a test from sluggers');
  expect(newTextSlugged).toEqual('this-is-a-test-from-sluggers');
});
