/*
 *
 * PointsForm reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';

import { TOGGLE_ACTION, fields } from './constants';

export const initialState = fromJS(
  _(fields)
    .map(field => {
      let defaultValue;

      switch (field.type) {
        case 'toggle':
          defaultValue = false;
          break;

        default:
          return [];
      }

      return [field.id, defaultValue];
    })
    .fromPairs()
    .value(),
);

function pointsFormReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACTION:
      return state.update(action.id, checked => !checked);
    default:
      return state;
  }
}

export default pointsFormReducer;
