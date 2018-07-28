import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pointsForm state domain
 */

const selectPointsFormDomain = state => state.get('pointsForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PointsForm
 */

const makeSelectPointsForm = () =>
  createSelector(selectPointsFormDomain, substate => substate.toJS());

export default makeSelectPointsForm;
export { selectPointsFormDomain };
