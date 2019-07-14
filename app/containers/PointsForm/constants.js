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
    id: 'gate-side',
    type: 'radio',
    label: 'Gate Side',
    values: [
      {
        id: '0',
        label: 'None',
        points: 0,
      },
      {
        id: '1',
        label: '60%',
        points: 200,
      },
      {
        id: '2',
        label: '40%',
        points: 400,
      },
    ],
  },
  {
    id: 'gate-style',
    type: 'radio',
    label: 'Gate Style',
    values: [
      {
        id: '0',
        label: 'None',
        points: 0,
      },
      {
        id: '1',
        label: '100',
        points: 100,
      },
      {
        id: '2',
        label: '200',
        points: 200,
      },
      {
        id: '3',
        label: '300',
        points: 300,
      },
      {
        id: '4',
        label: '400',
        points: 400,
      },
      {
        id: '5',
        label: '500',
        points: 500,
      },
      {
        id: '6',
        label: '600',
        points: 600,
      },
      {
        id: '7',
        label: '700',
        points: 700,
      },
      {
        id: '8',
        label: '800',
        points: 800,
      },
    ],
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
    id: 'slay',
    type: 'radio',
    label: 'Slay Vampires',
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
        id: 'called',
        label: 'Called',
        points: 600,
      },
    ],
  },
  {
    id: 'slay-back',
    type: 'toggle',
    label: 'Slay Vampires - Back Face',
    points: 300,
  },
  {
    id: 'garlic',
    type: 'radio',
    label: 'Drop Garlic - Pick Up Garlic',
    values: [
      {
        id: 'none',
        label: 'none',
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
    ],
  },
  {
    id: 'drop-garlic-open',
    type: 'radio',
    label: 'Drop Garlic - Open Bin',
    values: [
      {
        id: 'none',
        label: 'none',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 700,
      },
      {
        id: '2',
        label: '2',
        points: 1400,
      },
      {
        id: '3',
        label: '3',
        points: 2100,
      },
      {
        id: '4',
        label: '4',
        points: 2800,
      },
    ],
  },
  {
    id: 'drop-garlic-closed',
    type: 'radio',
    label: 'Drop Garlic - Closed Bin',
    values: [
      {
        id: 'none',
        label: 'none',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 1000,
      },
      {
        id: '2',
        label: '2',
        points: 2000,
      },
      {
        id: '3',
        label: '3',
        points: 3000,
      },
      {
        id: '4',
        label: '4',
        points: 4000,
      },
    ],
  },
  {
    id: 'drop-garlic-arm',
    type: 'toggle',
    label: 'Drop Garlic - Move Arm',
    points: 400,
  },
  {
    id: 'stake-open',
    type: 'radio',
    label: 'Stake through Heart - Open Oval',
    values: [
      {
        id: 'none',
        label: 'None',
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
    ],
  },
  {
    id: 'stake-closed',
    type: 'radio',
    label: 'Stake through Heart - Closed Oval',
    values: [
      {
        id: 'none',
        label: 'None',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 1000,
      },
      {
        id: '2',
        label: '2',
        points: 2000,
      },
    ],
  },
  {
    id: 'stake-heart',
    type: 'radio',
    label: 'Stake through Heart - Heart',
    values: [
      {
        id: 'none',
        label: 'None',
        points: 0,
      },
      {
        id: '1',
        label: '1',
        points: 1200,
      },
      {
        id: '2',
        label: '2',
        points: 2400,
      },
    ],
  },
  {
    id: 'move-lever',
    type: 'toggle',
    label: 'Stake through Heart - Move Lever',
    points: 400,
  },
  {
    id: 'stake-bonus',
    type: 'toggle',
    label: 'Stake through Heart - Closed Oval, Heart (Bonus)',
    points: 500,
  },
  {
    id: 'surface',
    type: 'toggle',
    label: 'Surface in Octagon',
    points: 1000,
  },
  {
    id: 'sunlight-surface-vamp',
    type: 'radio',
    label: 'Expose to Sunlight - Surface with Vampire',
    values: [
      {
        id: 'none',
        label: 'None',
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
    ],
  },
  {
    id: 'sunlight-open-coffin',
    type: 'toggle',
    label: 'Expose to Sunlight - Open Coffin',
    points: 400,
  },
  {
    id: 'crucifix',
    type: 'radio',
    label: 'Expose to Sunlight - Pick Up Crucifix',
    values: [
      {
        id: 'none',
        label: 'None',
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
    ],
  },
  {
    id: 'sunlight-drop-crucifix',
    type: 'radio',
    label: 'Expose to Sunlight - Drop Crucifix',
    values: [
      {
        id: 'none',
        label: 'None',
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
];
