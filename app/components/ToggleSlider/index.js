/**
 *
 * ToggleSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ToggleSlider(props) {
  return (
    <div className="switch">
      <input
        id={props.name}
        className="switch-input"
        type="checkbox"
        name={props.name}
        checked={props.value}
        onChange={evt => props.onChange(!evt.target.value)}
      />
      <label className="switch-paddle" htmlFor={props.name}>
        <span className="show-for-sr">{props.label}</span>
        <span className="switch-active" aria-hidden="true">
          {props.onLabel}
        </span>
        <span className="switch-inactive" aria-hidden="true">
          {props.offLabel}
        </span>
      </label>
    </div>
  );
}

ToggleSlider.propTypes = {
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default ToggleSlider;
