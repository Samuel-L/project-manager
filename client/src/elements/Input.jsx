import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    return (
      <input
        className={`custom-input ${this.props.validated} ${this.props.customClasses}`}
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.inputHandler}
        value={this.props.value}
      />
    );
  }
}

Input.propTypes = {
  validated: PropTypes.string.isRequired,
  customClasses: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
