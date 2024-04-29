import { writable } from 'svelte/store';

export const dimensions = writable({
  width: 600,
  height: 900
});

export const countOfEnemies = writable(5);
