/*
 *
 * PointsForm reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';

import { TOGGLE_ACTION, fields, SELECT_ACTION } from './constants';

export const initialState = fromJS(
  _(fields)
    .map(field => {
      let defaultValue;

      switch (field.type) {
        case 'toggle':
          defaultValue = false;
          break;

        case 'radio':
          defaultValue = field.values[0].id;
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

    case SELECT_ACTION:
      return state.update(action.id, () => action.value);

    default:
      return state;
  }
}

export default pointsFormReducer;
