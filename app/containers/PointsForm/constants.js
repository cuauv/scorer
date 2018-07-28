/*
 *
 * PointsForm constants
 *
 */

export const TOGGLE_ACTION = 'app/PointsForm/TOGGLE_ACTION';
export const SELECT_ACTION = 'app/PointsForm/SELECT_ACTION';

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
  {
    id: 'path1',
    type: 'radio',
    label: 'Path #1',
    values: [
      {
        id: '0',
        label: 'None',
        points: 0,
      },
      {
        id: '1',
        label: 'Single',
        points: 100,
      },
      {
        id: '2',
        label: 'Double',
        points: 200,
      },
    ],
  },
  {
    id: 'path2',
    type: 'radio',
    label: 'Path #2',
    values: [
      {
        id: '0',
        label: 'None',
        points: 0,
      },
      {
        id: '1',
        label: 'Single',
        points: 100,
      },
      {
        id: '2',
        label: 'Double',
        points: 200,
      },
    ],
  },
  {
    id: 'craps',
    type: 'radio',
    label: 'Play Craps',
    values: [
      {
        id: 'none',
        label: 'none',
        points: 0,
      },
      {
        id: 'any',
        label: 'Any',
        points: 300,
      },
      {
        id: '7',
        label: '7 Sum',
        points: 600,
      },
      {
        id: '11',
        label: '11 Sum',
        points: 1000,
      },
    ],
  },
  {
    id: 'slots-arm',
    type: 'toggle',
    label: 'Slots Pull Arm',
    points: 400,
  },
  {
    id: 'slots1',
    type: 'radio',
    label: 'Slots Torpedoes #1',
    values: [
      {
        id: 'none',
        label: 'None',
        points: 0,
      },
      {
        id: 'open',
        label: 'Open',
        points: 800,
      },
      {
        id: 'large',
        label: 'Large',
        points: 1000,
      },
      {
        id: 'small',
        label: 'Small',
        points: 1500,
      },
    ],
  },
  {
    id: 'slots2',
    type: 'radio',
    label: 'Slots Torpedoes #2',
    values: [
      {
        id: 'none',
        label: 'None',
        points: 0,
      },
      {
        id: 'open',
        label: 'Open',
        points: 800,
      },
      {
        id: 'large',
        label: 'Large',
        points: 1000,
      },
      {
        id: 'small',
        label: 'Small',
        points: 1500,
      },
    ],
  },
  {
    id: 'roulette1',
    type: 'radio',
    label: 'Roulette #1',
    values: [
      {
        id: 'none',
        label: 'None',
        points: 0,
      },
      {
        id: 'any',
        label: 'Any',
        points: 600,
      },
      {
        id: 'called',
        label: 'Called',
        points: 800,
      },
      {
        id: 'green',
        label: 'Green',
        points: 1200,
      },
    ],
  },
  {
    id: 'roulette2',
    type: 'radio',
    label: 'Roulette #2',
    values: [
      {
        id: 'none',
        label: 'None',
        points: 0,
      },
      {
        id: 'any',
        label: 'Any',
        points: 600,
      },
      {
        id: 'called',
        label: 'Called',
        points: 800,
      },
      {
        id: 'green',
        label: 'Green',
        points: 1200,
      },
    ],
  },
  {
    id: 'surface',
    type: 'toggle',
    label: 'Surface in Square',
    points: 1000,
  },
  {
    id: 'surface-objects',
    type: 'radio',
    label: 'Surface with Objects',
    values: [
      {
        id: '0',
        label: '0',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 400,
      },
      {
        id: '2',
        label: '2',
        points: 800,
      },
      {
        id: '3',
        label: '3',
        points: 1200,
      },
      {
        id: '4',
        label: '4',
        points: 1600,
      },
      {
        id: '5',
        label: '5',
        points: 2000,
      },
      {
        id: '6',
        label: '6',
        points: 2400,
      },
      {
        id: '7',
        label: '7',
        points: 2800,
      },
      {
        id: '8',
        label: '8',
        points: 3200,
      },
    ],
  },
  {
    id: 'drop-objects',
    type: 'radio',
    label: 'Drop Objects',
    values: [
      {
        id: '0',
        label: '0',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 200,
      },
      {
        id: '2',
        label: '2',
        points: 400,
      },
      {
        id: '3',
        label: '3',
        points: 600,
      },
      {
        id: '4',
        label: '4',
        points: 800,
      },
      {
        id: '5',
        label: '5',
        points: 1000,
      },
      {
        id: '6',
        label: '6',
        points: 1200,
      },
      {
        id: '7',
        label: '7',
        points: 1400,
      },
      {
        id: '8',
        label: '8',
        points: 1600,
      },
    ],
  },
  {
    id: 'drop-funnels',
    type: 'radio',
    label: 'Drop in a Funnel',
    values: [
      {
        id: '0',
        label: '0',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 800,
      },
      {
        id: '2',
        label: '2',
        points: 1600,
      },
      {
        id: '3',
        label: '3',
        points: 2400,
      },
      {
        id: '4',
        label: '4',
        points: 3200,
      },
      {
        id: '5',
        label: '5',
        points: 4000,
      },
      {
        id: '6',
        label: '6',
        points: 4800,
      },
      {
        id: '7',
        label: '7',
        points: 5600,
      },
      {
        id: '8',
        label: '8',
        points: 6400,
      },
    ],
  },
  {
    id: 'drop-red-green-funnels',
    type: 'radio',
    label: 'Drop in the Correct Red/Green Funnel',
    values: [
      {
        id: '0',
        label: '0',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 200,
      },
      {
        id: '2',
        label: '2',
        points: 400,
      },
      {
        id: '3',
        label: '3',
        points: 600,
      },
      {
        id: '4',
        label: '4',
        points: 800,
      },
      {
        id: '5',
        label: '5',
        points: 1000,
      },
      {
        id: '6',
        label: '6',
        points: 1200,
      },
      {
        id: '7',
        label: '7',
        points: 1400,
      },
      {
        id: '8',
        label: '8',
        points: 1600,
      },
    ],
  },
  {
    id: 'drop-gold-funnels',
    type: 'radio',
    label: 'Drop in the Correct Gold Funnel',
    values: [
      {
        id: '0',
        label: '0',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 1500,
      },
      {
        id: '2',
        label: '2',
        points: 3000,
      },
    ],
  },
  {
    id: 'random-pinger1',
    type: 'toggle',
    label: 'Random Pinger #1',
    points: 500,
  },
  {
    id: 'random-pinger2',
    type: 'toggle',
    label: 'Random Pinger #2',
    points: 1500,
  },
  {
    id: 'buy-gold-chip-push',
    type: 'radio',
    label: 'Buy a Gold Chip - Push Plate',
    values: [
      {
        id: '0',
        label: '0',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 400,
      },
      {
        id: '2',
        label: '2',
        points: 400,
      },
    ],
  },
  {
    id: 'buy-gold-chip-retrieve',
    type: 'radio',
    label: 'Buy a Gold Chip - Retrieve Chip',
    values: [
      {
        id: '0',
        label: '0',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 600,
      },
      {
        id: '2',
        label: '2',
        points: 1200,
      },
    ],
  },
];
