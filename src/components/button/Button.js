import React from 'react';
import { PropTypes } from 'prop-types';
import './Button.css';

const Button = ({ onClick, title, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={className}
  >
    {title}
  </button>
);

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
