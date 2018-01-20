import React from 'react';
import PropTypes from 'prop-types';

export default class FailureMessage extends React.Component {
  render() {
    return (
      <span className="failure-message">{this.props.children}</span>
    );
  }
}

FailureMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
