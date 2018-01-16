import React from 'react';
import PropTypes from 'prop-types';

export default class SuccessMessage extends React.Component {
  render() {
    return (
      <span className="success-message">{this.props.children}</span>
    );
  }
}

SuccessMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
