import * as migration_20260903_071638_initial from './20260903_071638_initial';

export const migrations = [
  {
    up: migration_20260903_071638_initial.up,
    down: migration_20260903_071638_initial.down,
    name: '20260903_071638_initial'
  },
];
