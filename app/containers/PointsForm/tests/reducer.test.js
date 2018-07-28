import { fromJS } from 'immutable';
import pointsFormReducer from '../reducer';

describe('pointsFormReducer', () => {
  it('returns the initial state', () => {
    expect(pointsFormReducer(undefined, {})).not.toEqual(fromJS({}));
  });
});
