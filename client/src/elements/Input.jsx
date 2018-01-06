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
  validated: PropTypes.string,
  customClasses: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputHandler: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  inputHandler: null,
  placeholder: '',
  customClasses: '',
  validated: '',
};
