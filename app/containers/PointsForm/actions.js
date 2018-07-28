/*
 *
 * PointsForm actions
 *
 */

import { TOGGLE_ACTION, SELECT_ACTION } from './constants';

export function toggleAction(id) {
  return {
    type: TOGGLE_ACTION,
    id,
  };
}

export function selectAction(id, value) {
  return {
    type: SELECT_ACTION,
    id,
    value,
  };
}
