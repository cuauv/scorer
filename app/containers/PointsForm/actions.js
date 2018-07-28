/*
 *
 * PointsForm actions
 *
 */

import { TOGGLE_ACTION } from './constants';

export function toggleAction(id) {
  return {
    type: TOGGLE_ACTION,
    id,
  };
}
