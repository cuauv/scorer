/*
 *
 * PointsForm constants
 *
 */

export const TOGGLE_ACTION = 'app/PointsForm/TOGGLE_ACTION';

export const fields = [
  {
    id: 'coin-flip',
    type: 'toggle',
    label: 'Coin flip',
    points: 300,
  },
  {
    id: 'gate',
    type: 'toggle',
    label: 'Gate',
    points: 100,
  },
  {
    id: 'gate-heading',
    type: 'toggle',
    label: 'Fixed Gate Heading',
    points: 150,
  },
  {
    id: 'gate-color',
    type: 'toggle',
    label: 'Correct Color Gate',
    points: 150,
  },
];
