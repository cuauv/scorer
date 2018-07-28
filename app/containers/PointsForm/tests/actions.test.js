import { toggleAction } from '../actions';
import { TOGGLE_ACTION } from '../constants';

describe('PointsForm actions', () => {
  describe('Toggle Action', () => {
    it('has a type of TOGGLE_ACTION', () => {
      const expected = {
        type: TOGGLE_ACTION,
        id: 'id',
      };
      expect(toggleAction('id')).toEqual(expected);
    });
  });
});
