/**
 *
 * PointsForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import _ from 'lodash';

import injectReducer from 'utils/injectReducer';
import ToggleSlider from 'components/ToggleSlider';
import makeSelectPointsForm from './selectors';
import reducer from './reducer';
import { toggleAction } from './actions';
import { fields } from './constants';


function totalPoints(pointsform) {
  return _.reduce(fields, (total, field) => {
    const value = pointsform[field.id];

    switch (field.type) {
      case "toggle":
        return total + (value ? field.points : 0);
    }
  }, 0);
}

function PointsForm(props) {
  const makeFormRow = field => {
    switch (field.type) {
      case 'toggle':
        const label = `${field.label} (${field.points})`;

        return (
          <div className="grid-x grid-padding-x" key={field.id}>
            <div className="cell small-6">
              <label className="text-right" htmlFor={field.id}>{label}</label>
            </div>
            <div className="cell small-6">
              <ToggleSlider
                value={props.pointsform[field.id]}
                label={label}
                name={field.id}
                offLabel="0"
                onLabel={field.points}
                onChange={() => props.dispatch(toggleAction(field.id))}
              />
            </div>
          </div>
        );
      default:
        return `Unknown element type ${field.type}`;
    }
  };

  return (
    <form>
      <div className="stat text-center">Total Points: {totalPoints(props.pointsform)}</div>
      <div className="grid-container">{fields.map(makeFormRow)}</div>
    </form>
  );
}

const formShape = _(fields)
  .map(field => {
    let type;

    switch (field.type) {
      case 'toggle':
        type = PropTypes.bool.isRequired;
        break;
    }

    return [field.id, type];
  })
  .fromPairs()
  .value();

PointsForm.propTypes = {
  pointsform: PropTypes.shape(formShape),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pointsform: makeSelectPointsForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'pointsForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(PointsForm);
