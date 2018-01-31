import React from 'react';
import PropTypes from 'prop-types';

export default class OverviewHeading extends React.Component {
  render() {
    return (
      <h2 className="overview-heading">{this.props.children}</h2>
    );
  }
}

OverviewHeading.propTypes = {
  children: PropTypes.string.isRequired,
};
