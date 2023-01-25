import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Button.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClick, title, className } = this.props;
    return (
      <button type="button" onClick={onClick} className={className}>{title}</button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  title: '',
  className: '',
};
