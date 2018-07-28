/**
 *
 * RadioGroup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RadioGroup(props) {
  const { onSelect } = props;
  return (
    <div className="expanded button-group">
      {props.values.map(opt => (
        <button
          id={opt.id}
          key={opt.id}
          className={`button ${props.selected === opt.id ? 'success' : ''}`}
          onClick={evt => evt.preventDefault() || onSelect(opt.id)}
        >{`${opt.label} (${opt.points})`}</button>
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    }),
  ).isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RadioGroup;
